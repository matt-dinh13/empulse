"""Fix the 1 remaining diagram with tab character in name."""
import pyodbc
import re
import os
import json
import hashlib

EAP_FILE = r"C:\Users\Lan.Dinh\Documents\EA\BSL 1.eap"
OUTPUT_DIR = r"C:\Users\Lan.Dinh\Documents\EA\mermaid_export"
CONN_STR = (
    r"DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};"
    rf"DBQ={EAP_FILE};"
    r"ReadOnly=1;"
)

DIAG_ID = 155513

def sanitize_name(name):
    if not name: return "unnamed"
    s = re.sub(r'[^a-zA-Z0-9_]', '_', name)
    s = re.sub(r'_+', '_', s).strip('_')
    if not s or s[0].isdigit(): s = 'n_' + s
    return s[:60]

def sanitize_label(name):
    if not name: return "unnamed"
    return name.replace('"', "'").replace('<', '\u2039').replace('>', '\u203a').replace('&', 'and')

def safe_filename(name):
    # Also strip tab and other control chars
    s = re.sub(r'[\x00-\x1f<>:"/\\|?*]', '_', name)
    return s[:120].strip('. ')

def get_package_path(pkg_id, packages):
    parts, visited, pid = [], set(), pkg_id
    while pid and pid in packages and pid not in visited:
        visited.add(pid)
        parts.append(packages[pid]['name'] or 'unnamed')
        pid = packages[pid]['parent']
    parts.reverse()
    return '/'.join(parts)

def gen_generic(elements, connectors, elem_map):
    lines = ["graph TD"]
    for e in elements:
        sid = sanitize_name(e['name']) if e['name'] else f"el_{e['id']}"
        label = sanitize_label(e['name']) if e['name'] else e['type']
        lines.append(f'    {sid}["{label}"]')
    for conn in connectors:
        if conn['start_id'] in elem_map and conn['end_id'] in elem_map:
            s = elem_map[conn['start_id']]
            d = elem_map[conn['end_id']]
            src = sanitize_name(s['name']) if s['name'] else f"el_{s['id']}"
            dst = sanitize_name(d['name']) if d['name'] else f"el_{d['id']}"
            lbl = sanitize_label(conn['name'])
            if lbl:
                lines.append(f"    {src} -->|{lbl}| {dst}")
            else:
                lines.append(f"    {src} --> {dst}")
    return '\n'.join(lines) if len(lines) > 1 else None

# Use Case generator
def gen_usecase(elements, connectors, elem_map):
    lines = ["graph LR"]
    for e in elements:
        sid = sanitize_name(e['name'])
        label = sanitize_label(e['name'])
        if e['type'] == 'Actor':
            lines.append(f'    {sid}[/"{label}"/]')
        elif e['type'] == 'UseCase':
            lines.append(f'    {sid}(("{label}"))')
        else:
            lines.append(f'    {sid}["{label}"]')
    for conn in connectors:
        if conn['start_id'] in elem_map and conn['end_id'] in elem_map:
            src = sanitize_name(elem_map[conn['start_id']]['name'])
            dst = sanitize_name(elem_map[conn['end_id']]['name'])
            lbl = sanitize_label(conn['name'])
            if conn['type'] == 'UseCase':
                if conn['stereotype'] == 'include':
                    lines.append(f"    {src} -.->|include| {dst}")
                elif conn['stereotype'] == 'extend':
                    lines.append(f"    {src} -.->|extend| {dst}")
                else:
                    lines.append(f"    {src} --> {dst}")
            elif conn['type'] == 'Association':
                lines.append(f"    {src} --- {dst}")
            else:
                arrow = f"|{lbl}|" if lbl else ""
                lines.append(f"    {src} -->{arrow} {dst}")
    return '\n'.join(lines) if len(lines) > 1 else None

GENERATORS = {
    'Use Case': gen_usecase,
    'Custom': gen_generic,
}

def main():
    conn = pyodbc.connect(CONN_STR)
    c = conn.cursor()
    
    # Load packages
    pkgs = {}
    c.execute("SELECT Package_ID, Name, Parent_ID FROM t_package")
    for r in c.fetchall(): pkgs[r[0]] = {'name': r[1], 'parent': r[2]}
    
    # Load the specific diagram
    c.execute("SELECT Diagram_ID, Name, Diagram_Type, Package_ID FROM t_diagram WHERE Diagram_ID = ?", DIAG_ID)
    row = c.fetchone()
    if not row:
        print(f"Diagram {DIAG_ID} not found!")
        return
    
    diag = {'id': row[0], 'name': row[1] or 'Unnamed', 'type': row[2] or 'Unknown', 'package_id': row[3]}
    print(f"Diagram: {repr(diag['name'])}")
    print(f"Type: {diag['type']}")
    
    # Load elements
    c.execute("SELECT Object_ID FROM t_diagramobjects WHERE Diagram_ID = ?", DIAG_ID)
    obj_ids = [r[0] for r in c.fetchall()]
    
    elem_map = {}
    elements = []
    for oid in obj_ids:
        c.execute("SELECT Object_ID, Object_Type, Name, Stereotype, Note, ParentID FROM t_object WHERE Object_ID = ?", oid)
        r = c.fetchone()
        if r:
            e = {'id': r[0], 'type': r[1], 'name': r[2] or '', 'stereotype': r[3] or '', 'note': r[4] or '', 'parent_id': r[5]}
            elem_map[oid] = e
            elements.append(e)
    
    # Load connectors
    c.execute("SELECT ConnectorID FROM t_diagramlinks WHERE DiagramID = ? AND (Hidden = 0 OR Hidden IS NULL)", DIAG_ID)
    link_ids = [r[0] for r in c.fetchall()]
    connectors = []
    for cid in link_ids:
        c.execute("SELECT Connector_ID, Connector_Type, Name, Start_Object_ID, End_Object_ID, Direction, SourceCard, DestCard, Stereotype FROM t_connector WHERE Connector_ID = ?", cid)
        r = c.fetchone()
        if r:
            connectors.append({'id': r[0], 'type': r[1], 'name': r[2] or '', 'start_id': r[3], 'end_id': r[4], 'direction': r[5] or '', 'source_card': r[6] or '', 'dest_card': r[7] or '', 'stereotype': r[8] or ''})
    
    # Generate
    gen = GENERATORS.get(diag['type'], gen_generic)
    mermaid = gen(elements, connectors, elem_map)
    if not mermaid:
        print("No mermaid output!")
        return
    
    # Build path with control char sanitization
    pkg_path = get_package_path(diag['package_id'], pkgs)
    # Sanitize control chars from package path too
    clean_pkg_path = re.sub(r'[\x00-\x1f]', '_', pkg_path)
    type_dir = safe_filename(diag['type'])
    
    pkg_hash = hashlib.md5(pkg_path.encode()).hexdigest()[:8]
    short_pkg = safe_filename(clean_pkg_path)[:80] + '_' + pkg_hash
    
    out_dir = os.path.join(OUTPUT_DIR, type_dir, short_pkg)
    fname = safe_filename(diag['name']) + '.md'
    out_path = os.path.join(out_dir, fname)
    
    # Ensure path fits
    if len(out_path) > 250:
        out_dir = os.path.join(OUTPUT_DIR, type_dir, '_long_paths')
        fname = f"{DIAG_ID}_{safe_filename(diag['name'])[:80]}.md"
        out_path = os.path.join(out_dir, fname)
    
    os.makedirs(out_dir, exist_ok=True)
    
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(f"# {diag['name']}\n\n")
        f.write(f"- **Diagram Type**: {diag['type']}\n")
        f.write(f"- **Package**: {pkg_path}\n")
        f.write(f"- **Diagram ID**: {diag['id']}\n")
        f.write(f"- **Elements**: {len(elements)}\n")
        f.write(f"- **Connectors**: {len(connectors)}\n\n")
        f.write("```mermaid\n")
        f.write(mermaid)
        f.write("\n```\n")
    
    print(f"\nSUCCESS! Written to: {out_path}")
    print(f"Path length: {len(out_path)}")
    
    # Update summary
    summary_path = os.path.join(OUTPUT_DIR, '_summary.json')
    with open(summary_path, 'r', encoding='utf-8') as f:
        summary = json.load(f)
    summary['exported'] += 1
    summary['errors'] = max(0, summary['errors'] - 1)
    summary['diagrams'].append({
        'name': diag['name'],
        'type': diag['type'],
        'package': pkg_path,
        'elements': len(elements),
        'connectors': len(connectors),
        'file': os.path.relpath(out_path, OUTPUT_DIR)
    })
    with open(summary_path, 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)
    
    print(f"Updated summary. Total exported: {summary['exported']}")
    conn.close()

if __name__ == '__main__':
    main()

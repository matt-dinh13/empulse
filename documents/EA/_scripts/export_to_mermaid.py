"""
Export Enterprise Architect .eap diagrams to Mermaid markdown files.
Reads the .eap (MS Access DB) directly via ODBC.
"""
import pyodbc
import os
import re
import json
import sys
from collections import defaultdict

EAP_FILE = r"C:\Users\Lan.Dinh\Documents\EA\BSL 1.eap"
OUTPUT_DIR = r"C:\Users\Lan.Dinh\Documents\EA\mermaid_export"

CONN_STR = (
    r"DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};"
    rf"DBQ={EAP_FILE};"
    r"ReadOnly=1;"
)

def sanitize_name(name):
    """Make a name safe for Mermaid node IDs."""
    if not name:
        return "unnamed"
    s = re.sub(r'[^a-zA-Z0-9_]', '_', name)
    s = re.sub(r'_+', '_', s).strip('_')
    if not s or s[0].isdigit():
        s = 'n_' + s
    return s[:60]

def sanitize_label(name):
    """Make a label safe for Mermaid display."""
    if not name:
        return ""
    return name.replace('"', "'").replace('<', '‹').replace('>', '›').replace('&', 'and')

def safe_filename(name):
    """Create a safe filename."""
    s = re.sub(r'[<>:"/\\|?*]', '_', name)
    return s[:120].strip('. ')

def connect():
    return pyodbc.connect(CONN_STR)

# ─── Data Loading ───────────────────────────────────────────────
def load_packages(cursor):
    """Load all packages into a dict keyed by Package_ID."""
    pkgs = {}
    cursor.execute("SELECT Package_ID, Name, Parent_ID FROM t_package")
    for row in cursor.fetchall():
        pkgs[row[0]] = {'name': row[1], 'parent': row[2]}
    return pkgs

def get_package_path(pkg_id, packages):
    """Build a path string for a package."""
    parts = []
    visited = set()
    pid = pkg_id
    while pid and pid in packages and pid not in visited:
        visited.add(pid)
        parts.append(packages[pid]['name'] or 'unnamed')
        pid = packages[pid]['parent']
    parts.reverse()
    return '/'.join(parts)

def load_diagrams(cursor):
    """Load all diagrams."""
    diagrams = []
    cursor.execute("SELECT Diagram_ID, Name, Diagram_Type, Package_ID, ParentID FROM t_diagram ORDER BY Diagram_Type, Name")
    for row in cursor.fetchall():
        diagrams.append({
            'id': row[0], 'name': row[1] or 'Unnamed',
            'type': row[2] or 'Unknown', 'package_id': row[3], 'parent_id': row[4]
        })
    return diagrams

def load_diagram_objects(cursor, diagram_id):
    """Load elements on a specific diagram."""
    cursor.execute("""
        SELECT do.Object_ID, do.Sequence
        FROM t_diagramobjects AS do
        WHERE do.Diagram_ID = ?
        ORDER BY do.Sequence
    """, diagram_id)
    return [(row[0], row[1]) for row in cursor.fetchall()]

def load_element(cursor, element_id):
    """Load a single element's details."""
    cursor.execute("""
        SELECT Object_ID, Object_Type, Name, Stereotype, Note, ParentID
        FROM t_object WHERE Object_ID = ?
    """, element_id)
    row = cursor.fetchone()
    if row:
        return {
            'id': row[0], 'type': row[1], 'name': row[2] or '',
            'stereotype': row[3] or '', 'note': row[4] or '', 'parent_id': row[5]
        }
    return None

def load_diagram_links(cursor, diagram_id):
    """Load connectors visible on a diagram."""
    cursor.execute("""
        SELECT dl.ConnectorID, dl.Hidden
        FROM t_diagramlinks AS dl
        WHERE dl.DiagramID = ? AND (dl.Hidden = 0 OR dl.Hidden IS NULL)
    """, diagram_id)
    return [row[0] for row in cursor.fetchall()]

def load_connector(cursor, connector_id):
    """Load a single connector."""
    cursor.execute("""
        SELECT Connector_ID, Connector_Type, Name, Start_Object_ID, End_Object_ID,
               Direction, SourceCard, DestCard, Stereotype
        FROM t_connector WHERE Connector_ID = ?
    """, connector_id)
    row = cursor.fetchone()
    if row:
        return {
            'id': row[0], 'type': row[1], 'name': row[2] or '',
            'start_id': row[3], 'end_id': row[4],
            'direction': row[5] or '', 'source_card': row[6] or '',
            'dest_card': row[7] or '', 'stereotype': row[8] or ''
        }
    return None

# ─── Mermaid Generators ────────────────────────────────────────
def gen_sequence_diagram(elements, connectors, elem_map):
    """Generate a Mermaid sequence diagram."""
    lines = ["sequenceDiagram"]
    participants = []
    seen = set()
    
    # Add participants in order
    for conn in connectors:
        for eid in [conn['start_id'], conn['end_id']]:
            if eid not in seen and eid in elem_map:
                seen.add(eid)
                participants.append(elem_map[eid])
    
    for p in participants:
        label = sanitize_label(p['name'])
        lines.append(f"    participant {sanitize_name(p['name'])} as {label}")
    
    # Add messages
    for conn in connectors:
        if conn['start_id'] in elem_map and conn['end_id'] in elem_map:
            src = sanitize_name(elem_map[conn['start_id']]['name'])
            dst = sanitize_name(elem_map[conn['end_id']]['name'])
            msg = sanitize_label(conn['name']) if conn['name'] else conn['type']
            
            if conn['type'] == 'Sequence':
                lines.append(f"    {src}->>+{dst}: {msg}")
            elif 'return' in conn['name'].lower() if conn['name'] else False:
                lines.append(f"    {dst}-->>-{src}: {msg}")
            else:
                lines.append(f"    {src}->>{dst}: {msg}")
    
    return '\n'.join(lines) if len(lines) > 1 else None

def gen_usecase_diagram(elements, connectors, elem_map):
    """Generate a Use Case diagram as a flowchart."""
    lines = ["graph LR"]
    actors = []
    usecases = []
    
    for e in elements:
        sid = sanitize_name(e['name'])
        label = sanitize_label(e['name'])
        if e['type'] == 'Actor':
            lines.append(f"    {sid}[/\"{label}\"/]")
            actors.append(e)
        elif e['type'] == 'UseCase':
            lines.append(f"    {sid}((\"{label}\"))")
            usecases.append(e)
        elif e['type'] == 'Boundary':
            lines.append(f"    {sid}[\"{label}\"]")
        else:
            lines.append(f"    {sid}[\"{label}\"]")
    
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

def gen_class_diagram(elements, connectors, elem_map):
    """Generate a class/logical diagram."""
    lines = ["classDiagram"]
    
    for e in elements:
        label = sanitize_label(e['name'])
        sid = sanitize_name(e['name'])
        if e['type'] in ('Class', 'DataType', 'Enumeration', 'Interface'):
            lines.append(f"    class {sid}[\"{label}\"]")
        elif e['type'] == 'Package':
            lines.append(f"    class {sid}[\"{label}\"]")
        elif e['name']:
            lines.append(f"    class {sid}[\"{label}\"]")
    
    for conn in connectors:
        if conn['start_id'] in elem_map and conn['end_id'] in elem_map:
            src = sanitize_name(elem_map[conn['start_id']]['name'])
            dst = sanitize_name(elem_map[conn['end_id']]['name'])
            lbl = sanitize_label(conn['name'])
            label_str = f" : {lbl}" if lbl else ""
            
            if conn['type'] == 'Generalization':
                lines.append(f"    {dst} <|-- {src}{label_str}")
            elif conn['type'] == 'Realisation':
                lines.append(f"    {dst} <|.. {src}{label_str}")
            elif conn['type'] in ('Aggregation',):
                lines.append(f"    {dst} o-- {src}{label_str}")
            elif conn['type'] == 'Composition':
                lines.append(f"    {dst} *-- {src}{label_str}")
            elif conn['type'] == 'Dependency':
                lines.append(f"    {src} ..> {dst}{label_str}")
            elif conn['type'] == 'Association':
                card = ""
                if conn['source_card'] or conn['dest_card']:
                    card = f" \"{conn['source_card']}\" -- \"{conn['dest_card']}\""
                lines.append(f"    {src} --> {dst}{label_str}")
            else:
                lines.append(f"    {src} --> {dst}{label_str}")
    
    return '\n'.join(lines) if len(lines) > 1 else None

def gen_activity_diagram(elements, connectors, elem_map):
    """Generate an activity diagram as flowchart."""
    lines = ["flowchart TD"]
    
    for e in elements:
        sid = sanitize_name(e['name']) if e['name'] else f"node_{e['id']}"
        label = sanitize_label(e['name']) if e['name'] else e['type']
        
        if e['type'] == 'StateNode' and e['name'] in ('Initial', ''):
            lines.append(f"    {sid}(( ))")
        elif e['type'] == 'StateNode':
            lines.append(f"    {sid}(( ))")
        elif e['type'] == 'Action':
            lines.append(f"    {sid}[\"{label}\"]")
        elif e['type'] == 'Activity':
            lines.append(f"    {sid}[\"{label}\"]")
        elif e['type'] == 'Decision':
            lines.append(f"    {sid}{{\"{label}\"}}")
        elif e['type'] == 'MergeNode':
            lines.append(f"    {sid}{{\"{label}\"}}")
        elif e['type'] == 'Synchronization':
            lines.append(f"    {sid}[\"{label}\"]")
        else:
            lines.append(f"    {sid}[\"{label}\"]")
    
    for conn in connectors:
        if conn['start_id'] in elem_map and conn['end_id'] in elem_map:
            s_elem = elem_map[conn['start_id']]
            d_elem = elem_map[conn['end_id']]
            src = sanitize_name(s_elem['name']) if s_elem['name'] else f"node_{s_elem['id']}"
            dst = sanitize_name(d_elem['name']) if d_elem['name'] else f"node_{d_elem['id']}"
            lbl = sanitize_label(conn['name'])
            if lbl:
                lines.append(f"    {src} -->|{lbl}| {dst}")
            else:
                lines.append(f"    {src} --> {dst}")
    
    return '\n'.join(lines) if len(lines) > 1 else None

def gen_statechart(elements, connectors, elem_map):
    """Generate a state diagram."""
    lines = ["stateDiagram-v2"]
    
    for e in elements:
        sid = sanitize_name(e['name']) if e['name'] else f"s_{e['id']}"
        label = sanitize_label(e['name'])
        if e['type'] == 'StateNode':
            if 'initial' in (e.get('stereotype','') or '').lower() or not e['name']:
                lines.append(f"    [*] --> {sid}")
            elif 'final' in (e.get('stereotype','') or '').lower():
                lines.append(f"    {sid} --> [*]")
            else:
                lines.append(f"    state \"{label}\" as {sid}")
        elif e['type'] == 'State':
            lines.append(f"    state \"{label}\" as {sid}")
        else:
            lines.append(f"    state \"{label}\" as {sid}")
    
    for conn in connectors:
        if conn['start_id'] in elem_map and conn['end_id'] in elem_map:
            s_elem = elem_map[conn['start_id']]
            d_elem = elem_map[conn['end_id']]
            src = sanitize_name(s_elem['name']) if s_elem['name'] else f"s_{s_elem['id']}"
            dst = sanitize_name(d_elem['name']) if d_elem['name'] else f"s_{d_elem['id']}"
            lbl = sanitize_label(conn['name'])
            if lbl:
                lines.append(f"    {src} --> {dst} : {lbl}")
            else:
                lines.append(f"    {src} --> {dst}")
    
    return '\n'.join(lines) if len(lines) > 1 else None

def gen_component_diagram(elements, connectors, elem_map):
    """Generate a component diagram as flowchart."""
    lines = ["graph TD"]
    
    for e in elements:
        sid = sanitize_name(e['name'])
        label = sanitize_label(e['name'])
        if e['type'] == 'Component':
            lines.append(f"    {sid}[[\"{label}\"]]")
        elif e['type'] == 'ProvidedInterface':
            lines.append(f"    {sid}((\"{label}\"))")
        elif e['type'] == 'RequiredInterface':
            lines.append(f"    {sid}((\"{label}\"))")
        else:
            lines.append(f"    {sid}[\"{label}\"]")
    
    for conn in connectors:
        if conn['start_id'] in elem_map and conn['end_id'] in elem_map:
            src = sanitize_name(elem_map[conn['start_id']]['name'])
            dst = sanitize_name(elem_map[conn['end_id']]['name'])
            lbl = sanitize_label(conn['name'])
            if lbl:
                lines.append(f"    {src} -->|{lbl}| {dst}")
            else:
                lines.append(f"    {src} --> {dst}")
    
    return '\n'.join(lines) if len(lines) > 1 else None

def gen_generic_diagram(elements, connectors, elem_map):
    """Fallback: generate a generic flowchart for any diagram type."""
    lines = ["graph TD"]
    
    for e in elements:
        sid = sanitize_name(e['name']) if e['name'] else f"el_{e['id']}"
        label = sanitize_label(e['name']) if e['name'] else e['type']
        lines.append(f"    {sid}[\"{label}\"]")
    
    for conn in connectors:
        if conn['start_id'] in elem_map and conn['end_id'] in elem_map:
            s_elem = elem_map[conn['start_id']]
            d_elem = elem_map[conn['end_id']]
            src = sanitize_name(s_elem['name']) if s_elem['name'] else f"el_{s_elem['id']}"
            dst = sanitize_name(d_elem['name']) if d_elem['name'] else f"el_{d_elem['id']}"
            lbl = sanitize_label(conn['name'])
            if lbl:
                lines.append(f"    {src} -->|{lbl}| {dst}")
            else:
                lines.append(f"    {src} --> {dst}")
    
    return '\n'.join(lines) if len(lines) > 1 else None

# ─── Diagram Type → Generator Mapping ──────────────────────────
GENERATORS = {
    'Sequence': gen_sequence_diagram,
    'Use Case': gen_usecase_diagram,
    'Logical': gen_class_diagram,
    'Class': gen_class_diagram,
    'Object': gen_class_diagram,
    'Activity': gen_activity_diagram,
    'Statechart': gen_statechart,
    'Component': gen_component_diagram,
    'Package': gen_generic_diagram,
    'Custom': gen_generic_diagram,
    'Analysis': gen_generic_diagram,
    'Deployment': gen_generic_diagram,
}

# ─── Main Export ────────────────────────────────────────────────
def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    conn = connect()
    cursor = conn.cursor()
    print("Connected to EAP database.")
    
    packages = load_packages(cursor)
    diagrams = load_diagrams(cursor)
    print(f"Found {len(diagrams)} diagrams, {len(packages)} packages.")
    
    # Stats
    type_counts = defaultdict(int)
    for d in diagrams:
        type_counts[d['type']] += 1
    print("\n--- Diagram types ---")
    for t, c in sorted(type_counts.items(), key=lambda x: -x[1]):
        print(f"  {t}: {c}")
    
    # Process each diagram
    success = 0
    skipped = 0
    errors = 0
    summary = []
    
    for i, diag in enumerate(diagrams):
        if (i+1) % 200 == 0:
            print(f"Processing {i+1}/{len(diagrams)}...")
        
        try:
            # Load diagram elements
            diag_objs = load_diagram_objects(cursor, diag['id'])
            if not diag_objs:
                skipped += 1
                continue
            
            elem_map = {}
            elements = []
            for obj_id, seq in diag_objs:
                elem = load_element(cursor, obj_id)
                if elem:
                    elem_map[obj_id] = elem
                    elements.append(elem)
            
            if not elements:
                skipped += 1
                continue
            
            # Load connectors
            link_ids = load_diagram_links(cursor, diag['id'])
            connectors = []
            for cid in link_ids:
                conn_data = load_connector(cursor, cid)
                if conn_data:
                    connectors.append(conn_data)
            
            # Select generator
            generator = GENERATORS.get(diag['type'], gen_generic_diagram)
            mermaid = generator(elements, connectors, elem_map)
            
            if not mermaid:
                skipped += 1
                continue
            
            # Build output path
            pkg_path = get_package_path(diag['package_id'], packages)
            type_dir = safe_filename(diag['type'])
            out_dir = os.path.join(OUTPUT_DIR, type_dir, safe_filename(pkg_path))
            os.makedirs(out_dir, exist_ok=True)
            
            fname = safe_filename(diag['name']) + '.md'
            out_path = os.path.join(out_dir, fname)
            
            # Handle duplicates
            counter = 1
            while os.path.exists(out_path):
                fname = safe_filename(diag['name']) + f'_{counter}.md'
                out_path = os.path.join(out_dir, fname)
                counter += 1
            
            # Write file
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
            
            summary.append({
                'name': diag['name'],
                'type': diag['type'],
                'package': pkg_path,
                'elements': len(elements),
                'connectors': len(connectors),
                'file': os.path.relpath(out_path, OUTPUT_DIR)
            })
            success += 1
            
        except Exception as e:
            errors += 1
            if errors <= 10:
                print(f"  ERROR on '{diag['name']}' (ID={diag['id']}): {e}")
    
    # Write summary index
    index_path = os.path.join(OUTPUT_DIR, '_INDEX.md')
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(f"# BSL 1 - Mermaid Diagram Export\n\n")
        f.write(f"- **Total diagrams found**: {len(diagrams)}\n")
        f.write(f"- **Successfully exported**: {success}\n")
        f.write(f"- **Skipped (empty)**: {skipped}\n")
        f.write(f"- **Errors**: {errors}\n\n")
        f.write("## Diagram Types\n\n")
        f.write("| Type | Count |\n|------|-------|\n")
        for t, c in sorted(type_counts.items(), key=lambda x: -x[1]):
            f.write(f"| {t} | {c} |\n")
        f.write("\n## All Exported Diagrams\n\n")
        f.write("| Name | Type | Package | Elements | Connectors |\n")
        f.write("|------|------|---------|----------|------------|\n")
        for s in summary:
            f.write(f"| [{s['name']}]({s['file']}) | {s['type']} | {s['package']} | {s['elements']} | {s['connectors']} |\n")
    
    # Also save JSON summary
    json_path = os.path.join(OUTPUT_DIR, '_summary.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump({
            'total': len(diagrams),
            'exported': success,
            'skipped': skipped,
            'errors': errors,
            'type_counts': dict(type_counts),
            'diagrams': summary
        }, f, indent=2, ensure_ascii=False)
    
    conn.close()
    
    print(f"\n{'='*50}")
    print(f"EXPORT COMPLETE")
    print(f"  Total diagrams: {len(diagrams)}")
    print(f"  Exported: {success}")
    print(f"  Skipped (empty): {skipped}")
    print(f"  Errors: {errors}")
    print(f"  Output: {OUTPUT_DIR}")
    print(f"  Index: {index_path}")
    print(f"{'='*50}")

if __name__ == '__main__':
    main()

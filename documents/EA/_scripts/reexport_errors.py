"""
Re-export the ~135 diagrams that failed due to Windows MAX_PATH (260 chars).

Strategy: Keep the same folder structure, but when the full path exceeds
the safe limit (250 chars), progressively shorten the deepest package
segments and append a short hash for uniqueness.  This preserves
browsability while guaranteeing every file can be written.
"""
import pyodbc
import os
import re
import json
import hashlib
from collections import defaultdict

EAP_FILE = r"C:\Users\Lan.Dinh\Documents\EA\BSL 1.eap"
OUTPUT_DIR = r"C:\Users\Lan.Dinh\Documents\EA\mermaid_export"
ERROR_FILE = r"C:\Users\Lan.Dinh\Documents\EA\error_diagnosis.json"
MAX_PATH = 250  # leave 10-char margin from Windows 260

CONN_STR = (
    r"DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};"
    rf"DBQ={EAP_FILE};"
    r"ReadOnly=1;"
)

# ─── Helpers (same as original) ─────────────────────────────────
def sanitize_name(name):
    if not name:
        return "unnamed"
    s = re.sub(r'[^a-zA-Z0-9_]', '_', name)
    s = re.sub(r'_+', '_', s).strip('_')
    if not s or s[0].isdigit():
        s = 'n_' + s
    return s[:60]

def sanitize_label(name):
    if not name:
        return "unnamed"
    return name.replace('"', "'").replace('<', '\u2039').replace('>', '\u203a').replace('&', 'and')

def safe_filename(name):
    s = re.sub(r'[<>:"/\\|?*]', '_', name)
    return s[:120].strip('. ')

def short_hash(text, length=8):
    """Deterministic short hash for path deduplication."""
    return hashlib.md5(text.encode('utf-8')).hexdigest()[:length]

# ─── Smart path shortening ──────────────────────────────────────
def build_safe_path(output_dir, type_dir, pkg_path, diag_name, diag_id):
    """
    Build an output path that fits within MAX_PATH.
    
    Priority (most to least aggressive):
      1. Full path as-is
      2. Truncate package segments to 40 chars each + hash
      3. Truncate package segments to 25 chars each + hash
      4. Collapse entire package to a single hashed folder
      5. Use diagram ID as filename in a flat _overflow folder
    """
    safe_pkg = safe_filename(pkg_path)
    safe_name = safe_filename(diag_name) + '.md'
    
    # Strategy 1: Full path
    full_dir = os.path.join(output_dir, type_dir, safe_pkg)
    full_path = os.path.join(full_dir, safe_name)
    if len(full_path) <= MAX_PATH:
        return full_dir, safe_name, full_path
    
    # Strategy 2: Truncate each segment of pkg_path
    segments = safe_pkg.split('_')
    for max_seg_len in [50, 35, 25]:
        shortened_segs = []
        for seg in segments:
            if len(seg) > max_seg_len:
                h = short_hash(seg, 6)
                shortened_segs.append(seg[:max_seg_len] + '_' + h)
            else:
                shortened_segs.append(seg)
        shortened_pkg = '_'.join(shortened_segs)
        
        # Also shorten filename if needed
        fname = safe_name
        available_for_file = MAX_PATH - len(os.path.join(output_dir, type_dir, shortened_pkg)) - 1
        if available_for_file < len(fname):
            name_hash = short_hash(diag_name, 8)
            fname = safe_filename(diag_name)[:max(available_for_file - 15, 20)] + '_' + name_hash + '.md'
        
        trial_dir = os.path.join(output_dir, type_dir, shortened_pkg)
        trial_path = os.path.join(trial_dir, fname)
        if len(trial_path) <= MAX_PATH:
            return trial_dir, fname, trial_path
    
    # Strategy 3: Collapse package to hash
    pkg_hash = short_hash(pkg_path, 12)
    collapsed_pkg = safe_filename(pkg_path)[:60] + '_' + pkg_hash
    fname = safe_name
    trial_dir = os.path.join(output_dir, type_dir, collapsed_pkg)
    available_for_file = MAX_PATH - len(trial_dir) - 1
    if available_for_file < len(fname):
        name_hash = short_hash(diag_name, 8)
        fname = safe_filename(diag_name)[:max(available_for_file - 15, 20)] + '_' + name_hash + '.md'
    trial_path = os.path.join(trial_dir, fname)
    if len(trial_path) <= MAX_PATH:
        return trial_dir, fname, trial_path
    
    # Strategy 4: Flat overflow folder with diagram ID
    overflow_dir = os.path.join(output_dir, type_dir, '_long_paths')
    fname = f"{diag_id}_{safe_filename(diag_name)[:80]}.md"
    return overflow_dir, fname, os.path.join(overflow_dir, fname)

# ─── Data Loading (same as original) ────────────────────────────
def connect():
    return pyodbc.connect(CONN_STR)

def load_packages(cursor):
    pkgs = {}
    cursor.execute("SELECT Package_ID, Name, Parent_ID FROM t_package")
    for row in cursor.fetchall():
        pkgs[row[0]] = {'name': row[1], 'parent': row[2]}
    return pkgs

def get_package_path(pkg_id, packages):
    parts = []
    visited = set()
    pid = pkg_id
    while pid and pid in packages and pid not in visited:
        visited.add(pid)
        parts.append(packages[pid]['name'] or 'unnamed')
        pid = packages[pid]['parent']
    parts.reverse()
    return '/'.join(parts)

def load_diagram_objects(cursor, diagram_id):
    cursor.execute("""
        SELECT do.Object_ID, do.Sequence
        FROM t_diagramobjects AS do
        WHERE do.Diagram_ID = ?
        ORDER BY do.Sequence
    """, diagram_id)
    return [(row[0], row[1]) for row in cursor.fetchall()]

def load_element(cursor, element_id):
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
    cursor.execute("""
        SELECT dl.ConnectorID, dl.Hidden
        FROM t_diagramlinks AS dl
        WHERE dl.DiagramID = ? AND (dl.Hidden = 0 OR dl.Hidden IS NULL)
    """, diagram_id)
    return [row[0] for row in cursor.fetchall()]

def load_connector(cursor, connector_id):
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

# ─── Mermaid Generators (identical to original) ─────────────────
def gen_sequence_diagram(elements, connectors, elem_map):
    lines = ["sequenceDiagram"]
    participants = []
    seen = set()
    for conn in connectors:
        for eid in [conn['start_id'], conn['end_id']]:
            if eid not in seen and eid in elem_map:
                seen.add(eid)
                participants.append(elem_map[eid])
    for p in participants:
        label = sanitize_label(p['name'])
        lines.append(f"    participant {sanitize_name(p['name'])} as {label}")
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
    lines = ["graph LR"]
    for e in elements:
        sid = sanitize_name(e['name'])
        label = sanitize_label(e['name'])
        if e['type'] == 'Actor':
            lines.append(f'    {sid}[/"{label}"/]')
        elif e['type'] == 'UseCase':
            lines.append(f'    {sid}(("{label}"))')
        elif e['type'] == 'Boundary':
            lines.append(f'    {sid}["{label}"]')
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

def gen_class_diagram(elements, connectors, elem_map):
    lines = ["classDiagram"]
    for e in elements:
        label = sanitize_label(e['name'])
        sid = sanitize_name(e['name'])
        if e['name']:
            lines.append(f'    class {sid}["{label}"]')
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
                lines.append(f"    {src} --> {dst}{label_str}")
            else:
                lines.append(f"    {src} --> {dst}{label_str}")
    return '\n'.join(lines) if len(lines) > 1 else None

def gen_activity_diagram(elements, connectors, elem_map):
    lines = ["flowchart TD"]
    for e in elements:
        sid = sanitize_name(e['name']) if e['name'] else f"node_{e['id']}"
        label = sanitize_label(e['name']) if e['name'] else e['type']
        if e['type'] == 'StateNode':
            lines.append(f"    {sid}(( ))")
        elif e['type'] == 'Action':
            lines.append(f'    {sid}["{label}"]')
        elif e['type'] == 'Activity':
            lines.append(f'    {sid}["{label}"]')
        elif e['type'] == 'Decision':
            lines.append(f'    {sid}{{"{label}"}}')
        elif e['type'] == 'MergeNode':
            lines.append(f'    {sid}{{"{label}"}}')
        else:
            lines.append(f'    {sid}["{label}"]')
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
    lines = ["stateDiagram-v2"]
    for e in elements:
        sid = sanitize_name(e['name']) if e['name'] else f"s_{e['id']}"
        label = sanitize_label(e['name'])
        if e['type'] == 'StateNode':
            if 'initial' in (e.get('stereotype', '') or '').lower() or not e['name']:
                lines.append(f"    [*] --> {sid}")
            elif 'final' in (e.get('stereotype', '') or '').lower():
                lines.append(f"    {sid} --> [*]")
            else:
                lines.append(f'    state "{label}" as {sid}')
        else:
            lines.append(f'    state "{label}" as {sid}')
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
    lines = ["graph TD"]
    for e in elements:
        sid = sanitize_name(e['name'])
        label = sanitize_label(e['name'])
        if e['type'] == 'Component':
            lines.append(f'    {sid}[["{label}"]]')
        elif e['type'] in ('ProvidedInterface', 'RequiredInterface'):
            lines.append(f'    {sid}(("{label}"))')
        else:
            lines.append(f'    {sid}["{label}"]')
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
    lines = ["graph TD"]
    for e in elements:
        sid = sanitize_name(e['name']) if e['name'] else f"el_{e['id']}"
        label = sanitize_label(e['name']) if e['name'] else e['type']
        lines.append(f'    {sid}["{label}"]')
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

# ─── Main ───────────────────────────────────────────────────────
def main():
    # 1. Load error list
    with open(ERROR_FILE, 'r', encoding='utf-8') as f:
        diagnosis = json.load(f)
    
    error_ids = set(e['id'] for e in diagnosis['errors'])
    print(f"Loaded {len(error_ids)} failed diagram IDs from diagnosis.")

    # 2. Connect to EA database
    conn = connect()
    cursor = conn.cursor()
    print("Connected to EAP database.")

    packages = load_packages(cursor)

    # 3. Load only the failed diagrams
    cursor.execute(
        "SELECT Diagram_ID, Name, Diagram_Type, Package_ID, ParentID "
        "FROM t_diagram ORDER BY Diagram_Type, Name"
    )
    all_diagrams = []
    for row in cursor.fetchall():
        d = {
            'id': row[0], 'name': row[1] or 'Unnamed',
            'type': row[2] or 'Unknown', 'package_id': row[3], 'parent_id': row[4]
        }
        if d['id'] in error_ids:
            all_diagrams.append(d)

    print(f"Found {len(all_diagrams)} diagrams to re-export.")

    # 4. Process
    success = 0
    skipped = 0
    still_errors = 0
    new_entries = []
    strategy_counts = defaultdict(int)

    for i, diag in enumerate(all_diagrams):
        try:
            # Load elements
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

            # Generate mermaid
            generator = GENERATORS.get(diag['type'], gen_generic_diagram)
            mermaid = generator(elements, connectors, elem_map)
            if not mermaid:
                skipped += 1
                continue

            # Build safe output path
            pkg_path = get_package_path(diag['package_id'], packages)
            type_dir = safe_filename(diag['type'])
            out_dir, fname, out_path = build_safe_path(
                OUTPUT_DIR, type_dir, pkg_path, diag['name'], diag['id']
            )

            # Track which strategy was used
            orig_dir = os.path.join(OUTPUT_DIR, type_dir, safe_filename(pkg_path))
            orig_path = os.path.join(orig_dir, safe_filename(diag['name']) + '.md')
            if out_path == orig_path:
                strategy_counts['full_path'] += 1
            elif '_long_paths' in out_dir:
                strategy_counts['flat_overflow'] += 1
            else:
                strategy_counts['truncated'] += 1

            # Create dir and write
            os.makedirs(out_dir, exist_ok=True)

            # Handle duplicates
            counter = 1
            base_fname = fname
            while os.path.exists(out_path):
                name_part, ext = os.path.splitext(base_fname)
                fname = f"{name_part}_{counter}{ext}"
                out_path = os.path.join(out_dir, fname)
                counter += 1

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

            new_entries.append({
                'name': diag['name'],
                'type': diag['type'],
                'package': pkg_path,
                'elements': len(elements),
                'connectors': len(connectors),
                'file': os.path.relpath(out_path, OUTPUT_DIR),
                'original_path_len': len(orig_path),
                'actual_path_len': len(out_path)
            })
            success += 1

        except Exception as e:
            still_errors += 1
            print(f"  STILL FAILED: '{diag['name'][:60]}' (ID={diag['id']}): {e}")

    conn.close()

    # 5. Update summary JSON
    summary_path = os.path.join(OUTPUT_DIR, '_summary.json')
    with open(summary_path, 'r', encoding='utf-8') as f:
        summary = json.load(f)

    summary['exported'] += success
    summary['errors'] -= success
    summary['diagrams'].extend(new_entries)
    summary['reexport_info'] = {
        'reexported': success,
        'skipped': skipped,
        'still_failed': still_errors,
        'strategy_counts': dict(strategy_counts)
    }

    with open(summary_path, 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)

    # 6. Append to _INDEX.md
    index_path = os.path.join(OUTPUT_DIR, '_INDEX.md')
    with open(index_path, 'a', encoding='utf-8') as f:
        f.write(f"\n\n## Re-exported Diagrams (previously failed due to long paths)\n\n")
        f.write(f"- **Re-exported**: {success}\n")
        f.write(f"- **Still failed**: {still_errors}\n")
        f.write(f"- **Skipped**: {skipped}\n\n")
        f.write("| Name | Type | Package | Elements | Connectors | Path Strategy |\n")
        f.write("|------|------|---------|----------|------------|---------------|\n")
        for entry in new_entries:
            strategy = "truncated" if entry['actual_path_len'] < entry['original_path_len'] else "original"
            f.write(
                f"| [{entry['name']}]({entry['file']}) "
                f"| {entry['type']} "
                f"| {entry['package']} "
                f"| {entry['elements']} "
                f"| {entry['connectors']} "
                f"| {strategy} ({entry['original_path_len']}->{entry['actual_path_len']}) |\n"
            )

    # 7. Print report
    print(f"\n{'='*60}")
    print(f"RE-EXPORT COMPLETE")
    print(f"{'='*60}")
    print(f"  Previously failed: {len(error_ids)}")
    print(f"  Now exported:      {success}")
    print(f"  Skipped (empty):   {skipped}")
    print(f"  Still failed:      {still_errors}")
    print(f"\n  Path strategies used:")
    for s, c in sorted(strategy_counts.items(), key=lambda x: -x[1]):
        print(f"    {s}: {c}")
    print(f"\n  Updated: {summary_path}")
    print(f"  Updated: {index_path}")
    print(f"\n  TOTAL diagrams now exported: {summary['exported']}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()

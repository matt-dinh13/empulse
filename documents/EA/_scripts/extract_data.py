"""
Extract elements, connectors, packages, and diagrams from the EA .eap file.
Saves to catalog.json/js, elements.json/js, and connectors.json/js.
"""
import pyodbc
import os
import re
import json
import time
from datetime import datetime
from collections import defaultdict

EAP_FILE = r"C:\_SVN\eadoc\BSL 1.eap"
DATA_DIR = r"c:\Users\Lan.Dinh\Documents\EA\_bsl_app\data"

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

def clean_html(text):
    """Strip HTML tags from notes."""
    if not text:
        return ""
    # Strip HTML tags
    clean = re.compile(r'<.*?>')
    return re.sub(clean, '', text).strip()

def build_package_path(pkg_id, packages):
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

def build_package_tree(packages):
    """Build the hierarchical package tree."""
    adj = defaultdict(list)
    for pid, pkg in packages.items():
        adj[pkg['parent']].append(pid)
    
    def build_node(pid):
        pkg = packages[pid]
        node = {
            'id': pkg['id'],
            'name': pkg['name'] or 'unnamed',
            'children': []
        }
        child_ids = sorted(adj[pid], key=lambda cid: packages[cid]['name'] or '')
        for cid in child_ids:
            node['children'].append(build_node(cid))
        return node

    roots = []
    for pid, pkg in packages.items():
        parent = pkg['parent']
        if parent == 0 or parent not in packages:
            roots.append(pid)
    
    roots = sorted(roots, key=lambda pid: packages[pid]['name'] or '')
    
    tree = []
    for r in roots:
        tree.append(build_node(r))
    return tree

def main():
    print(f"Connecting to EA database: {EAP_FILE}...")
    start_time = time.time()
    
    try:
        conn = pyodbc.connect(CONN_STR)
        cursor = conn.cursor()
        print("Connected successfully!")
    except Exception as e:
        print(f"Failed to connect to database: {e}")
        return

    # 1. Load Packages
    print("Loading packages...")
    packages = {}
    cursor.execute("SELECT Package_ID, Name, Parent_ID FROM t_package")
    for row in cursor.fetchall():
        pid = row[0]
        packages[pid] = {
            'id': pid,
            'name': row[1] or '',
            'parent': row[2] or 0
        }
    print(f"Loaded {len(packages)} packages.")

    # 2. Load Diagram Links (connectors on diagrams)
    print("Loading diagram links...")
    connector_to_diagrams = defaultdict(list)
    diagram_to_connectors = defaultdict(list)
    cursor.execute("SELECT DiagramID, ConnectorID FROM t_diagramlinks WHERE Hidden = 0 OR Hidden IS NULL")
    for row in cursor.fetchall():
        did, cid = row[0], row[1]
        connector_to_diagrams[cid].append(did)
        diagram_to_connectors[did].append(cid)
    print(f"Loaded links mapping.")

    # 3. Load Diagram Objects (elements on diagrams)
    print("Loading diagram objects...")
    element_to_diagrams = defaultdict(list)
    diagram_to_elements = defaultdict(list)
    cursor.execute("SELECT Diagram_ID, Object_ID FROM t_diagramobjects ORDER BY Diagram_ID, Sequence")
    for row in cursor.fetchall():
        did, oid = row[0], row[1]
        element_to_diagrams[oid].append(did)
        diagram_to_elements[did].append(oid)
    print(f"Loaded objects mapping.")

    # 4. Load Connectors
    print("Loading connectors...")
    connectors_dict = {}
    cursor.execute("""
        SELECT Connector_ID, Connector_Type, Name, Start_Object_ID, End_Object_ID,
               Direction, SourceCard, DestCard, Stereotype, Notes
        FROM t_connector
    """)
    for row in cursor.fetchall():
        cid = row[0]
        connectors_dict[str(cid)] = {
            'id': cid,
            'type': row[1] or '',
            'name': row[2] or '',
            'start_element_id': row[3],
            'end_element_id': row[4],
            'direction': row[5] or '',
            'source_card': row[6] or '',
            'dest_card': row[7] or '',
            'stereotype': row[8] or '',
            'note': row[9] or '',
            'diagrams': connector_to_diagrams[cid]
        }
    print(f"Loaded {len(connectors_dict)} connectors.")

    # 5. Load Element Attributes
    print("Loading attributes...")
    attributes_map = defaultdict(list)
    cursor.execute("""
        SELECT Object_ID, Name, [Type], [Default], Notes 
        FROM t_attribute 
        ORDER BY Object_ID, Pos
    """)
    for row in cursor.fetchall():
        oid = row[0]
        attributes_map[oid].append({
            'name': row[1] or '',
            'type': row[2] or '',
            'default': row[3] or '',
            'note': row[4] or ''
        })
    print(f"Loaded attributes for {len(attributes_map)} elements.")

    # 6. Load Element Operations
    print("Loading operations...")
    operations_map = defaultdict(list)
    cursor.execute("""
        SELECT Object_ID, Name, [Type], Notes 
        FROM t_operation 
        ORDER BY Object_ID, Pos
    """)
    for row in cursor.fetchall():
        oid = row[0]
        operations_map[oid].append({
            'name': row[1] or '',
            'type': row[2] or '',
            'note': row[3] or ''
        })
    print(f"Loaded operations for {len(operations_map)} elements.")

    # 7. Load Elements (Objects)
    print("Loading elements...")
    elements_dict = {}
    cursor.execute("""
        SELECT Object_ID, Object_Type, Name, Stereotype, Note, ParentID
        FROM t_object
    """)
    for row in cursor.fetchall():
        oid = row[0]
        elements_dict[str(oid)] = {
            'id': oid,
            'name': row[2] or '',
            'type': row[1] or '',
            'stereotype': row[3] or '',
            'note_html': row[4] or '',
            'note_text': clean_html(row[4] or ''),
            'sanitized_name': sanitize_name(row[2] or ''),
            'diagrams': element_to_diagrams[oid],
            'parent_id': row[5] if (row[5] and row[5] != 0) else None,
            'attributes': attributes_map[oid],
            'operations': operations_map[oid]
        }
    print(f"Loaded {len(elements_dict)} elements.")

    # 8. Load Diagrams & build Catalog
    print("Loading diagrams...")
    diagrams_list = []
    package_diagram_counts = defaultdict(int)
    
    cursor.execute("SELECT Diagram_ID, Name, Diagram_Type, Package_ID FROM t_diagram")
    for row in cursor.fetchall():
        did = row[0]
        pkg_id = row[3]
        package_diagram_counts[str(pkg_id)] += 1
        pkg_path = build_package_path(pkg_id, packages)
        diagrams_list.append({
            'id': did,
            'name': row[1] or 'Unnamed',
            'type': row[2] or 'Unknown',
            'package_id': pkg_id,
            'package_path': pkg_path,
            'element_count': len(diagram_to_elements[did]),
            'connector_count': len(diagram_to_connectors[did]),
            'element_ids': diagram_to_elements[did],
            'mermaid': ''  # regenerated by fix_mermaid_quality.py
        })

    print(f"Loaded {len(diagrams_list)} diagrams.")

    conn.close()

    # Build package tree
    print("Building package tree...")
    package_tree = build_package_tree(packages)
    catalog_packages = {str(k): {'id': v['id'], 'name': v['name'], 'parent': v['parent']} for k, v in packages.items()}

    catalog_data = {
        'meta': {
            'exported_at': datetime.now(tz=__import__('datetime').timezone.utc).isoformat(),
            'total_diagrams': len(diagrams_list),
            'total_elements': len(elements_dict),
            'total_connectors': len(connectors_dict),
            'total_packages': len(packages),
            'source': os.path.basename(EAP_FILE)
        },
        'packages': catalog_packages,
        'package_tree': package_tree,
        'package_diagram_counts': dict(package_diagram_counts),
        'diagrams': diagrams_list
    }
    
    # Create DATA_DIR if it doesn't exist
    os.makedirs(DATA_DIR, exist_ok=True)

    # Save Elements
    print("Writing elements.json/js...")
    elements_out = {'elements': elements_dict}
    with open(os.path.join(DATA_DIR, 'elements.json'), 'w', encoding='utf-8') as f:
        json.dump(elements_out, f, ensure_ascii=False)
    with open(os.path.join(DATA_DIR, 'elements.js'), 'w', encoding='utf-8') as f:
        f.write('window.BSL_ELEMENTS = ')
        json.dump(elements_out, f, ensure_ascii=False)
        f.write(';')

    # Save Connectors
    print("Writing connectors.json/js...")
    connectors_out = {'connectors': connectors_dict}
    with open(os.path.join(DATA_DIR, 'connectors.json'), 'w', encoding='utf-8') as f:
        json.dump(connectors_out, f, ensure_ascii=False)
    with open(os.path.join(DATA_DIR, 'connectors.js'), 'w', encoding='utf-8') as f:
        f.write('window.BSL_CONNECTORS = ')
        json.dump(connectors_out, f, ensure_ascii=False)
        f.write(';')

    # Save Catalog
    print("Writing catalog.json/js...")
    with open(os.path.join(DATA_DIR, 'catalog.json'), 'w', encoding='utf-8') as f:
        json.dump(catalog_data, f, ensure_ascii=False)
    with open(os.path.join(DATA_DIR, 'catalog.js'), 'w', encoding='utf-8') as f:
        f.write('window.BSL_CATALOG = ')
        json.dump(catalog_data, f, ensure_ascii=False)
        f.write(';')

    duration = time.time() - start_time
    print(f"Extraction complete in {duration:.1f} seconds.")

if __name__ == '__main__':
    main()
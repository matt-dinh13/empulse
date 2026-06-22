"""
Query EA diagram objects to find which elements are inside which boundaries
using geometric containment (bounding box comparison).
"""
import pyodbc
import json
import os
from collections import defaultdict

EAP_FILE = r"C:\_SVN\eadoc\BSL 1.eap"
DATA_DIR = r'c:\Users\Lan.Dinh\Documents\EA\_bsl_app\data'

CONN_STR = (
    r"DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};"
    rf"DBQ={EAP_FILE};"
    r"ReadOnly=1;"
)

print("Connecting to EA database...")
conn = pyodbc.connect(CONN_STR)
cursor = conn.cursor()

# Load all diagram objects with their positions
print("Loading diagram objects with positions...")
cursor.execute("""
    SELECT do.Diagram_ID, do.Object_ID, do.RectTop, do.RectLeft, do.RectBottom, do.RectRight,
           o.Object_Type, o.Name
    FROM t_diagramobjects AS do
    INNER JOIN t_object AS o ON do.Object_ID = o.Object_ID
    ORDER BY do.Diagram_ID
""")

# Group by diagram
diagram_objects = defaultdict(list)
for row in cursor.fetchall():
    diagram_objects[row[0]].append({
        'object_id': row[1],
        'top': row[2] or 0, 'left': row[3] or 0,
        'bottom': row[4] or 0, 'right': row[5] or 0,
        'type': row[6], 'name': row[7] or ''
    })

conn.close()
print(f"Loaded objects for {len(diagram_objects)} diagrams.")

# Build containment map: for each diagram, find which elements are inside boundaries
# Note: In EA, RectTop is actually NEGATIVE (higher up = more negative)
# RectLeft < RectRight, RectTop < RectBottom (where top is more negative)
containment = {}  # diagram_id -> {boundary_id -> [child_ids]}

for diag_id, objects in diagram_objects.items():
    # Only Boundary and Package types are treated as visual containers
    # Components are always treated as regular elements (they can be children)
    CONTAINER_TYPES = {'Boundary', 'Package'}
    boundaries = [o for o in objects if o['type'] in CONTAINER_TYPES]
    if not boundaries:
        continue
    
    # All elements (including Components) are potential children
    all_objects = [o for o in objects]
    diag_containment = defaultdict(list)
    
    for b in boundaries:
        # EA coordinates: top is negative, bottom is more negative
        b_left = min(b['left'], b['right'])
        b_right = max(b['left'], b['right'])
        b_top = max(b['top'], b['bottom'])  # less negative = higher visually
        b_bottom = min(b['top'], b['bottom'])  # more negative = lower visually
        b_area = abs(b_right - b_left) * abs(b_top - b_bottom)
        
        # Skip containers that are too small (likely regular elements, not actual containers)
        if b_area < 5000:
            continue
        
        for o in all_objects:
            if o['object_id'] == b['object_id']:
                continue
            # Skip if 'o' is also a container and is bigger than 'b' (avoid parent containing grandparent)
            if o['type'] in CONTAINER_TYPES:
                continue
            o_left = min(o['left'], o['right'])
            o_right = max(o['left'], o['right'])
            o_top = max(o['top'], o['bottom'])
            o_bottom = min(o['top'], o['bottom'])
            
            # Use center-point containment: element center must be inside boundary
            # This catches interfaces that sit on container borders
            o_cx = (o_left + o_right) / 2
            o_cy = (o_top + o_bottom) / 2
            
            if (o_cx >= b_left and o_cx <= b_right and
                o_cy <= b_top and o_cy >= b_bottom):
                diag_containment[b['object_id']].append(o['object_id'])
    
    if diag_containment:
        containment[diag_id] = dict(diag_containment)

print(f"Found containment in {len(containment)} diagrams.")

# Show sample: Contract registration UC diagram (163262)
if 163262 in containment:
    print(f"\nContainment for UC Contract registration (163262):")
    for bid, children in containment[163262].items():
        bname = next((o['name'] for o in diagram_objects[163262] if o['object_id'] == bid), '?')
        print(f"  Boundary '{bname}' (id={bid}) contains {len(children)} elements:")
        for cid in children:
            cname = next((o['name'] for o in diagram_objects[163262] if o['object_id'] == cid), '?')
            ctype = next((o['type'] for o in diagram_objects[163262] if o['object_id'] == cid), '?')
            print(f"    - {cname} ({ctype})")
else:
    print("\nNo containment found for diagram 163262")

# Save containment map
containment_file = os.path.join(DATA_DIR, 'containment.json')
# Convert int keys to strings for JSON
serializable = {}
for did, bmap in containment.items():
    serializable[str(did)] = {str(bid): cids for bid, cids in bmap.items()}

with open(containment_file, 'w', encoding='utf-8') as f:
    json.dump(serializable, f, ensure_ascii=False)
print(f"\nSaved containment map to {containment_file}")

# Also generate containment.js for the app
with open(os.path.join(DATA_DIR, 'containment.js'), 'w', encoding='utf-8') as f:
    f.write('window.BSL_CONTAINMENT = ')
    json.dump(serializable, f, ensure_ascii=False)
    f.write(';')
print(f"Saved containment.js")

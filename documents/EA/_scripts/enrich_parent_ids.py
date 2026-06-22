"""
Enrich elements.json with parent_id from EA database,
then re-run the Mermaid quality fix with accurate boundary containment.
"""
import pyodbc
import json
import os

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

# Load ParentID for ALL objects
print("Querying parent IDs...")
cursor.execute("SELECT Object_ID, ParentID FROM t_object")
parent_map = {}
for row in cursor.fetchall():
    if row[1] and row[1] != 0:
        parent_map[row[0]] = row[1]

print(f"Found {len(parent_map)} elements with parents.")

# Also query t_diagramobjects for containment via RectTop/RectBottom etc.
# EA uses a "depth" approach where elements inside boundaries have specific 
# sequence values
conn.close()

# Load and update elements.json
print("Loading elements.json...")
with open(os.path.join(DATA_DIR, 'elements.json'), 'r', encoding='utf-8') as f:
    elements_data = json.load(f)

updated = 0
for eid_str, elem in elements_data['elements'].items():
    eid = int(eid_str)
    if eid in parent_map:
        elem['parent_id'] = parent_map[eid]
        updated += 1

print(f"Updated {updated} elements with parent_id.")

# Save
print("Saving elements.json...")
with open(os.path.join(DATA_DIR, 'elements.json'), 'w', encoding='utf-8') as f:
    json.dump(elements_data, f, ensure_ascii=False)

# Re-generate elements.js
print("Saving elements.js...")
with open(os.path.join(DATA_DIR, 'elements.js'), 'w', encoding='utf-8') as f:
    f.write('window.BSL_ELEMENTS = ')
    json.dump(elements_data, f, ensure_ascii=False)
    f.write(';')

print("Done! Now re-run fix_mermaid_quality.py")

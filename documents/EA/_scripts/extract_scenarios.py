"""
Extract UseCase scenarios from EA database into scenarios.json
for BSL Explorer detail panel.
"""
import pyodbc
import json
import re

conn = pyodbc.connect(r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\_SVN\eadoc\BSL 1.eap')
c = conn.cursor()

# Load all scenarios
c.execute("""
    SELECT s.Object_ID, s.Scenario, s.ScenarioType, s.EValue, s.Notes
    FROM t_objectscenarios s
    ORDER BY s.Object_ID, s.EValue
""")

scenarios = {}
for row in c.fetchall():
    obj_id = str(row[0])
    if obj_id not in scenarios:
        scenarios[obj_id] = []
    
    # Clean HTML from notes
    notes = row[4] or ''
    # Strip HTML tags but preserve line breaks
    notes = re.sub(r'<br\s*/?>', '\n', notes, flags=re.IGNORECASE)
    notes = re.sub(r'<li>', '\n• ', notes, flags=re.IGNORECASE)
    notes = re.sub(r'<[^>]+>', '', notes)
    notes = notes.strip()
    # Collapse multiple newlines
    notes = re.sub(r'\n{3,}', '\n\n', notes)
    
    scenarios[obj_id].append({
        'name': row[1] or 'Unnamed',
        'type': row[2] or 'Basic Path',
        'order': row[3] or 0,
        'steps': notes
    })

conn.close()

# Save
DATA_DIR = r'c:\Users\Lan.Dinh\Documents\EA\_bsl_app\data'

data = {'scenarios': scenarios}

with open(f'{DATA_DIR}/scenarios.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False)

with open(f'{DATA_DIR}/scenarios.js', 'w', encoding='utf-8') as f:
    f.write('window.BSL_SCENARIOS = ')
    json.dump(data, f, ensure_ascii=False)
    f.write(';')

obj_count = len(scenarios)
total = sum(len(v) for v in scenarios.values())
size = len(json.dumps(data, ensure_ascii=False)) / 1024 / 1024
print(f"Exported {total} scenarios from {obj_count} objects ({size:.1f} MB)")

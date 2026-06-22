"""
Explore the structure of an Enterprise Architect .eap file (MS Access DB).
Lists all tables and then extracts key EA tables.
"""
import pyodbc
import sys

EAP_FILE = r"C:\Users\Lan.Dinh\Documents\EA\BSL 1.eap"

# Connect using 64-bit ACE driver
conn_str = (
    r"DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};"
    rf"DBQ={EAP_FILE};"
    r"ReadOnly=1;"
)

try:
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    print("=== Connected successfully ===\n")
except Exception as e:
    print(f"Connection failed: {e}")
    sys.exit(1)

# 1. List all tables
print("=== ALL TABLES ===")
for table_info in cursor.tables(tableType='TABLE'):
    print(f"  {table_info.table_name}")

# 2. Count diagrams
print("\n=== DIAGRAMS (t_diagram) ===")
try:
    cursor.execute("SELECT COUNT(*) FROM t_diagram")
    count = cursor.fetchone()[0]
    print(f"Total diagrams: {count}")
    
    cursor.execute("SELECT Diagram_ID, Name, Diagram_Type, Package_ID, ParentID FROM t_diagram ORDER BY Name")
    rows = cursor.fetchall()
    for r in rows:
        print(f"  ID={r[0]} | Name={r[1]} | Type={r[2]} | Package={r[3]} | Parent={r[4]}")
except Exception as e:
    print(f"Error reading t_diagram: {e}")

# 3. Count elements
print("\n=== ELEMENTS (t_object) - Summary ===")
try:
    cursor.execute("SELECT Object_Type, COUNT(*) as cnt FROM t_object GROUP BY Object_Type ORDER BY cnt DESC")
    rows = cursor.fetchall()
    for r in rows:
        print(f"  {r[0]}: {r[1]}")
except Exception as e:
    print(f"Error reading t_object: {e}")

# 4. Count connectors
print("\n=== CONNECTORS (t_connector) - Summary ===")
try:
    cursor.execute("SELECT Connector_Type, COUNT(*) as cnt FROM t_connector GROUP BY Connector_Type ORDER BY cnt DESC")
    rows = cursor.fetchall()
    for r in rows:
        print(f"  {r[0]}: {r[1]}")
except Exception as e:
    print(f"Error reading t_connector: {e}")

# 5. Packages
print("\n=== PACKAGES (t_package) ===")
try:
    cursor.execute("SELECT Package_ID, Name, Parent_ID FROM t_package ORDER BY Parent_ID, Name")
    rows = cursor.fetchall()
    for r in rows:
        print(f"  ID={r[0]} | Name={r[1]} | Parent={r[2]}")
except Exception as e:
    print(f"Error reading t_package: {e}")

# 6. Diagram columns
print("\n=== t_diagram COLUMNS ===")
try:
    for col in cursor.columns(table='t_diagram'):
        print(f"  {col.column_name} ({col.type_name})")
except Exception as e:
    print(f"Error: {e}")

# 7. DiagramObjects columns
print("\n=== t_diagramobjects COLUMNS ===")
try:
    for col in cursor.columns(table='t_diagramobjects'):
        print(f"  {col.column_name} ({col.type_name})")
except Exception as e:
    print(f"Error: {e}")

# 8. DiagramLinks columns  
print("\n=== t_diagramlinks COLUMNS ===")
try:
    for col in cursor.columns(table='t_diagramlinks'):
        print(f"  {col.column_name} ({col.type_name})")
except Exception as e:
    print(f"Error: {e}")

conn.close()
print("\n=== Done ===")

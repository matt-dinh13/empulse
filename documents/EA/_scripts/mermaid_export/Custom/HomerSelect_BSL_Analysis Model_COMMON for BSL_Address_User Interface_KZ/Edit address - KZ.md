# Edit address - KZ

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/User Interface/KZ
- **Diagram ID**: 132282
- **Elements**: 12
- **Connectors**: 2

```mermaid
graph TD
    MOD_Address_rules_KZ["{MOD}Address rules - KZ"]
    Address_rules["Address rules"]
    Country["Country"]
    Region["Region"]
    District["District"]
    Town["Town"]
    ZIP_code["ZIP code"]
    Type_of_settlement["Type of settlement"]
    Flat["Flat"]
    House_number["House number"]
    Street_name["Street name"]
    Edit_Address["Edit Address"]
    MOD_Address_rules_KZ -->|unnamed| Address_rules
    Edit_Address -->|unnamed| Address_rules
```

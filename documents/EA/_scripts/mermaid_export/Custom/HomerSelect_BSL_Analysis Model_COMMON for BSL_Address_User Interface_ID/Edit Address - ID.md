# Edit Address - ID

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/User Interface/ID
- **Diagram ID**: 134111
- **Elements**: 14
- **Connectors**: 2

```mermaid
graph TD
    MOD_Address_rules_ID["{MOD}Address rules - ID"]
    Address_rules["Address rules"]
    Building_name["Building name"]
    Street_number["Street number"]
    Village["Village"]
    Zip_code["Zip code"]
    Community_unit_number["Community unit number"]
    Sub_district["Sub-district"]
    Regency_City["Regency/City"]
    Landmark["Landmark"]
    Floor_number["Floor number"]
    Neighborhood_number["Neighborhood number"]
    Street_name["Street name"]
    Edit_Address["Edit Address"]
    Edit_Address -->|unnamed| Address_rules
    MOD_Address_rules_ID -->|unnamed| Address_rules
```

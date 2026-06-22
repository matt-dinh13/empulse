# Edit Client Address - ID

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/User Interface/ID
- **Diagram ID**: 134112
- **Elements**: 12
- **Connectors**: 2

```mermaid
graph TD
    MOD_Address_rules_ID["{MOD}Address rules - ID"]
    Address_rules["Address rules"]
    n_["/"]
    Landmark["Landmark"]
    Zip_code["Zip code"]
    Community_unit_number["Community unit number"]
    Neighborhood_number["Neighborhood number"]
    Village["Village"]
    Sub_district["Sub-district"]
    Regency_City["Regency/City"]
    Street_name_block_and_number["Street name, block and number"]
    Edit_Address["Edit Address"]
    Edit_Address -->|unnamed| Address_rules
    MOD_Address_rules_ID -->|unnamed| Address_rules
```

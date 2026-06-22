# Edit Address on AF - PH

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/User Interface/PH
- **Diagram ID**: 139551
- **Elements**: 9
- **Connectors**: 2

```mermaid
graph TD
    Unit_floor_building_name_and_no_street_name["Unit, floor, building name and no., street name"]
    Address_rules["Address rules"]
    Address_rules_PH["Address rules - PH"]
    Landmark["Landmark"]
    Zip_code["Zip code"]
    Barangay["Barangay"]
    Municipality_City["Municipality/City"]
    Province["Province"]
    Edit_Address["Edit Address"]
    Address_rules_PH -->|unnamed| Address_rules
    Edit_Address -->|unnamed| Address_rules
```

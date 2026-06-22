# LOR-10356 Increase length of address fields in BSL

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10347 Increase length of address fields in BSL/LOR-10356 Increase length of address fields in BSL
- **Diagram ID**: 158446
- **Elements**: 9
- **Connectors**: 5

```mermaid
graph TD
    MOD_Switches_for_LOR_tasks["{MOD}Switches for LOR tasks"]
    MOD_Address_validation_rule_IN["{MOD}Address validation rule-IN"]
    ADD_Length_70["{ADD} Length 70"]
    Building["Building"]
    Landmark["Landmark"]
    Locality["Locality"]
    Town["Town"]
    Street_name["Street name"]
    LOR_10356_Increase_length_of_address_fields_in_BSL["LOR-10356 Increase length of address fields in BSL"]
    Landmark -->|unnamed| ADD_Length_70
    Building -->|unnamed| ADD_Length_70
    Locality -->|unnamed| ADD_Length_70
    Town -->|unnamed| ADD_Length_70
    Street_name -->|unnamed| ADD_Length_70
```

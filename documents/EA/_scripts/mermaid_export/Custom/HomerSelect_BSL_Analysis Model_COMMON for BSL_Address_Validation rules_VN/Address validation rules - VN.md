# Address validation rules - VN

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Validation rules/VN
- **Diagram ID**: 48083
- **Elements**: 11
- **Connectors**: 13

```mermaid
graph TD
    TownRegister["TownRegister"]
    Autocompletion["Autocompletion"]
    Length_40["Length 40"]
    Mandatory["Mandatory"]
    Province["Province"]
    District["District"]
    Ward["Ward"]
    Street["Street"]
    House_number["House number"]
    Length_20["Length 20"]
    Text["Text"]
    Ward -->|unnamed| Text
    Street -->|unnamed| Text
    House_number -->|unnamed| Text
    House_number -->|unnamed| Length_20
    Province -->|unnamed| Mandatory
    District -->|unnamed| Mandatory
    Ward -->|unnamed| Mandatory
    Street -->|unnamed| Mandatory
    House_number -->|unnamed| Mandatory
    Ward -->|unnamed| Length_40
    Street -->|unnamed| Length_40
    Ward -->|unnamed| Autocompletion
    Ward -->|unnamed| TownRegister
```

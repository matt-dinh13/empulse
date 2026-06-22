# Commodity

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/VN/Commodities/Commodity
- **Diagram ID**: 101802
- **Elements**: 8
- **Connectors**: 9

```mermaid
graph TD
    Length50["Length50"]
    VIN_Number["VIN Number"]
    Model["Model"]
    Manufacturer["Manufacturer"]
    Text["Text"]
    Length_22["Length 22"]
    Optional["Optional"]
    Mandatory["Mandatory"]
    Manufacturer -->|unnamed| Mandatory
    Manufacturer -->|unnamed| Text
    Manufacturer -->|unnamed| Length50
    Model -->|unnamed| Optional
    Model -->|unnamed| Length50
    Model -->|unnamed| Text
    VIN_Number -->|unnamed| Length_22
    VIN_Number -->|unnamed| Mandatory
    VIN_Number -->|unnamed| Text
```

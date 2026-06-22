# Commodities validation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Commodities validation
- **Diagram ID**: 85031
- **Elements**: 12
- **Connectors**: 12

```mermaid
graph TD
    Length_30["Length ‹= 30"]
    Length50["Length50"]
    IMEI_validation["IMEI validation"]
    Length15["Length15"]
    IMEI["IMEI"]
    Manufacturer_codelist["Manufacturer codelist"]
    Serial_number["Serial number"]
    Character_set["Character set"]
    Model["Model"]
    Engine_number["Engine number"]
    Manufacturer["Manufacturer"]
    Optional["Optional"]
    Serial_number -->|unnamed| Length_30
    IMEI -->|unnamed| Optional
    Manufacturer_codelist -->|unnamed| Optional
    Model -->|unnamed| Optional
    Engine_number -->|unnamed| Optional
    Manufacturer -->|unnamed| Optional
    Model -->|unnamed| Character_set
    Manufacturer -->|unnamed| Character_set
    IMEI -->|unnamed| Length15
    IMEI -->|unnamed| IMEI_validation
    Model -->|unnamed| Length50
    Manufacturer -->|unnamed| Length50
```

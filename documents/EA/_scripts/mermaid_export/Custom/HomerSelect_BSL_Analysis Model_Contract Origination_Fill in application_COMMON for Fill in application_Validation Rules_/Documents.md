# Documents

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Documents
- **Diagram ID**: 85041
- **Elements**: 5
- **Connectors**: 6

```mermaid
graph TD
    Length_30["Length ‹= 30"]
    Text_character_set["Text character set"]
    Mandatory["Mandatory"]
    SSS_GSIS["SSS/GSIS"]
    TIN["TIN"]
    SSS_GSIS -->|unnamed| Length_30
    TIN -->|unnamed| Length_30
    SSS_GSIS -->|unnamed| Mandatory
    TIN -->|unnamed| Mandatory
    SSS_GSIS -->|unnamed| Text_character_set
    TIN -->|unnamed| Text_character_set
```

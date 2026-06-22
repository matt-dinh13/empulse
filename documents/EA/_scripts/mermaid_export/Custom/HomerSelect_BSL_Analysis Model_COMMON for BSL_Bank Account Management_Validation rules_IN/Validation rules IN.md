# Validation rules IN

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Validation rules/IN
- **Diagram ID**: 68502
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    Account_number_validation["Account number validation"]
    Length_50["Length ‹= 50"]
    Account_holder_name["Account holder name"]
    Length_20["Length ‹= 20"]
    Account_number_IN["Account number - IN"]
    Account_number_IN -->|unnamed| Account_number_validation
    Account_number_IN -->|unnamed| Length_20
    Account_holder_name -->|unnamed| Length_50
```

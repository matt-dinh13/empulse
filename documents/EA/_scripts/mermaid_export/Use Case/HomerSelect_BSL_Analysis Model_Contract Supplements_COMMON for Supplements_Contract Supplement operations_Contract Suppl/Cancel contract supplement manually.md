# Cancel contract supplement manually

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/UseCase Model
- **Diagram ID**: 162791
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    User_Interface_Cancel_unprocessed_contract_supplement_UI["User Interface : Cancel unprocessed contract supplement - UI"]
    User[/"User"/]
    MOD_13_360_Cancel_unprocessed_contract_supplement_manually(("{MOD}13.360 Cancel unprocessed contract supplement manually"))
    MOD_13_360_Cancel_unprocessed_contract_supplement_manually -->|unnamed| User_Interface_Cancel_unprocessed_contract_supplement_UI
    User --> MOD_13_360_Cancel_unprocessed_contract_supplement_manually
```

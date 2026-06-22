# Create Contract - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Create Contract/Use Case Model
- **Diagram ID**: 160638
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph LR
    ADD_Set_contract_default_ownership["{ADD}Set contract default ownership"]
    createContract_createContract["createContract : createContract"]
    External_system[/"External system"/]
    ADD_Create_Contract(("{ADD}Create Contract"))
    ADD_Create_Contract -->|unnamed| ADD_Set_contract_default_ownership
    External_system --> ADD_Create_Contract
```

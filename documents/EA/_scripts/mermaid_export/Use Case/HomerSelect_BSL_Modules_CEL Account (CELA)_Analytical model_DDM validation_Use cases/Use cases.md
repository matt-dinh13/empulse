# Use cases

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/CEL Account (CELA)/Analytical model/DDM validation/Use cases
- **Diagram ID**: 156129
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    MOD_Check_DDM_account(("{MOD}Check DDM account"))
    ADD_Process_contract_change(("{ADD}Process contract change"))
    ADD_Process_DDM_change(("{ADD}Process DDM change"))
    MOD_Check_DDM_account --> ADD_Process_DDM_change
    MOD_Check_DDM_account --> ADD_Process_contract_change
```

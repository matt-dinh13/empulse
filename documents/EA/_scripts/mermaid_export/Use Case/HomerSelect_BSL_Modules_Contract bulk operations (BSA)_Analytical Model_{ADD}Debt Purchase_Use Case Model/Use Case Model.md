# Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/{ADD}Debt Purchase/Use Case Model
- **Diagram ID**: 164689
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    User[/"User"/]
    ADD_08_763_Execute_Debt_purchase_bulk_operation(("{ADD}08.763 Execute Debt purchase bulk operation"))
    ADD_08_761_Create_Debt_purchase_bulk_operation(("{ADD}08.761 Create Debt purchase bulk operation"))
    ADD_08_761_Create_Debt_purchase_bulk_operation --- User
    ADD_08_763_Execute_Debt_purchase_bulk_operation --- User
```

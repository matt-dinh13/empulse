# Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/Account termination/Use Case Model
- **Diagram ID**: 164419
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    User[/"User"/]
    n_08_752_Validate_Account_Termination_bulk_operation(("08.752 Validate Account Termination bulk operation"))
    n_08_751_Create_Account_Termination_bulk_operation(("08.751 Create Account Termination bulk operation"))
    n_08_753_Execute_Account_Termination_bulk_operation(("08.753 Execute Account Termination bulk operation"))
    n_08_751_Create_Account_Termination_bulk_operation --- User
    n_08_753_Execute_Account_Termination_bulk_operation --- User
    n_08_751_Create_Account_Termination_bulk_operation -->|unnamed| n_08_752_Validate_Account_Termination_bulk_operation
```

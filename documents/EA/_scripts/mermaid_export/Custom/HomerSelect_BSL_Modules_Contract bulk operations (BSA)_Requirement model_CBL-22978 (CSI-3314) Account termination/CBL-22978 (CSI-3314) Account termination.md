# CBL-22978 (CSI-3314) Account termination

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-22978 (CSI-3314) Account termination
- **Diagram ID**: 157723
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph TD
    Extension_of_BSA_by_new_Account_Termination_operation["Extension of BSA by new Account Termination operation "]
    n_08_752_Validate_Account_Termination_bulk_operation["08.752 Validate Account Termination bulk operation"]
    n_08_753_Execute_Account_Termination_bulk_operation["08.753 Execute Account Termination bulk operation"]
    n_08_751_Create_Account_Termination_bulk_operation["08.751 Create Account Termination bulk operation"]
    n_08_753_Execute_Account_Termination_bulk_operation["08.753 Execute Account Termination bulk operation"]
    n_08_752_Validate_Account_Termination_bulk_operation["08.752 Validate Account Termination bulk operation"]
    n_08_751_Create_Account_Termination_bulk_operation["08.751 Create Account Termination bulk operation"]
    MOD_08_711_Execute_bulk_operation["{MOD}08.711 Execute bulk operation"]
    n_08_753_Execute_Account_Termination_bulk_operation -->|unnamed| n_08_753_Execute_Account_Termination_bulk_operation
    n_08_752_Validate_Account_Termination_bulk_operation -->|unnamed| n_08_752_Validate_Account_Termination_bulk_operation
    n_08_751_Create_Account_Termination_bulk_operation -->|unnamed| n_08_751_Create_Account_Termination_bulk_operation
```

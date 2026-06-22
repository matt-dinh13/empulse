# Create/Update bank account

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Bank Account/User Interface
- **Diagram ID**: 107528
- **Elements**: 7
- **Connectors**: 2

```mermaid
graph TD
    Edit_Bank_Account["Edit Bank Account"]
    OK["OK"]
    MOD_For_receiving_payments["{MOD}For receiving payments"]
    Cancel["Cancel"]
    n_09_130_Update_SN_bank_account["09.130 Update SN bank account"]
    MOD_09_120_Create_SN_bank_account["{MOD}09.120 Create SN bank account"]
    Create_Update_bank_account["Create/Update bank account"]
    Create_Update_bank_account -->|unnamed| MOD_09_120_Create_SN_bank_account
    Create_Update_bank_account -->|unnamed| n_09_130_Update_SN_bank_account
```

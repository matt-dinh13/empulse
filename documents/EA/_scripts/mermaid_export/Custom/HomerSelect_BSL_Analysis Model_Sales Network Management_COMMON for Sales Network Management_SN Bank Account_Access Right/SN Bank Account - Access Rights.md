# SN Bank Account - Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Bank Account/Access Rights
- **Diagram ID**: 97934
- **Elements**: 8
- **Connectors**: 4

```mermaid
graph TD
    n_09_320_Show_bank_account["09.320 Show bank account"]
    n_09_140_Remove_bank_account["09.140 Remove bank account"]
    n_09_130_Update_bank_account["09.130 Update bank account"]
    n_09_120_Create_bank_account["09.120 Create bank account"]
    n_09_320_Show_SN_bank_account["09.320 Show SN bank account"]
    MOD_09_140_Remove_SN_bank_account["{MOD}09.140 Remove SN bank account"]
    n_09_130_Update_SN_bank_account["09.130 Update SN bank account"]
    MOD_09_120_Create_SN_bank_account["{MOD}09.120 Create SN bank account"]
    MOD_09_120_Create_SN_bank_account -->|unnamed| n_09_120_Create_bank_account
    MOD_09_140_Remove_SN_bank_account -->|unnamed| n_09_140_Remove_bank_account
    n_09_130_Update_SN_bank_account -->|unnamed| n_09_130_Update_bank_account
    n_09_320_Show_SN_bank_account -->|unnamed| n_09_320_Show_bank_account
```

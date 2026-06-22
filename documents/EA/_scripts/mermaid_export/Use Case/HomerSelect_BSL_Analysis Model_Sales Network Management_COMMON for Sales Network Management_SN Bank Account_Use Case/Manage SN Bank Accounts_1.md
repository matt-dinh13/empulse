# Manage SN Bank Accounts

```mermaid
graph TD
    User["User"]
    Create_Update_bank_account_Create_Update_bank_account["Create/Update bank account : Create/Update bank account"]
    Show_detail_of_bank_account_Show_detail_of_bank_account["Show detail of bank account : Show detail of bank account"]
    n_09_320_Show_SN_bank_account["09.320 Show SN bank account"]
    MOD_09_140_Remove_SN_bank_account["{MOD}09.140 Remove SN bank account"]
    n_09_130_Update_SN_bank_account["09.130 Update SN bank account"]
    MOD_09_120_Create_SN_bank_account["{MOD}09.120 Create SN bank account"]
    MOD_09_120_Create_SN_bank_account -->|unnamed| Create_Update_bank_account_Create_Update_bank_account
    n_09_130_Update_SN_bank_account -->|unnamed| Create_Update_bank_account_Create_Update_bank_account
    n_09_320_Show_SN_bank_account -->|unnamed| Show_detail_of_bank_account_Show_detail_of_bank_account
    User -->|unnamed| MOD_09_120_Create_SN_bank_account
    User -->|unnamed| n_09_320_Show_SN_bank_account
    User -->|unnamed| MOD_09_140_Remove_SN_bank_account
    User -->|unnamed| n_09_130_Update_SN_bank_account
```

# Bank Management

```mermaid
graph TD
    HSIS_Notifications_HSIS_Notifications["HSIS Notifications : HSIS Notifications"]
    User_Interface_Bank_branch_detail["User Interface : Bank branch detail"]
    User_Interface_Create_Update_bank_branch["User Interface : Create/Update bank branch"]
    User_Interface_Create_Update_bank["User Interface : Create/Update bank"]
    User_Interface_Bank_detail["User Interface : Bank detail"]
    User_Interface_Find_bank_branch["User Interface : Find bank branch"]
    User_Interface_Find_bank["User Interface : Find bank"]
    User["User"]
    n_00_150_Find_bank_branch["00.150 Find bank branch"]
    n_00_140_Show_bank_branch_detail["00.140 Show bank branch detail"]
    MOD_00_130_Update_bank_branch["{MOD} 00.130 Update bank branch"]
    MOD_00_120_Create_bank_branch["{MOD} 00.120 Create bank branch"]
    n_00_110_Find_bank["00.110 Find bank"]
    n_00_180_Show_bank_detail["00.180 Show bank detail"]
    MOD_00_170_Update_bank["{MOD} 00.170 Update bank"]
    MOD_00_160_Create_bank["{MOD} 00.160 Create bank"]
    User_Interface_Create_Update_bank_branch -->|unnamed| MOD_00_130_Update_bank_branch
    User_Interface_Create_Update_bank_branch -->|unnamed| MOD_00_120_Create_bank_branch
    User_Interface_Create_Update_bank -->|unnamed| MOD_00_170_Update_bank
    User_Interface_Create_Update_bank -->|unnamed| MOD_00_160_Create_bank
    User_Interface_Bank_detail -->|unnamed| n_00_180_Show_bank_detail
    User_Interface_Find_bank_branch -->|unnamed| n_00_150_Find_bank_branch
    User_Interface_Find_bank_branch -->|unnamed| n_00_140_Show_bank_branch_detail
    User_Interface_Find_bank_branch -->|unnamed| MOD_00_120_Create_bank_branch
    User_Interface_Find_bank -->|unnamed| n_00_110_Find_bank
    User_Interface_Bank_branch_detail -->|unnamed| n_00_140_Show_bank_branch_detail
    MOD_00_160_Create_bank -->|unnamed| HSIS_Notifications_HSIS_Notifications
    MOD_00_130_Update_bank_branch -->|unnamed| HSIS_Notifications_HSIS_Notifications
    MOD_00_120_Create_bank_branch -->|unnamed| HSIS_Notifications_HSIS_Notifications
    n_00_180_Show_bank_detail -->|unnamed| User_Interface_Find_bank
    MOD_00_170_Update_bank -->|unnamed| HSIS_Notifications_HSIS_Notifications
    MOD_00_160_Create_bank -->|unnamed| User_Interface_Find_bank
    User -->|unnamed| n_00_140_Show_bank_branch_detail
    User -->|unnamed| n_00_150_Find_bank_branch
    User -->|unnamed| n_00_180_Show_bank_detail
    User -->|unnamed| MOD_00_130_Update_bank_branch
    User -->|unnamed| MOD_00_170_Update_bank
    User -->|unnamed| MOD_00_120_Create_bank_branch
    User -->|unnamed| n_00_110_Find_bank
    User -->|unnamed| MOD_00_160_Create_bank
```

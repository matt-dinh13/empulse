# PAYM-1214 (CBL-1767) Bank Account Verification in BSL using DOKU API (3rd Party)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1214 (CBL-1767) Bank Account Verification in BSL using DOKU API (3rd Party)
- **Diagram ID**: 106357
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph TD
    Payment_Management_Payment_Management_Global_Parameter["Payment Management : Payment Management Global Parameter"]
    Logical_Data_Model_Payment_Channels["Logical Data Model : Payment Channels"]
    MOD_PAYM_6304_01_676_Verify_bank_account_data_for_contract_d["{MOD PAYM-6304} 01.676 Verify bank account data for contract disb. channel"]
    ID_Create_Update_bank_account_for_disbursement_ID["ID : Create/Update bank account for disbursement - ID"]
    User_Interface_Model_Change_disbursement_channel["User Interface Model : Change disbursement channel"]
    User_Interface_Model_General_bank_account_change_disb_channe["User Interface Model : General bank account - change disb. channel"]
    MOD_CBL_31820_00_300_Verify_bank_account_data_externally_ser["{MOD CBL-31820}00.300 - Verify bank account data externally - service(/MOD)"]
    UseCase_Model_BankAccountWS_operations_use_case_model["UseCase Model : BankAccountWS operations - use case model"]
    Bank_accounts_BankAccountsWS["Bank accounts : BankAccountsWS"]
    User_Interface_Model_General_bank_account_change_disb_channe -->|unnamed| User_Interface_Model_Change_disbursement_channel
    MOD_CBL_31820_00_300_Verify_bank_account_data_externally_ser -->|unnamed| Bank_accounts_BankAccountsWS
    MOD_CBL_31820_00_300_Verify_bank_account_data_externally_ser -->|unnamed| UseCase_Model_BankAccountWS_operations_use_case_model
```

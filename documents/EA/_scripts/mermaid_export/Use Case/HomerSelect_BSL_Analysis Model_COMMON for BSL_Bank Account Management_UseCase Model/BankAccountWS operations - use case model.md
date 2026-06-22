# BankAccountWS operations - use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/UseCase Model
- **Diagram ID**: 164321
- **Elements**: 9
- **Connectors**: 10

```mermaid
graph LR
    ADD_00_530_Get_bank_account_by_CUID_request(("{ADD}00.530 Get bank account by CUID request"))
    ADD_Find_bank_account["{ADD}Find bank account"]
    ADD_00_520_Get_bank_account_on_external_request(("{ADD}00.520 Get bank account on external request"))
    ADD_00_510_Update_bank_account_on_external_request(("{ADD}00.510 Update bank account on external request"))
    ADD_Find_or_create_bank_account["{ADD}Find or create bank account"]
    ADD_00_500_Create_bank_account_on_external_request(("{ADD}00.500 Create bank account on external request"))
    diagram_7FAF36D8_E1E7_4c57_A157_998F81A755C5["$diagram://{7FAF36D8-E1E7-4c57-A157-998F81A755C5}"]
    Bank_accounts_BankAccountsWS_verifyBankAccountDataExternally["Bank accounts :BankAccountsWS.verifyBankAccountDataExternally()"]
    MOD_CBL_31820_00_300_Verify_bank_account_data_externally_ser(("{MOD CBL-31820}00.300 - Verify bank account data externally - service(/MOD)"))
    MOD_CBL_31820_00_300_Verify_bank_account_data_externally_ser -->|unnamed| diagram_7FAF36D8_E1E7_4c57_A157_998F81A755C5
    Bank_accounts_BankAccountsWS_verifyBankAccountDataExternally -->|unnamed| ADD_00_510_Update_bank_account_on_external_request
    Bank_accounts_BankAccountsWS_verifyBankAccountDataExternally -->|unnamed| ADD_00_500_Create_bank_account_on_external_request
    Bank_accounts_BankAccountsWS_verifyBankAccountDataExternally -->|unnamed| ADD_00_530_Get_bank_account_by_CUID_request
    Bank_accounts_BankAccountsWS_verifyBankAccountDataExternally -->|unnamed| MOD_CBL_31820_00_300_Verify_bank_account_data_externally_ser
    Bank_accounts_BankAccountsWS_verifyBankAccountDataExternally -->|unnamed| ADD_00_520_Get_bank_account_on_external_request
    ADD_00_500_Create_bank_account_on_external_request -->|unnamed| ADD_Find_or_create_bank_account
    ADD_Find_or_create_bank_account -->|unnamed| ADD_Find_bank_account
    ADD_00_510_Update_bank_account_on_external_request -->|unnamed| ADD_Find_or_create_bank_account
    ADD_00_510_Update_bank_account_on_external_request -->|unnamed| ADD_Find_bank_account
```

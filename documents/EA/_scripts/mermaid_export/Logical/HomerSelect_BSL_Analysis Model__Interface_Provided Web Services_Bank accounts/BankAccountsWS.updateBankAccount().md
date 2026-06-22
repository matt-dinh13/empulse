# BankAccountsWS.updateBankAccount()

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts
- **Diagram ID**: 119290
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class ADD_00_510_Update_bank_account_on_external_request["{ADD}00.510 Update bank account on external request"]
    class ADD_UpdateBankAccountRequest["{ADD}UpdateBankAccountRequest"]
    class ADD_UpdateBankAccountResponse["{ADD}UpdateBankAccountResponse"]
    class ADD_BankAccountResponseStatusDto["{ADD}BankAccountResponseStatusDto"]
    class UseCase_Model_BankAccountWS_operations_use_case_model["UseCase Model : BankAccountWS operations - use case model"]
    class ADD_HolderTypeDto["{ADD}HolderTypeDto"]
    class ADD_BankAccountTypeDto["{ADD}BankAccountTypeDto"]
    class ADD_CreateBankAccountDataDto["{ADD}CreateBankAccountDataDto"]
    class ADD_BankAccountsWS["{ADD} BankAccountsWS"]
    ADD_UpdateBankAccountRequest ..> ADD_CreateBankAccountDataDto : unnamed
    ADD_UpdateBankAccountResponse ..> ADD_BankAccountResponseStatusDto : unnamed
    ADD_BankAccountsWS ..> ADD_UpdateBankAccountResponse : unnamed
    ADD_BankAccountsWS ..> ADD_UpdateBankAccountRequest : unnamed
    ADD_BankAccountsWS ..> ADD_00_510_Update_bank_account_on_external_request : unnamed
    ADD_CreateBankAccountDataDto ..> ADD_BankAccountTypeDto : unnamed
    ADD_CreateBankAccountDataDto ..> ADD_HolderTypeDto : unnamed
    ADD_00_510_Update_bank_account_on_external_request --> UseCase_Model_BankAccountWS_operations_use_case_model : unnamed
```

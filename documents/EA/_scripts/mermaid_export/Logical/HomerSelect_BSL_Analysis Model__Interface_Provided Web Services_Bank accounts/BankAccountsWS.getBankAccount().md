# BankAccountsWS.getBankAccount()

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts
- **Diagram ID**: 119291
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class ADD_GetBankAccountResponse["{ADD}GetBankAccountResponse"]
    class ADD_GetBankAccountRequest["{ADD}GetBankAccountRequest"]
    class ADD_00_520_Get_bank_account_on_external_request["{ADD}00.520 Get bank account on external request"]
    class ADD_BankAccountResponseStatusDto["{ADD}BankAccountResponseStatusDto"]
    class UseCase_Model_BankAccountWS_operations_use_case_model["UseCase Model : BankAccountWS operations - use case model"]
    class ADD_HolderTypeDto["{ADD}HolderTypeDto"]
    class ADD_BankAccountTypeDto["{ADD}BankAccountTypeDto"]
    class ADD_CreateBankAccountDataDto["{ADD}CreateBankAccountDataDto"]
    class ADD_BankAccountsWS["{ADD} BankAccountsWS"]
    ADD_GetBankAccountResponse ..> ADD_CreateBankAccountDataDto : unnamed
    ADD_GetBankAccountResponse ..> ADD_BankAccountResponseStatusDto : unnamed
    ADD_BankAccountsWS ..> ADD_00_520_Get_bank_account_on_external_request : unnamed
    ADD_BankAccountsWS ..> ADD_GetBankAccountRequest : unnamed
    ADD_BankAccountsWS ..> ADD_GetBankAccountResponse : unnamed
    ADD_CreateBankAccountDataDto ..> ADD_BankAccountTypeDto : unnamed
    ADD_CreateBankAccountDataDto ..> ADD_HolderTypeDto : unnamed
    ADD_00_520_Get_bank_account_on_external_request --> UseCase_Model_BankAccountWS_operations_use_case_model : unnamed
```

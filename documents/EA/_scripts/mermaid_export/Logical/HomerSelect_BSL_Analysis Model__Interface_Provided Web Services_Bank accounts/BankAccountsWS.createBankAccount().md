# BankAccountsWS.createBankAccount()

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts
- **Diagram ID**: 119289
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class ADD_BankAccountResponseStatusDto["{ADD}BankAccountResponseStatusDto"]
    class ADD_CreateBankAccountResponse["{ADD}CreateBankAccountResponse"]
    class ADD_00_500_Create_bank_account_on_external_request["{ADD}00.500 Create bank account on external request"]
    class UseCase_Model_BankAccountWS_operations_use_case_model["UseCase Model : BankAccountWS operations - use case model"]
    class ADD_HolderTypeDto["{ADD}HolderTypeDto"]
    class ADD_BankAccountTypeDto["{ADD}BankAccountTypeDto"]
    class ADD_CreateBankAccountDataDto["{ADD}CreateBankAccountDataDto"]
    class ADD_CreateBankAccountRequest["{ADD}CreateBankAccountRequest"]
    class ADD_BankAccountsWS["{ADD} BankAccountsWS"]
    ADD_BankAccountsWS ..> ADD_CreateBankAccountRequest : unnamed
    ADD_CreateBankAccountRequest ..> ADD_CreateBankAccountDataDto : unnamed
    ADD_BankAccountsWS ..> ADD_00_500_Create_bank_account_on_external_request : unnamed
    ADD_BankAccountsWS ..> ADD_CreateBankAccountResponse : unnamed
    ADD_CreateBankAccountResponse ..> ADD_BankAccountResponseStatusDto : unnamed
    ADD_CreateBankAccountDataDto ..> ADD_BankAccountTypeDto : unnamed
    ADD_CreateBankAccountDataDto ..> ADD_HolderTypeDto : unnamed
    ADD_00_500_Create_bank_account_on_external_request --> UseCase_Model_BankAccountWS_operations_use_case_model : unnamed
```

# BankAccountsWS.getBankAccountByCUID

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts
- **Diagram ID**: 119293
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class DDMResultTypeDto["DDMResultTypeDto"]
    class ValidationResultDto["ValidationResultDto"]
    class getBankAccountByCUIDFault["getBankAccountByCUIDFault"]
    class ADD_00_530_Get_bank_account_by_CUID_request["{ADD}00.530 Get bank account by CUID request"]
    class getBankAccountByCUIDResponse["getBankAccountByCUIDResponse"]
    class AccountTypeDto["AccountTypeDto"]
    class GetBankAccountByCUIDDataDto["GetBankAccountByCUIDDataDto"]
    class GetBankAccountByCUIDRequest["GetBankAccountByCUIDRequest"]
    class ADD_BankAccountsWS["{ADD} BankAccountsWS"]
    getBankAccountByCUIDFault ..> DDMResultTypeDto : unnamed
    getBankAccountByCUIDFault ..> ValidationResultDto : unnamed
    ADD_BankAccountsWS ..> GetBankAccountByCUIDRequest : unnamed
    getBankAccountByCUIDResponse ..> GetBankAccountByCUIDDataDto : unnamed
    GetBankAccountByCUIDDataDto ..> AccountTypeDto : unnamed
    ADD_BankAccountsWS ..> getBankAccountByCUIDResponse : unnamed
    ADD_BankAccountsWS ..> ADD_00_530_Get_bank_account_by_CUID_request : unnamed
    ADD_BankAccountsWS ..> getBankAccountByCUIDFault : unnamed
```

# AccountManagementWS - GetAccount

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)
- **Diagram ID**: 136841
- **Elements**: 13
- **Connectors**: 14

```mermaid
classDiagram
    class CurrencyCodeType["CurrencyCodeType"]
    class CashLimitType["CashLimitType"]
    class IbanType["IbanType"]
    class PositiveMoneyDto["PositiveMoneyDto"]
    class AccountNumberType["AccountNumberType"]
    class ContractCodeType["ContractCodeType"]
    class AccountTypeDto["AccountTypeDto"]
    class AccountStatusDto["AccountStatusDto"]
    class AccountManagementResponseBaseDto["AccountManagementResponseBaseDto"]
    class AccountDto["AccountDto"]
    class GetAccountResponse["GetAccountResponse"]
    class GetAccountRequest["GetAccountRequest"]
    class AccountManagementWS["AccountManagementWS"]
    AccountManagementWS ..> GetAccountRequest : unnamed
    AccountManagementWS ..> GetAccountResponse : unnamed
    GetAccountResponse ..> AccountDto : unnamed
    AccountManagementResponseBaseDto <|-- GetAccountResponse : unnamed
    GetAccountRequest ..> AccountNumberType : unnamed
    PositiveMoneyDto ..> CurrencyCodeType : unnamed
    AccountDto ..> IbanType : unnamed
    AccountDto ..> AccountNumberType : unnamed
    AccountDto ..> CurrencyCodeType : unnamed
    AccountDto ..> AccountTypeDto : unnamed
    AccountDto ..> ContractCodeType : unnamed
    AccountDto ..> CashLimitType : unnamed
    AccountDto ..> AccountStatusDto : unnamed
    AccountDto ..> PositiveMoneyDto : unnamed
```

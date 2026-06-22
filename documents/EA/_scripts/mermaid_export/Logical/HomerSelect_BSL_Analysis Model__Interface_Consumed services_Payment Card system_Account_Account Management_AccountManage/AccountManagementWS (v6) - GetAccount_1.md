# AccountManagementWS (v6) - GetAccount

```mermaid
classDiagram
    class AccountStatusDto["AccountStatusDto"]
    class CashLimitType["CashLimitType"]
    class CurrencyCodeType["CurrencyCodeType"]
    class IbanType["IbanType"]
    class PositiveMoneyDto["PositiveMoneyDto"]
    class AccountTypeDto["AccountTypeDto"]
    class ContractCodeType["ContractCodeType"]
    class AccountDto["AccountDto"]
    class AccountNumberType["AccountNumberType"]
    class AccountManagementResponseBaseDto["AccountManagementResponseBaseDto"]
    class GetAccountResponse["GetAccountResponse"]
    class GetAccountRequest["GetAccountRequest"]
    class AccountManagementWS_v6["AccountManagementWS (v6)"]
    AccountManagementWS_v6 --> GetAccountResponse : unnamed
    AccountManagementWS_v6 --> GetAccountRequest : unnamed
    GetAccountRequest --> AccountNumberType : unnamed
    GetAccountResponse --> AccountDto : unnamed
    GetAccountResponse --> AccountManagementResponseBaseDto : unnamed
    AccountDto --> AccountStatusDto : unnamed
    AccountDto --> CashLimitType : unnamed
    AccountDto --> AccountNumberType : unnamed
    AccountDto --> IbanType : unnamed
    AccountDto --> ContractCodeType : unnamed
    AccountDto --> CurrencyCodeType : unnamed
    AccountDto --> PositiveMoneyDto : unnamed
    AccountDto --> AccountTypeDto : unnamed
    PositiveMoneyDto --> CurrencyCodeType : unnamed
```

# AccountManagementWS - GetAccountList

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)
- **Diagram ID**: 136839
- **Elements**: 18
- **Connectors**: 23

```mermaid
classDiagram
    class AccountManagementSearchResponseBaseDto["AccountManagementSearchResponseBaseDto"]
    class AccountManagementResponseBaseDto["AccountManagementResponseBaseDto"]
    class CashLimitType["CashLimitType"]
    class PositiveMoneyDto["PositiveMoneyDto"]
    class CurrencyCodeType["CurrencyCodeType"]
    class MoneyDto["MoneyDto"]
    class IbanType["IbanType"]
    class GetAccountListResponse["GetAccountListResponse"]
    class AccountDto["AccountDto"]
    class DayOfMonth["DayOfMonth"]
    class AccountTypeDto["AccountTypeDto"]
    class ContractCodeType["ContractCodeType"]
    class AccountNumberType["AccountNumberType"]
    class AccountStatusDto["AccountStatusDto"]
    class AccountSearchDto["AccountSearchDto"]
    class AccountManagementSearchBaseDto["AccountManagementSearchBaseDto"]
    class GetAccountListRequest["GetAccountListRequest"]
    class AccountManagementWS["AccountManagementWS"]
    AccountManagementResponseBaseDto <|-- AccountManagementSearchResponseBaseDto : unnamed
    AccountManagementWS ..> GetAccountListResponse : unnamed
    AccountManagementSearchResponseBaseDto <|-- GetAccountListResponse : unnamed
    AccountManagementWS ..> GetAccountListRequest : unnamed
    GetAccountListRequest ..> AccountSearchDto : unnamed
    AccountManagementSearchBaseDto <|-- GetAccountListRequest : unnamed
    GetAccountListResponse ..> AccountDto : unnamed
    MoneyDto <|-- PositiveMoneyDto : unnamed
    MoneyDto ..> CurrencyCodeType : unnamed
    PositiveMoneyDto ..> CurrencyCodeType : unnamed
    AccountDto ..> IbanType : unnamed
    AccountDto ..> AccountNumberType : unnamed
    AccountDto ..> CurrencyCodeType : unnamed
    AccountDto ..> AccountTypeDto : unnamed
    AccountDto ..> ContractCodeType : unnamed
    AccountDto ..> CashLimitType : unnamed
    AccountDto ..> AccountStatusDto : unnamed
    AccountDto ..> PositiveMoneyDto : unnamed
    AccountSearchDto ..> AccountTypeDto : unnamed
    AccountSearchDto ..> AccountNumberType : unnamed
    AccountSearchDto ..> ContractCodeType : unnamed
    AccountSearchDto ..> DayOfMonth : unnamed
    AccountSearchDto ..> AccountStatusDto : unnamed
```

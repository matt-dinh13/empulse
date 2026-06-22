# AccountManagementWS (v6) - ActivateAccount

```mermaid
classDiagram
    class AuthorizationTxAndIPTransferDto["AuthorizationTxAndIPTransferDto"]
    class ConfirmationTxAndIPTransferDto["ConfirmationTxAndIPTransferDto"]
    class FeeDto["FeeDto"]
    class AuthorizationTxDto["AuthorizationTxDto"]
    class ConfirmationTxDto["ConfirmationTxDto"]
    class ActivateAccountResponse["ActivateAccountResponse"]
    class ActivateAccountRequest["ActivateAccountRequest"]
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
    class AccountManagementWS_v6["AccountManagementWS (v6)"]
    ActivateAccountRequest --> ConfirmationTxDto : unnamed
    ConfirmationTxAndIPTransferDto --> PositiveMoneyDto : unnamed
    FeeDto --> AccountNumberType : External Reference
    AuthorizationTxDto --> PositiveMoneyDto : unnamed
    ConfirmationTxDto --> PositiveMoneyDto : unnamed
    ActivateAccountResponse --> AccountDto : unnamed
    ActivateAccountResponse --> AccountManagementResponseBaseDto : unnamed
    ActivateAccountRequest --> ContractCodeType : unnamed
    ActivateAccountRequest --> AuthorizationTxDto : unnamed
    ActivateAccountRequest --> ConfirmationTxAndIPTransferDto : unnamed
    AuthorizationTxAndIPTransferDto --> PositiveMoneyDto : unnamed
    ActivateAccountRequest --> AuthorizationTxAndIPTransferDto : unnamed
    AccountManagementWS_v6 --> ActivateAccountRequest : unnamed
    PositiveMoneyDto --> CurrencyCodeType : unnamed
    AccountDto --> AccountTypeDto : unnamed
    AccountDto --> PositiveMoneyDto : unnamed
    AccountDto --> CurrencyCodeType : unnamed
    AccountDto --> ContractCodeType : unnamed
    AccountDto --> IbanType : unnamed
    AccountDto --> AccountNumberType : unnamed
    AccountDto --> CashLimitType : unnamed
    AccountDto --> AccountStatusDto : unnamed
    AccountManagementWS_v6 --> ActivateAccountResponse : unnamed
    ActivateAccountRequest --> FeeDto : unnamed
```

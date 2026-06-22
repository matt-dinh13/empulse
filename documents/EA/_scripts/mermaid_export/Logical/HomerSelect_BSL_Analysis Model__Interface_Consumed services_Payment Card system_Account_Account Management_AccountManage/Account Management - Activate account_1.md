# Account Management - Activate account

```mermaid
classDiagram
    class ConfirmationTxAndIPTransferDto["ConfirmationTxAndIPTransferDto"]
    class AuthorizationTxAndIPTransferDto["AuthorizationTxAndIPTransferDto"]
    class AuthorizationTxDto["AuthorizationTxDto"]
    class MOD_ConfirmationTxDto["{MOD}ConfirmationTxDto"]
    class FeeDto["FeeDto"]
    class ActivateAccountResponse["ActivateAccountResponse"]
    class ActivateAccountRequest["ActivateAccountRequest"]
    class AccountManagementWS["AccountManagementWS"]
    AccountManagementWS --> ActivateAccountRequest : unnamed
    AccountManagementWS --> ActivateAccountResponse : unnamed
    ActivateAccountRequest --> FeeDto : unnamed
    ActivateAccountRequest --> MOD_ConfirmationTxDto : unnamed
    ActivateAccountRequest --> AuthorizationTxDto : unnamed
    ActivateAccountRequest --> AuthorizationTxAndIPTransferDto : unnamed
    ActivateAccountRequest --> ConfirmationTxAndIPTransferDto : unnamed
    AuthorizationTxAndIPTransferDto --> AuthorizationTxDto : unnamed
    ConfirmationTxAndIPTransferDto --> MOD_ConfirmationTxDto : unnamed
```

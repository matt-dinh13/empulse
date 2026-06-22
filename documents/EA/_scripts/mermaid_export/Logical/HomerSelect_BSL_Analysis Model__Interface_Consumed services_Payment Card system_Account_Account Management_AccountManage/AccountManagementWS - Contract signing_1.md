# AccountManagementWS - Contract signing

```mermaid
classDiagram
    class FeeDto["FeeDto"]
    class AuthorizationTxDto["AuthorizationTxDto"]
    class MOD_ConfirmationTxDto["{MOD}ConfirmationTxDto"]
    class AccountDto["AccountDto"]
    class MOD_ContractSnapshotBaseDto["{MOD}ContractSnapshotBaseDto"]
    class ActivateAccountResponse["ActivateAccountResponse"]
    class ActivateAccountRequest["ActivateAccountRequest"]
    class CreateAccountResponse["CreateAccountResponse"]
    class CreateAccountRequest["CreateAccountRequest"]
    class AccountManagementWS["AccountManagementWS"]
    AccountManagementWS --> CreateAccountRequest : unnamed
    AccountManagementWS --> CreateAccountResponse : unnamed
    AccountManagementWS --> ActivateAccountRequest : unnamed
    AccountManagementWS --> ActivateAccountResponse : unnamed
    CreateAccountRequest --> MOD_ContractSnapshotBaseDto : unnamed
    CreateAccountResponse --> AccountDto : unnamed
    ActivateAccountResponse --> AccountDto : unnamed
    ActivateAccountRequest --> MOD_ConfirmationTxDto : unnamed
    ActivateAccountRequest --> AuthorizationTxDto : unnamed
    ActivateAccountRequest --> FeeDto : unnamed
```

# Messages - LoyaltyManagementWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Messages
- **Diagram ID**: 81634
- **Elements**: 16
- **Connectors**: 12

```mermaid
classDiagram
    class CancelAccountTerminationResponse["CancelAccountTerminationResponse"]
    class ADD_SchemaType["{ADD}SchemaType"]
    class CancelAccountTerminationRequest["CancelAccountTerminationRequest"]
    class Mapping_rules_LoyaltyManagementWS_mapping_rules["Mapping rules : LoyaltyManagementWS - mapping rules"]
    class InitiateAccountTerminationResponse["InitiateAccountTerminationResponse"]
    class CancelAccountResponse["CancelAccountResponse"]
    class MOD_InitiateAccountTerminationRequest["{MOD}InitiateAccountTerminationRequest"]
    class CancelAccountRequest["CancelAccountRequest"]
    class SourceSystemType["SourceSystemType"]
    class AccountStatusType["AccountStatusType"]
    class AccountDetailType["AccountDetailType"]
    class Loyalty_system_LoyaltyManagementWS["Loyalty system : LoyaltyManagementWS"]
    class Types_Types_LoyaltyManagementWS["Types : Types - LoyaltyManagementWS"]
    class CreateAccountResponse["CreateAccountResponse"]
    class AccountIdentificationType["AccountIdentificationType"]
    class CreateAccountRequest["CreateAccountRequest"]
    AccountIdentificationType <|-- MOD_InitiateAccountTerminationRequest : unnamed
    AccountIdentificationType <|-- CancelAccountTerminationRequest : unnamed
    AccountIdentificationType <|-- CreateAccountRequest : unnamed
    AccountIdentificationType <|-- CancelAccountRequest : unnamed
    AccountDetailType <|-- InitiateAccountTerminationResponse : unnamed
    AccountDetailType <|-- CancelAccountResponse : unnamed
    AccountDetailType <|-- CancelAccountTerminationResponse : unnamed
    AccountDetailType <|-- CreateAccountResponse : unnamed
    AccountIdentificationType ..> SourceSystemType : unnamed
    AccountIdentificationType <|-- AccountDetailType : unnamed
    AccountDetailType ..> AccountStatusType : unnamed
```

# Types - LoyaltyManagementWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Types
- **Diagram ID**: 81635
- **Elements**: 9
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_ReasonForTerminationType["{ADD}ReasonForTerminationType"]
    class Mapping_rules_LoyaltyManagementWS_mapping_rules["Mapping rules : LoyaltyManagementWS - mapping rules"]
    class Messages_Messages_LoyaltyManagementWS["Messages : Messages - LoyaltyManagementWS"]
    class Loyalty_system_LoyaltyManagementWS["Loyalty system : LoyaltyManagementWS"]
    class MOD_InitiateAccountTerminationRequest["{MOD}InitiateAccountTerminationRequest"]
    class AccountStatusType["AccountStatusType"]
    class SourceSystemType["SourceSystemType"]
    class AccountDetailType["AccountDetailType"]
    class AccountIdentificationType["AccountIdentificationType"]
    AccountIdentificationType <|-- MOD_InitiateAccountTerminationRequest : unnamed
    AccountIdentificationType <|-- AccountDetailType : unnamed
    AccountIdentificationType ..> SourceSystemType : unnamed
    AccountDetailType ..> AccountStatusType : unnamed
    MOD_InitiateAccountTerminationRequest ..> ADD_ReasonForTerminationType : unnamed
```

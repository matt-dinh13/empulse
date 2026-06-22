# Account management structures  - Service Parameters

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures
- **Diagram ID**: 158214
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class LOYALTYServiceParametersDto["LOYALTYServiceParametersDto"]
    class ZeroPromoServiceParametersDto["ZeroPromoServiceParametersDto"]
    class Account_Types_Account_management_structures_Contract_Snapsho["Account Types :Account management structures - Contract Snapshot"]
    class SMSNotificationServiceParametersDto["SMSNotificationServiceParametersDto"]
    class GracePeriodServiceParametersDto["GracePeriodServiceParametersDto"]
    class ServiceParametersDto["ServiceParametersDto"]
    ServiceParametersDto <|-- GracePeriodServiceParametersDto : unnamed
    ServiceParametersDto <|-- SMSNotificationServiceParametersDto : unnamed
    ServiceParametersDto <|-- ZeroPromoServiceParametersDto : unnamed
    ServiceParametersDto <|-- LOYALTYServiceParametersDto : unnamed
```

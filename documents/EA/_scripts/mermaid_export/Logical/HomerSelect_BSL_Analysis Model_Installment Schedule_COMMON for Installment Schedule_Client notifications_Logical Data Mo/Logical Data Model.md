# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/Logical Data Model
- **Diagram ID**: 113518
- **Elements**: 17
- **Connectors**: 16

```mermaid
classDiagram
    class ADD_CELRewardSuccessSE["{ADD}CELRewardSuccessSE"]
    class IncomingPaymentPairingNotificationSE["IncomingPaymentPairingNotificationSE"]
    class Priority_Type["Priority Type"]
    class Report_Level["Report Level"]
    class Report_Content_Type["Report Content Type"]
    class SMS_Template_Body_Parameter_Type["SMS Template Body Parameter Type"]
    class SMS_Template_Body_Parameter["SMS Template Body Parameter"]
    class SMS_Type["SMS Type"]
    class Notification_Message_Definition_Type["Notification Message Definition Type"]
    class Variant_Type["Variant Type"]
    class Notification_Type["Notification Type"]
    class IncomingPaymentSystemEvent["IncomingPaymentSystemEvent"]
    class Notification_Message_Template["Notification Message Template"]
    class Notification_Message_Definition["Notification Message Definition"]
    class ADD_CELRewardMissedSE["{ADD}CELRewardMissedSE"]
    class SystemEvent["SystemEvent"]
    class SMS_Template["SMS Template"]
    IncomingPaymentSystemEvent <|-- IncomingPaymentPairingNotificationSE : unnamed
    SMS_Type ..> Report_Level : unnamed
    SMS_Type ..> Report_Content_Type : unnamed
    SMS_Template_Body_Parameter ..> SMS_Template_Body_Parameter_Type : unnamed
    Notification_Message_Definition_Type <|-- SMS_Type : unnamed
    Notification_Message_Definition --> Notification_Message_Definition_Type : unnamed
    SMS_Type ..> Priority_Type : unnamed
    Notification_Message_Definition ..> Notification_Type : unnamed
    SMS_Template o-- SMS_Template_Body_Parameter : unnamed
    Notification_Message_Template <|-- SMS_Template : unnamed
    Notification_Message_Definition --> Notification_Message_Template : unnamed
    Notification_Message_Definition --> SystemEvent : unnamed
    SystemEvent <|-- IncomingPaymentSystemEvent : unnamed
    Notification_Message_Definition ..> Variant_Type : unnamed
    SystemEvent <|-- ADD_CELRewardSuccessSE : unnamed
    SystemEvent <|-- ADD_CELRewardMissedSE : unnamed
```

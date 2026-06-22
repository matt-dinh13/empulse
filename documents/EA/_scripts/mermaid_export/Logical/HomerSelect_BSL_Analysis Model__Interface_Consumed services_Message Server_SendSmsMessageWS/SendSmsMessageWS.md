# SendSmsMessageWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendSmsMessageWS
- **Diagram ID**: 98433
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class ReportContentType["ReportContentType"]
    class ReportLevel["ReportLevel"]
    class recipient["recipient"]
    class SmsRecipientType["SmsRecipientType"]
    class PriorityType["PriorityType"]
    class attribute["attribute"]
    class BusinessAttributeType["BusinessAttributeType"]
    class AbstractMessageType["AbstractMessageType"]
    class SmsMessageType["SmsMessageType"]
    class SendSmsMessagesResponse["SendSmsMessagesResponse"]
    class SendSmsMessagesRequest["SendSmsMessagesRequest"]
    class SendSmsMessageWS["SendSmsMessageWS"]
    SendSmsMessageWS ..> SendSmsMessagesRequest : unnamed
    SendSmsMessageWS ..> SendSmsMessagesResponse : unnamed
    SendSmsMessagesRequest ..> SmsMessageType : unnamed
    AbstractMessageType <|-- SmsMessageType : unnamed
    AbstractMessageType ..> BusinessAttributeType : unnamed
    BusinessAttributeType ..> attribute : unnamed
    AbstractMessageType ..> PriorityType : unnamed
    SmsRecipientType <|-- recipient : unnamed
    SmsMessageType ..> recipient : unnamed
    AbstractMessageType ..> ReportLevel : unnamed
    AbstractMessageType ..> ReportContentType : unnamed
```

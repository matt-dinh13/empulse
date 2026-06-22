# SendEmailMessageWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendEmailMessageWS
- **Diagram ID**: 92048
- **Elements**: 14
- **Connectors**: 14

```mermaid
classDiagram
    class SimpleEmailMessageType["SimpleEmailMessageType"]
    class EmailMessageType["EmailMessageType"]
    class PrioritizableMessageType["PrioritizableMessageType"]
    class AbstractMessageType["AbstractMessageType"]
    class BusinessAttributeType["BusinessAttributeType"]
    class BusinessAttributeTypeType["BusinessAttributeTypeType"]
    class PriorityType["PriorityType"]
    class HtmlTextType["HtmlTextType"]
    class InlineAttachmentType["InlineAttachmentType"]
    class AbstractAttachmentType["AbstractAttachmentType"]
    class CabinetAttachmentType["CabinetAttachmentType"]
    class SendEmailMessagesResponse["SendEmailMessagesResponse"]
    class SendEmailMessagesRequest["SendEmailMessagesRequest"]
    class SendEmailMessageWS["SendEmailMessageWS"]
    SendEmailMessageWS ..> SendEmailMessagesRequest : unnamed
    SendEmailMessageWS ..> SendEmailMessagesResponse : unnamed
    SimpleEmailMessageType ..> CabinetAttachmentType : unnamed
    AbstractAttachmentType <|-- InlineAttachmentType : unnamed
    AbstractAttachmentType <|-- CabinetAttachmentType : unnamed
    SimpleEmailMessageType ..> InlineAttachmentType : unnamed
    SimpleEmailMessageType ..> HtmlTextType : unnamed
    PrioritizableMessageType ..> PriorityType : unnamed
    BusinessAttributeType ..> BusinessAttributeTypeType : unnamed
    AbstractMessageType ..> BusinessAttributeType : unnamed
    AbstractMessageType <|-- PrioritizableMessageType : unnamed
    PrioritizableMessageType <|-- EmailMessageType : unnamed
    EmailMessageType <|-- SimpleEmailMessageType : unnamed
    SendEmailMessagesRequest ..> SimpleEmailMessageType : unnamed
```

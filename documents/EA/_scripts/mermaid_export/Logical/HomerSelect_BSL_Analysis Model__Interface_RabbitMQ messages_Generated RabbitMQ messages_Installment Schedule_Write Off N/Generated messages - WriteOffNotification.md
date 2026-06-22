# Generated messages - WriteOffNotification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Write Off Notification
- **Diagram ID**: 152192
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class Process_ContractWrittenOff_event_notification["Process ContractWrittenOff event notification"]
    class ADD_WriteOffTypeDto["{ADD}WriteOffTypeDto"]
    class InstallmentDto["InstallmentDto"]
    class InstallmentPartDto["InstallmentPartDto"]
    class ADD_WriteOffNotificationDto["{ADD}WriteOffNotificationDto"]
    class MessageBaseTypeDto["MessageBaseTypeDto"]
    Process_ContractWrittenOff_event_notification ..> ADD_WriteOffNotificationDto : unnamed
    unnamed --> ADD_WriteOffNotificationDto : unnamed
    InstallmentDto ..> InstallmentPartDto : unnamed
    MessageBaseTypeDto <|-- ADD_WriteOffNotificationDto : unnamed
    ADD_WriteOffNotificationDto ..> ADD_WriteOffTypeDto : unnamed
    ADD_WriteOffNotificationDto ..> InstallmentDto : unnamed
```

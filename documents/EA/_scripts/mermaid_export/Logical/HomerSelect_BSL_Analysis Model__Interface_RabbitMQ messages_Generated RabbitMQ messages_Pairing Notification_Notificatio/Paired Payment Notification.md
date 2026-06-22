# Paired Payment Notification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Pairing Notification/Notifications
- **Diagram ID**: 163444
- **Elements**: 4
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_PairedPaymentNotificationEventTypeDto["{ADD}PairedPaymentNotificationEventTypeDto"]
    class PairedPaymentNotification["PairedPaymentNotification"]
    class MoneyDto["MoneyDto"]
    PairedPaymentNotification ..> MoneyDto : unnamed
    PairedPaymentNotification ..> MoneyDto : unnamed
    PairedPaymentNotification ..> MoneyDto : unnamed
    unnamed --> PairedPaymentNotification : unnamed
    PairedPaymentNotification ..> ADD_PairedPaymentNotificationEventTypeDto : unnamed
```

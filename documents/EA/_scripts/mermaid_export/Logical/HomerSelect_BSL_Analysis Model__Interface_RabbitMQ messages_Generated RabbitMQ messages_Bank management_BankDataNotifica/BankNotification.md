# BankNotification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Bank management/BankDataNotification
- **Diagram ID**: 107993
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class BankDataStatusDto["BankDataStatusDto"]
    class BankDataDto["BankDataDto"]
    class BankDataNotification["BankDataNotification"]
    BankDataNotification ..> BankDataDto : unnamed
    BankDataDto ..> BankDataStatusDto : unnamed
```

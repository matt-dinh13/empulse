# Debt Purchase Notification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Consumed/RabbitMQ/Zeebe/Debt Purchase Notification
- **Diagram ID**: 164653
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class AdditionalInfo["AdditionalInfo"]
    class DebtPurchaseStatus["DebtPurchaseStatus"]
    class ADD_Process_DebtPurchaseNotification["{ADD}Process DebtPurchaseNotification"]
    DebtPurchaseStatus ..> AdditionalInfo : unnamed
```

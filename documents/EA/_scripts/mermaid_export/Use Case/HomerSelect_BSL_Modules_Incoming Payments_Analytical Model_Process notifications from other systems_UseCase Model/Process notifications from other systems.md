# Process notifications from other systems

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process notifications from other systems/UseCase Model
- **Diagram ID**: 142936
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph LR
    unnamed["unnamed"]
    n_05_195_Process_RefundInfoMessage_notification(("05.195 Process RefundInfoMessage notification"))
    Create_incoming_payment_rule["Create incoming payment rule"]
    n_05_194_Process_ArtificialIncomingPaymentRequest_notificati(("05.194 Process ArtificialIncomingPaymentRequest notification"))
    System[/"System"/]
    n_05_193_Process_ContracFullInfoRequest_notification(("05.193 Process ContracFullInfoRequest notification"))
    n_05_194_Process_ArtificialIncomingPaymentRequest_notificati -->|unnamed| Create_incoming_payment_rule
    unnamed -->|unnamed| n_05_195_Process_RefundInfoMessage_notification
    System --> n_05_195_Process_RefundInfoMessage_notification
    System --> n_05_193_Process_ContracFullInfoRequest_notification
    System --> n_05_194_Process_ArtificialIncomingPaymentRequest_notificati
```

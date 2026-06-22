# Processing incoming payments message

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process incoming payment message/UseCase Model
- **Diagram ID**: 143091
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph LR
    JMS_messages_Incoming_Payments_Processing_JMS_messages["JMS messages : Incoming Payments Processing - JMS messages"]
    System[/"System"/]
    unnamed["unnamed"]
    TODO_05_400_Process_incoming_payment_message(("TODO 05.400 Process incoming payment message"))
    JMS_messages_Incoming_Payments_Processing_JMS_messages -->|unnamed| unnamed
    TODO_05_400_Process_incoming_payment_message -->|unnamed| unnamed
    JMS_messages_Incoming_Payments_Processing_JMS_messages -->|unnamed| System
    System --> TODO_05_400_Process_incoming_payment_message
```

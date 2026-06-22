# 07b Decouple payment (Asynchronous)

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Interaction Diagrams
- **Diagram ID**: 162673
- **Elements**: 12
- **Connectors**: 21

```mermaid
sequenceDiagram
    participant INCPAY_Module as INCPAY Module
    participant BSL as BSL
    participant OSB as OSB
    participant Account_Management as Account Management
    participant User as User
    participant Notifier as Notifier
    INCPAY_Module->>+INCPAY_Module: create new Active-Unpaired payment
    BSL->>+INCPAY_Module: Sequence
    BSL->>+OSB: ArtificialIncomingPaymentRequestJMS (cancel)
    Account_Management->>+INCPAY_Module: cancellation result via AMQP
    INCPAY_Module->>+BSL: IncomingPaymentModuleWS. cancelPayment
    BSL->>+OSB: ReversalPaymentNotification
    INCPAY_Module->>+INCPAY_Module: store DECOUPLE request
    BSL->>+INCPAY_Module: Sequence
    OSB->>+INCPAY_Module: ArtificialIncomingPaymentRequestJMS (cancel)
    User->>+INCPAY_Module: 05.060 Decouple payment
    INCPAY_Module->>+INCPAY_Module: cancel original payment locally
    INCPAY_Module->>+INCPAY_Module: create new Active-Unpaired payment
    INCPAY_Module->>+INCPAY_Module: cancelPaymentLocally (artificial payment)
    INCPAY_Module->>+User: Sequence
    INCPAY_Module->>+INCPAY_Module: finalize DECOUPLE request
    OSB->>+Notifier: Sequence
    INCPAY_Module->>+Account_Management: cancelRELPayment via AMQP
    INCPAY_Module->>+BSL: IncomingPaymentModuleWS. validatePaymentBeforeDecouple
    INCPAY_Module->>+INCPAY_Module: cancelPaymentLocally
    BSL->>+BSL: cancel payment
    INCPAY_Module->>+INCPAY_Module: finalize DECOUPLE request
```

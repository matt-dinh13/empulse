# 07a Decouple payment (Synchronous)

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Interaction Diagrams
- **Diagram ID**: 162668
- **Elements**: 12
- **Connectors**: 17

```mermaid
sequenceDiagram
    participant BSL as BSL
    participant OSB as OSB
    participant INCPAY_Module as INCPAY Module
    participant User as User
    participant Account_Management as Account Management
    participant Notifier as Notifier
    BSL->>+OSB: ReversalPaymentNotification
    BSL->>+INCPAY_Module: Sequence
    User->>+INCPAY_Module: 05.060 Decouple payment
    INCPAY_Module->>+INCPAY_Module: cancelPaymentLocally (artificial payment)
    INCPAY_Module->>+BSL: IncomingPaymentModuleWS. validatePaymentBeforeDecouple
    BSL->>+INCPAY_Module: Sequence
    Account_Management->>+INCPAY_Module: result
    OSB->>+INCPAY_Module: ArtificialIncomingPaymentRequestJMS (cancel)
    INCPAY_Module->>+INCPAY_Module: cancelPaymentLocally
    INCPAY_Module->>+Account_Management: AccountTransactionWS.unpairPayment
    INCPAY_Module->>+BSL: IncomingPaymentModuleWS. cancelPayment
    INCPAY_Module->>+INCPAY_Module: cancelPaymentLocally
    INCPAY_Module->>+INCPAY_Module: create new unpaired payment record
    BSL->>+BSL: cancel payment
    BSL->>+OSB: ArtificialIncomingPaymentRequestJMS (cancel)
    OSB->>+Notifier: Sequence
    INCPAY_Module->>+User: Sequence
```

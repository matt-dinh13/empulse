# 08 Creation of artificial payments

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Interaction Diagrams
- **Diagram ID**: 162669
- **Elements**: 6
- **Connectors**: 6

```mermaid
sequenceDiagram
    participant BSL as BSL
    participant OSB as OSB
    participant INCPAY_Module as INCPAY Module
    participant Time as Time
    BSL->>+BSL: Create/cancel artificial payment
    OSB->>+INCPAY_Module: ArtificalIncomingPaymentRequestJMS
    INCPAY_Module->>+INCPAY_Module: create payment
    Time->>+BSL: Action leading to creation of an artificial payment
    INCPAY_Module->>+INCPAY_Module: cancel payment
    BSL->>+OSB: ArtificialIncomingPaymentRequestJMS
```

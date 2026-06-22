# Settlements of incoming payment file structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided File Structures/Settlements of incoming payment file structure
- **Diagram ID**: 81661
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class UseCase_Model_Settlement_of_incoming_payments_from_file["UseCase Model : Settlement of incoming payments from file"]
    class ProcessedPaymentPickedUpOnPosResultType["ProcessedPaymentPickedUpOnPosResultType"]
    class ProcessedPaymentPickedUpOnPos["ProcessedPaymentPickedUpOnPos"]
    class SettlementsOfIncomingPaymentResultFile["SettlementsOfIncomingPaymentResultFile"]
    class PaymentPickedUpOnPos["PaymentPickedUpOnPos"]
    class SettlementsOfIncomingPaymentDataFile["SettlementsOfIncomingPaymentDataFile"]
    ProcessedPaymentPickedUpOnPos ..> ProcessedPaymentPickedUpOnPosResultType : unnamed
    SettlementsOfIncomingPaymentResultFile ..> ProcessedPaymentPickedUpOnPos : unnamed
    SettlementsOfIncomingPaymentDataFile ..> PaymentPickedUpOnPos : unnamed
```

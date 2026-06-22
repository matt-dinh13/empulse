# Generated JMS messages - Incoming payments pairing

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments
- **Diagram ID**: 97710
- **Elements**: 11
- **Connectors**: 9

```mermaid
classDiagram
    class InstallmentPartTypeDto["InstallmentPartTypeDto"]
    class InstallmentScheduleInfoRequest["InstallmentScheduleInfoRequest"]
    class External_Reference["External Reference"]
    class PaymentTypeDto["PaymentTypeDto"]
    class IncomingPaymentSourceSystemDto["IncomingPaymentSourceSystemDto"]
    class MoneyDto["MoneyDto"]
    class PairedInstallmentPartDto["PairedInstallmentPartDto"]
    class PaymentPairingInfoDto["PaymentPairingInfoDto"]
    class PaymentPairingOperationTypeDto["PaymentPairingOperationTypeDto"]
    class UseCase_Model_Processing_incoming_payments_from_a_banking_sy["UseCase Model : Processing incoming payments from a banking system"]
    unnamed --> PaymentPairingInfoDto : unnamed
    PairedInstallmentPartDto ..> MoneyDto : unnamed
    PaymentPairingInfoDto ..> PairedInstallmentPartDto : unnamed
    PaymentPairingInfoDto ..> IncomingPaymentSourceSystemDto : unnamed
    PaymentPairingInfoDto ..> PaymentTypeDto : unnamed
    PaymentPairingInfoDto ..> PaymentPairingOperationTypeDto : unnamed
    PaymentPairingInfoDto --> UseCase_Model_Processing_incoming_payments_from_a_banking_sy : unnamed
    InstallmentScheduleInfoRequest ..> PaymentPairingInfoDto : unnamed
    InstallmentScheduleInfoRequest ..> External_Reference : unnamed
```

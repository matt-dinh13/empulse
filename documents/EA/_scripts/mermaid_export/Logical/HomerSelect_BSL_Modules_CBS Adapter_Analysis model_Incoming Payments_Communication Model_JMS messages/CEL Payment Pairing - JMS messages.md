# CEL Payment Pairing - JMS messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/JMS messages
- **Diagram ID**: 72424
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class IncomingPaymentSourceSystemDto["IncomingPaymentSourceSystemDto"]
    class Legend["Legend"]
    class PaymentPairingOperationTypeDto["PaymentPairingOperationTypeDto"]
    class PairedInstallmentPartDto["PairedInstallmentPartDto"]
    class PaymentPairingInfoDto["PaymentPairingInfoDto"]
    PaymentPairingInfoDto ..> PairedInstallmentPartDto : unnamed
    PaymentPairingInfoDto ..> PaymentPairingOperationTypeDto : unnamed
    PaymentPairingInfoDto ..> IncomingPaymentSourceSystemDto : unnamed
```

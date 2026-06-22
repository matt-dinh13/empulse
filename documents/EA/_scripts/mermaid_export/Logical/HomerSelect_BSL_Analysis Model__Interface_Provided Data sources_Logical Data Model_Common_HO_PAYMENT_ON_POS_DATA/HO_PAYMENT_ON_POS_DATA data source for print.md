# HO_PAYMENT_ON_POS_DATA data source for print

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ON_POS_DATA
- **Diagram ID**: 78326
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class UseCase_Model_Manage_incoming_payment_on_POS["UseCase Model : Manage incoming payment on POS"]
    class PaymentOnPosSettlementDto["PaymentOnPosSettlementDto"]
    class PaymentOnPosData["PaymentOnPosData"]
    PaymentOnPosData ..> PaymentOnPosSettlementDto : unnamed
```

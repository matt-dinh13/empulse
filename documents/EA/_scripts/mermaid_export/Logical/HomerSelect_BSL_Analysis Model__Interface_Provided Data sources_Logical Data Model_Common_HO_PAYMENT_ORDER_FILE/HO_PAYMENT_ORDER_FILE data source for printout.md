# HO_PAYMENT_ORDER_FILE data source for printout

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ORDER_FILE
- **Diagram ID**: 78329
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class PaymentOnPosSettlementDto["PaymentOnPosSettlementDto"]
    class paymentOrderFile["paymentOrderFile"]
    class MOD_NameType["{MOD}NameType"]
    class MoneyType["MoneyType"]
    class PaidContractType["PaidContractType"]
    class PaymentOrderType["PaymentOrderType"]
    class DocumentData["DocumentData"]
    PaidContractType ..> MOD_NameType : unnamed
    PaymentOrderType ..> PaidContractType : unnamed
    DocumentData <|-- paymentOrderFile : unnamed
    DocumentData ..> PaymentOrderType : unnamed
    PaymentOrderType ..> PaymentOnPosSettlementDto : unnamed
    PaymentOrderType ..> MoneyType : unnamed
```

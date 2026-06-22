# Outgoing Payment JMS structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure
- **Diagram ID**: 134520
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class ContractInfoPaymentSubvItem["ContractInfoPaymentSubvItem"]
    class ContractInfo["ContractInfo"]
    class PaymentOrderDetail["PaymentOrderDetail"]
    class OutgoingPaymentOrder["OutgoingPaymentOrder"]
    class OutgoingPaymentsFile["OutgoingPaymentsFile"]
    class RefundOrderType["RefundOrderType"]
    class PaymentOnPosSettlementDto["PaymentOnPosSettlementDto"]
    class ClientNameType["ClientNameType"]
    class ContractInfoPaymentItem["ContractInfoPaymentItem"]
    class ClientIdentDocumentType["ClientIdentDocumentType"]
    ContractInfoPaymentItem ..> ContractInfoPaymentSubvItem : unnamed
    ContractInfo ..> ClientIdentDocumentType : unnamed
    RefundOrderType ..> ClientIdentDocumentType : unnamed
    ContractInfo ..> ContractInfoPaymentItem : unnamed
    ContractInfo ..> ClientNameType : unnamed
    PaymentOrderDetail ..> PaymentOnPosSettlementDto : unnamed
    ContractInfo ..> RefundOrderType : unnamed
    OutgoingPaymentsFile ..> OutgoingPaymentOrder : unnamed
    OutgoingPaymentOrder ..> PaymentOrderDetail : unnamed
    PaymentOrderDetail ..> ContractInfo : unnamed
```

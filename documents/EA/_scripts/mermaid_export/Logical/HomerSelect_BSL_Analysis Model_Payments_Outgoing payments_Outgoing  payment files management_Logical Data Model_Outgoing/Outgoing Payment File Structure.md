# Outgoing Payment File Structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure
- **Diagram ID**: 123893
- **Elements**: 9
- **Connectors**: 9

```mermaid
classDiagram
    class PaymentOnPosSettlementDto["PaymentOnPosSettlementDto"]
    class RefundOrderType["RefundOrderType"]
    class ClientIdentDocumentType["ClientIdentDocumentType"]
    class ClientNameType["ClientNameType"]
    class ContractInfoPaymentItem["ContractInfoPaymentItem"]
    class PaymentOrderDetail["PaymentOrderDetail"]
    class ContractInfo["ContractInfo"]
    class OutgoingPaymentOrder["OutgoingPaymentOrder"]
    class OutgoingPaymentsFile["OutgoingPaymentsFile"]
    OutgoingPaymentsFile ..> OutgoingPaymentOrder : unnamed
    PaymentOrderDetail ..> ContractInfo : unnamed
    OutgoingPaymentOrder ..> PaymentOrderDetail : unnamed
    ContractInfo ..> ContractInfoPaymentItem : unnamed
    ContractInfo ..> ClientNameType : unnamed
    RefundOrderType ..> ClientIdentDocumentType : unnamed
    ContractInfo ..> ClientIdentDocumentType : unnamed
    ContractInfo ..> RefundOrderType : unnamed
    PaymentOrderDetail ..> PaymentOnPosSettlementDto : unnamed
```

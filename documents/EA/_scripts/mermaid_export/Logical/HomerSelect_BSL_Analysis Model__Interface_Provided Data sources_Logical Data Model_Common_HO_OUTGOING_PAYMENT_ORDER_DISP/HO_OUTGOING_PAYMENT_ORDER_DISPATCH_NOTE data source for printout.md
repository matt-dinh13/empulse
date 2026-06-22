# HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE data source for printout

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE
- **Diagram ID**: 138310
- **Elements**: 14
- **Connectors**: 16

```mermaid
classDiagram
    class PaymentOnPosSettlementDto["PaymentOnPosSettlementDto"]
    class PaidContractDocuments["PaidContractDocuments"]
    class PaidContractItemsType["PaidContractItemsType"]
    class PaidContractsType["PaidContractsType"]
    class MoneyType["MoneyType"]
    class MOD_NameType["{MOD}NameType"]
    class AddressType["AddressType"]
    class PaidContractDocument["PaidContractDocument"]
    class PaidContractItemType["PaidContractItemType"]
    class MOD_PaidContractType["{MOD}PaidContractType"]
    class MOD_DocumentData["{MOD}DocumentData"]
    class PaidContractChannel_SBA["PaidContractChannel_SBA"]
    class outgoingPaymentsOrderDispatchNote["outgoingPaymentsOrderDispatchNote"]
    class PaidContractChannel_PBA["PaidContractChannel_PBA"]
    PaidContractChannel_PBA ..> MOD_NameType : unnamed
    PaidContractChannel_PBA ..> PaidContractDocuments : unnamed
    MOD_PaidContractType ..> PaidContractItemsType : unnamed
    MOD_DocumentData ..> PaidContractsType : unnamed
    MOD_DocumentData ..> MoneyType : unnamed
    PaidContractChannel_SBA ..> MoneyType : unnamed
    MOD_DocumentData ..> PaymentOnPosSettlementDto : unnamed
    MOD_PaidContractType ..> MOD_NameType : unnamed
    MOD_DocumentData <|-- outgoingPaymentsOrderDispatchNote : unnamed
    PaidContractChannel_PBA ..> AddressType : unnamed
    PaidContractDocuments ..> PaidContractDocument : unnamed
    PaidContractItemsType ..> PaidContractItemType : unnamed
    MOD_PaidContractType <|-- PaidContractChannel_PBA : unnamed
    MOD_PaidContractType <|-- PaidContractChannel_SBA : unnamed
    PaidContractsType ..> MOD_PaidContractType : unnamed
    MOD_PaidContractType ..> MoneyType : unnamed
```

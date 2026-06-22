# REL Account Transactions - JMS messages

```mermaid
classDiagram
    class AllocationTypeDto["AllocationTypeDto"]
    class AccountingEntryType["AccountingEntryType"]
    class CancellationReasonDto["CancellationReasonDto"]
    class Types_Types_AttributeDto["Types : Types - AttributeDto"]
    class AttributesDto["AttributesDto"]
    class ReconciliationTypeDto["ReconciliationTypeDto"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class Legend["Legend"]
    class TransactionDirectionDto["TransactionDirectionDto"]
    class BillingSystemType["BillingSystemType"]
    class TransactionReconciliationDto["TransactionReconciliationDto"]
    class TransactionMessageDto["TransactionMessageDto"]
    TransactionReconciliationDto --> ReconciliationTypeDto : unnamed
    AttributesDto --> Types_Types_AttributeDto : unnamed
    TransactionMessageDto --> BillingSystemType : unnamed
    TransactionMessageDto --> AccountingEntryType : unnamed
    TransactionMessageDto --> AttributesDto : unnamed
    TransactionMessageDto --> TransactionReconciliationDto : unnamed
    TransactionMessageDto --> AllocationTypeDto : unnamed
    TransactionMessageDto --> CancellationReasonDto : unnamed
    TransactionMessageDto --> TransactionSourceIdDto : unnamed
    TransactionMessageDto --> TransactionSourceIdDto : unnamed
    TransactionMessageDto --> TransactionDirectionDto : unnamed
```

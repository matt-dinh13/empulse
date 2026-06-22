# REL Installment schedule - JMS messages

```mermaid
classDiagram
    class AllocationTypeDto["AllocationTypeDto"]
    class BillingSystemType["BillingSystemType"]
    class AccountTypeDto["AccountTypeDto"]
    class ReconciliationTypeDto["ReconciliationTypeDto"]
    class InstalmentTypeDto["InstalmentTypeDto"]
    class InstalmentMessageDto["InstalmentMessageDto"]
    class Legend["Legend"]
    class ModelGroup1["ModelGroup1"]
    class MessageEnvelopeDto["MessageEnvelopeDto"]
    InstalmentMessageDto --> AllocationTypeDto : unnamed
    MessageEnvelopeDto --> ModelGroup1 : unnamed
    ModelGroup1 --> InstalmentMessageDto : unnamed
    InstalmentMessageDto --> InstalmentTypeDto : unnamed
    InstalmentMessageDto --> ReconciliationTypeDto : unnamed
    InstalmentMessageDto --> AccountTypeDto : unnamed
    InstalmentMessageDto --> BillingSystemType : unnamed
```

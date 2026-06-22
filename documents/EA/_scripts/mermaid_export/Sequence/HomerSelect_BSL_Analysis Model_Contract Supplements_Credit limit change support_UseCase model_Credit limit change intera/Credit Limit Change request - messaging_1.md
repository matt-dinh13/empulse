# Credit Limit Change request - messaging

```mermaid
sequenceDiagram
    participant CreditLimitChange_processor as CreditLimitChange processor
    participant AM as AM
    participant Message_bus_KAFKA as Message bus (KAFKA)
    participant PST as PST
    participant Message_bus_RMQ as Message bus (RMQ)
    participant ContractSupplement as ContractSupplement
    participant OfferStore as OfferStore
    participant LAP as LAP
    participant SupplementDefinition as SupplementDefinition
    CreditLimitChange_processor->>AM: AccountManagementWS
    Message_bus_KAFKA->>PST: Sequence
    CreditLimitChange_processor->>Message_bus_KAFKA: CreditLimitChangeRejected
    CreditLimitChange_processor->>CreditLimitChange_processor: ResponseEvaluation
    Message_bus_RMQ->>CreditLimitChange_processor: ApprovalResponse
    CreditLimitChange_processor->>ContractSupplement: CreditLimitChangeRequest
    CreditLimitChange_processor->>CreditLimitChange_processor: DataValidation
    CreditLimitChange_processor->>ContractSupplement: CreditLimitChangeRequest
    Message_bus_KAFKA->>OfferStore: Sequence
    OfferStore->>Message_bus_KAFKA: CreditLimitChangeRequest
    Message_bus_RMQ->>CreditLimitChange_processor: CreditLimitChangeRequest
    Message_bus_KAFKA->>OfferStore: Sequence
    Message_bus_KAFKA->>PST: Sequence
    CreditLimitChange_processor->>Message_bus_KAFKA: CreditLimitChangeRejected
    Message_bus_RMQ->>LAP: Sequence
    CreditLimitChange_processor->>SupplementDefinition: GetProcessDefinition
    CreditLimitChange_processor->>Message_bus_KAFKA: CreditLimitChangeAccepted
    CreditLimitChange_processor->>ContractSupplement: CreditLimitChangeRequest
    AM->>Message_bus_RMQ: CreditLimitChangeRequest
    LAP->>Message_bus_RMQ: Sequence
    CreditLimitChange_processor->>Message_bus_RMQ: ApprovalRequest
    Message_bus_KAFKA->>CreditLimitChange_processor: CreditLimitChangeRequest
    Message_bus_KAFKA->>OfferStore: Sequence
    CreditLimitChange_processor->>CreditLimitChange_processor: RequestApprovalEvaluation
```

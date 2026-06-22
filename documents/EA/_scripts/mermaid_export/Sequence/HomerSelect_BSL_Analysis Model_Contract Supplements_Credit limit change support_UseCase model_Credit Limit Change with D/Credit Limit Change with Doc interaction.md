# Credit Limit Change with Doc interaction

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model/Credit Limit Change with Doc interaction
- **Diagram ID**: 162550
- **Elements**: 16
- **Connectors**: 37

```mermaid
sequenceDiagram
    participant CreditLimitChange_processor as CreditLimitChange processor
    participant ContractSupplement as ContractSupplement
    participant Message_bus_KAFKA as Message bus (KAFKA)
    participant PST as PST
    participant AM as AM
    participant Message_bus_RMQ as Message bus (RMQ)
    participant OfferStore as OfferStore
    participant SupplementDefinition as SupplementDefinition
    participant CSI_queue as CSI queue
    participant LAP as LAP
    participant External_system as External system
    CreditLimitChange_processor->>+ContractSupplement: CreditLimitChangeRequest
    Message_bus_KAFKA->>+PST: Sequence
    AM->>+Message_bus_RMQ: CreditLimitChangeRequest
    CreditLimitChange_processor->>+CreditLimitChange_processor: AcceptationResponse Evaluation
    CreditLimitChange_processor->>+CreditLimitChange_processor: DataValidation
    OfferStore->>+Message_bus_KAFKA: CreditLimitChangeRequest
    CreditLimitChange_processor->>+SupplementDefinition: GetProcessDefinition
    Message_bus_RMQ->>+CSI_queue: ApprovalResponse
    CSI_queue->>+CreditLimitChange_processor: Sequence
    Message_bus_RMQ->>+LAP: Sequence
    CreditLimitChange_processor->>+CreditLimitChange_processor: Generate Documents
    CreditLimitChange_processor->>+Message_bus_KAFKA: CreditLimitChangeRejected
    CreditLimitChange_processor->>+Message_bus_KAFKA: CreditLimitChangeAccepted
    CreditLimitChange_processor->>+ContractSupplement: CreditLimitChangeRequest
    Message_bus_RMQ->>+CSI_queue: CreditLimitChangeRequest
    CreditLimitChange_processor->>+CreditLimitChange_processor: Check Documents
    CreditLimitChange_processor->>+Message_bus_RMQ: ApprovalRequest
    Message_bus_KAFKA->>+CSI_queue: CreditLimitChangeRequest
    CreditLimitChange_processor->>+Message_bus_KAFKA: CreditLimitChangeRejected
    LAP->>+Message_bus_RMQ: Sequence
    CreditLimitChange_processor->>+ContractSupplement: CreditLimitChangeRequest
    CreditLimitChange_processor->>+ContractSupplement: CreditLimitChangeRequest
    CreditLimitChange_processor->>+CreditLimitChange_processor: RequestApprovalEvaluation
    CSI_queue->>+CreditLimitChange_processor: Sequence
    CreditLimitChange_processor->>+Message_bus_KAFKA: CreditLimitChangeRejected
    CreditLimitChange_processor->>+CreditLimitChange_processor: ResponseEvaluation
    Message_bus_KAFKA->>+PST: Sequence
    Message_bus_KAFKA->>+CreditLimitChange_processor: DocumentAcceptation
    CSI_queue->>+CreditLimitChange_processor: Sequence
    CreditLimitChange_processor->>+AM: AccountManagementWS
    Message_bus_KAFKA->>+OfferStore: Sequence
    Message_bus_KAFKA->>+OfferStore: Sequence
    CreditLimitChange_processor->>+SupplementDefinition: GetSupplementDefinition
    Message_bus_KAFKA->>+OfferStore: Sequence
    Message_bus_KAFKA->>+External_system: CreditLimitChangeDocumentPrepared
    CreditLimitChange_processor->>+Message_bus_KAFKA: CreditLimitChangeDocumentPrepared
    External_system->>+Message_bus_KAFKA: DocumentAcceptation
```

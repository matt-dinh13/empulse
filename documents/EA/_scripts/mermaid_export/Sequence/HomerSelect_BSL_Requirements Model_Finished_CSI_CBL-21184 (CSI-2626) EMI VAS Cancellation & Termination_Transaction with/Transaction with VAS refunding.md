# Transaction with VAS refunding

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination/Transaction with VAS refunding
- **Diagram ID**: 152757
- **Elements**: 11
- **Connectors**: 24

```mermaid
sequenceDiagram
    participant AM as AM
    participant CSI_ContractServices as CSI:
ContractServices
    participant Message_Bus_csi_contractservice as Message Bus
csi.contractservice
    participant SIR as SIR
    participant Message_Bus_am_direct_incoming_transaction_am_topic_transact as Message Bus
am.direct.incoming.transaction
am.topic.transaction.cancellation.reply
    participant CSI_TransactionSupplements as CSI:
TransactionSupplements
    participant External_System as External System
    participant Message_Bus_bsl_contract_supplement as Message Bus
bsl.contract-supplement
    AM->>+AM: CancelVasTransaction
    CSI_ContractServices->>+Message_Bus_csi_contractservice: ContractInsuranceServiceTerminated
    AM->>+AM: CancelTransaction
    CSI_ContractServices->>+SIR: Sequence
    SIR->>+CSI_ContractServices: TerminateContractInsuranceService
    Message_Bus_csi_contractservice->>+AM: Sequence
    Message_Bus_am_direct_incoming_transaction_am_topic_transact->>+AM: Sequence
    CSI_TransactionSupplements->>+Message_Bus_am_direct_incoming_transaction_am_topic_transact: CancelTransactionRequest
    AM->>+SIR: FERGranted
    External_System->>+AM: RequestFor FER
    Message_Bus_bsl_contract_supplement->>+SIR: Sequence
    SIR->>+CSI_ContractServices: GetContractService
    Message_Bus_am_direct_incoming_transaction_am_topic_transact->>+CSI_TransactionSupplements: CancelTransactionResult
    AM->>+AM: ProcessFerRequest
    SIR->>+SIR: Sequence
    CSI_ContractServices->>+CSI_ContractServices: Sequence
    CSI_TransactionSupplements->>+Message_Bus_bsl_contract_supplement: TransactionSupplementRefunded
    External_System->>+AM: PaidFerAmount
    SIR->>+SIR: EvaluateVasTerminationEligibility
    CSI_TransactionSupplements->>+CSI_TransactionSupplements: RefundTransactionSupplement
    External_System->>+CSI_TransactionSupplements: RefundTransactionSupplement
    AM->>+Message_Bus_am_direct_incoming_transaction_am_topic_transact: CancelTransactionResult
    CSI_TransactionSupplements->>+CSI_TransactionSupplements: Sequence
    AM->>+AM: CreateFerRequest
```

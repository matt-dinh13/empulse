# ACCOUNT_CREATION - Accept/Refuse document

```mermaid
sequenceDiagram
    participant External_System as External System
    participant ContractSupplement as ContractSupplement
    participant Time as Time
    participant RMQ_sup_contract_supplements as RMQ
sup.contract.supplements
    External_System->>ContractSupplement: contract-supplement/accept
    ContractSupplement->>ContractSupplement: ContractSupplementCancelledSE
    Time->>ContractSupplement: Timeout
    ContractSupplement->>ContractSupplement: Set ContractSupplement Status
    ContractSupplement->>RMQ_sup_contract_supplements: ContractSupplementSigned
    ContractSupplement->>ContractSupplement: Set ContractSupplement Status
    External_System->>ContractSupplement: contract-supplement/accept
    ContractSupplement->>RMQ_sup_contract_supplements: ContractSupplementCancelled
    ContractSupplement->>ContractSupplement: ContractSupplementSignedSE
    RMQ_sup_contract_supplements->>RMQ_sup_contract_supplements: Sequence
```

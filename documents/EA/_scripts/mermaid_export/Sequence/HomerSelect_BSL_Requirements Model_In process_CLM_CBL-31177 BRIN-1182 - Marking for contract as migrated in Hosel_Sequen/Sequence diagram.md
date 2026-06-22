# Sequence diagram

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-31177 BRIN-1182 - Marking for contract as migrated in Hosel/Sequence diagram
- **Diagram ID**: 164663
- **Elements**: 9
- **Connectors**: 16

```mermaid
sequenceDiagram
    participant Message_Broker_RMQ as Message Broker (RMQ)
    participant BSA as BSA
    participant AM as AM
    participant HOC_UI as HOC UI
    participant COMA as COMA
    participant Message_Broker_Kafka as Message Broker (Kafka)
    participant User as User
    participant BSL as BSL
    Message_Broker_RMQ->>+BSA: EvevntInfo/AccountClosed
    BSA->>+AM: account/migrate
    BSA->>+BSA: ValidateRequest
    HOC_UI->>+BSA: Sequence
    BSA->>+HOC_UI: ValidationResult
    COMA->>+Message_Broker_Kafka: coma.contract.event
    User->>+BSA: ExecuteBatch
    AM->>+Message_Broker_RMQ: Sequence
    BSL->>+BSL: Postprocessing
    AM->>+AM: AccountClosure
    BSA->>+COMA: contracts/migrate
    User->>+HOC_UI: UploadBatch
    COMA->>+COMA: ContractStatusChange
    Message_Broker_Kafka->>+BSL: Sequence
    BSL->>+Message_Broker_RMQ: clm.contract.event
    HOC_UI->>+User: Sequence
```

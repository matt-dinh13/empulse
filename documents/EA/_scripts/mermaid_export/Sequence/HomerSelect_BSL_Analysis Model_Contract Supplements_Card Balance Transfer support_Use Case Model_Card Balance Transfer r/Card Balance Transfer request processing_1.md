# Card Balance Transfer request processing

```mermaid
sequenceDiagram
    participant ContractSupplement as ContractSupplement
    participant DMS as DMS
    participant AM as AM
    participant RMQ_exchanges as RMQ exchanges
    participant DSM as DSM
    participant KAFKA_topic_csi_contract_supplements as KAFKA topic
csi.contract.supplements
    participant COMA as COMA
    participant Actor1 as Actor1
    participant PrintServer as PrintServer
    participant SQS as SQS
    ContractSupplement->>DMS: POSTdms/documents/
    AM->>RMQ_exchanges: Sequence
    DSM->>DSM: create data source
    DMS->>ContractSupplement: Sequence
    ContractSupplement->>ContractSupplement: create ContractSupplement
    ContractSupplement->>KAFKA_topic_csi_contract_supplements: CardBalanceTransferAcceptedEvent
    ContractSupplement->>COMA: POST coma/contracts/documents/
    ContractSupplement->>ContractSupplement: set ContractSupplement status
    ContractSupplement->>ContractSupplement: GET document type setting
    Actor1->>ContractSupplement: POST createCBT supplement
    PrintServer->>ContractSupplement: Sequence
    RMQ_exchanges->>AM: Sequence
    ContractSupplement->>DSM: POST dsm/data-source 
    ContractSupplement->>PrintServer: GenerateReportRequest
    ContractSupplement->>DMS: POST dms/document-files/
    SQS->>ContractSupplement: Sequence
    AM->>AM: process the request
    DMS->>ContractSupplement: Sequence
    DSM->>ContractSupplement: Sequence
    ContractSupplement->>KAFKA_topic_csi_contract_supplements: CardBalanceTransferApprovedEvent
    RMQ_exchanges->>ContractSupplement: Sequence
    COMA->>ContractSupplement: Sequence
    ContractSupplement->>SQS: GET salesQuote
    ContractSupplement->>RMQ_exchanges: csi.card-balance-to-IP.request
    ContractSupplement->>ContractSupplement: request validation
```

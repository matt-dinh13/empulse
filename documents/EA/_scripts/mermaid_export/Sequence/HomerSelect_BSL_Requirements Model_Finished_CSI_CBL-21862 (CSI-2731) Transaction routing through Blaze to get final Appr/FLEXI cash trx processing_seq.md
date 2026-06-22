# FLEXI cash trx processing_seq

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve/FLEXI cash trx processing_seq
- **Diagram ID**: 157682
- **Elements**: 16
- **Connectors**: 35

```mermaid
sequenceDiagram
    participant SIR as SIR
    participant External as External
    participant Contract_Supplement as Contract
Supplement
    participant BSL_Supplements as BSL Supplements
    participant ADS as ADS
    participant KAFKA_csi_contract_supplement as KAFKA.csi.contract-supplement
    participant AM as AM
    participant LAP_RMQ as LAP RMQ
    participant SQS as SQS
    participant RMQ_AM_EventInfo as RMQ AM EventInfo
    SIR->>+External: Sequence
    Contract_Supplement->>+Contract_Supplement: StatusUpdate
    Contract_Supplement->>+Contract_Supplement: ALOPRequestApprovedSE
    SIR->>+BSL_Supplements: GET supplements
    SIR->>+Contract_Supplement: POST transaction-supplements/reject
    SIR->>+ADS: GetApplicationData
    Contract_Supplement->>+Contract_Supplement: StatusUpdate
    SIR->>+Contract_Supplement: POST transaction-supplement/create
    Contract_Supplement->>+KAFKA_csi_contract_supplement: Sequence
    Contract_Supplement->>+Contract_Supplement: CheckSupplementDocuments
    SIR->>+SIR: Check Supplement for approval
    SIR->>+AM: GetAccount
    LAP_RMQ->>+SIR: ApprovalResponse
    Contract_Supplement->>+AM: AuthorizeTransactionWithOffer
    Contract_Supplement->>+KAFKA_csi_contract_supplement: Sequence
    Contract_Supplement->>+KAFKA_csi_contract_supplement: Sequence
    KAFKA_csi_contract_supplement->>+External: TransactionSupplementAccepted
    SIR->>+SQS: GetSalesQuotes
    SIR->>+Contract_Supplement: Add SalesQuote
    SIR->>+SIR: Validate Request
    SIR->>+Contract_Supplement: AddSalesQuote
    Contract_Supplement->>+KAFKA_csi_contract_supplement: Sequence
    KAFKA_csi_contract_supplement->>+External: TransactionSupplementAproved
    SIR->>+Contract_Supplement: GetTransactionSupplement
    SIR->>+SIR: Check Approval Response
    Contract_Supplement->>+SIR: Sequence
    SIR->>+Contract_Supplement: POST transaction-supplements/authorize
    SIR->>+LAP_RMQ: ApprovalRequest
    RMQ_AM_EventInfo->>+Contract_Supplement: AccountEvent
    KAFKA_csi_contract_supplement->>+External: TransactionSupplementRejected
    Contract_Supplement->>+Contract_Supplement: GetNewTransactions
    KAFKA_csi_contract_supplement->>+External: TransactionSupplementCancelled
    RMQ_AM_EventInfo->>+Contract_Supplement: AccountEvent
    SIR->>+SIR: Determine Loan Process Type
    External->>+SIR: POST ../service-interpreter/process-loan
```

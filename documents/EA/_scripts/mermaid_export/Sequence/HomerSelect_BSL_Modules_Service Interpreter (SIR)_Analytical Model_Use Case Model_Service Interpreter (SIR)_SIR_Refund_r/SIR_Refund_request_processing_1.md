# SIR_Refund_request_processing

```mermaid
sequenceDiagram
    participant Contract_Supplement as Contract Supplement
    participant RMQ as RMQ
    participant Account_Management as Account Management
    participant Contract_Service as Contract Service
    participant RMQ_contract_service as RMQ
contract-service
    participant SIR as SIR
    participant External_system as External system
    participant VAS_Deal as VAS-Deal
    participant KAFKA_contract_supplement as KAFKA
contract-supplement
    Contract_Supplement->>Contract_Supplement: Get Master Transaction
    RMQ->>Account_Management: Sequence
    Contract_Supplement->>Contract_Supplement: Create New Transaction
    Account_Management->>Account_Management: CancelTransaction
    RMQ->>Contract_Supplement: AM.ConfirmTransactionResponse
    Contract_Service->>RMQ_contract_service: Sequence
    Account_Management->>RMQ: Sequence
    Account_Management->>Account_Management: Cancel Transaction related to Service
    SIR->>Contract_Service: Cancel Contract Service
    SIR->>SIR: Evaluate Services to Cancel
    Contract_Supplement->>Contract_Supplement: TransactionSupplementChangedSE 
    External_system->>Contract_Supplement: PUT contractsupplement/refund
    Account_Management->>Account_Management: Create Confirmed Transaction
    VAS_Deal->>SIR: Sequence
    RMQ_contract_service->>Account_Management: ContractInsuranceServiceCancelled
    RMQ->>Account_Management: Sequence
    RMQ->>Contract_Supplement: AM.CancelTransactionResponse
    Contract_Supplement->>RMQ: AM.CancelTransactionRequest
    Contract_Supplement->>RMQ: AM.ConfirmTransactionRequiest
    Contract_Supplement->>KAFKA_contract_supplement: TransactionSupplementRefunded
    Contract_Service->>Contract_Service: Cancel
    SIR->>VAS_Deal: Get Deals
    SIR->>SIR: Check Deals for Commodity related to Transaction
    Contract_Supplement->>KAFKA_contract_supplement: TransactionSupplementChanged
    Contract_Supplement->>Contract_Supplement: Set Status = REFUNDED
    Account_Management->>RMQ: Sequence
    KAFKA_contract_supplement->>SIR: Sequence
```

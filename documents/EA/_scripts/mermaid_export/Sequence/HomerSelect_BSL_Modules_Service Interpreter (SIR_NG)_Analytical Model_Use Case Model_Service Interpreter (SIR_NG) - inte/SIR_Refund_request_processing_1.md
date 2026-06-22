# SIR_Refund_request_processing

```mermaid
sequenceDiagram
    participant Account_Management as Account Management
    participant RMQ as RMQ
    participant SIR as SIR
    participant KAFKA_contract_supplement as KAFKA
contract-supplement
    participant Contract_Supplement as Contract Supplement
    participant VAS_Deal as VAS-Deal
    participant Contract_Service as Contract Service
    participant RMQ_contract_service as RMQ
contract-service
    participant External_system as External system
    Account_Management->>RMQ: Sequence
    SIR->>SIR: Check Deals for Commodity related to Transaction
    KAFKA_contract_supplement->>SIR: Sequence
    RMQ->>Contract_Supplement: AM.ConfirmTransactionResponse
    SIR->>VAS_Deal: Get Deals
    Contract_Service->>RMQ_contract_service: Sequence
    RMQ->>Account_Management: Sequence
    Account_Management->>Account_Management: CancelTransaction
    RMQ->>Contract_Supplement: AM.CancelTransactionResponse
    Contract_Supplement->>Contract_Supplement: Create New Transaction
    Account_Management->>Account_Management: Cancel Transaction related to Service
    Account_Management->>Account_Management: Create Confirmed Transaction
    Contract_Supplement->>Contract_Supplement: TransactionSupplementChangedSE 
    Contract_Supplement->>KAFKA_contract_supplement: TransactionSupplementRefunded
    Contract_Supplement->>RMQ: AM.ConfirmTransactionRequiest
    RMQ->>Account_Management: Sequence
    Contract_Supplement->>Contract_Supplement: Get Master Transaction
    External_system->>Contract_Supplement: PUT contrac-supplement/refund
    Account_Management->>RMQ: Sequence
    SIR->>SIR: Evaluate Services to Cancel
    RMQ_contract_service->>Account_Management: ContractInsuranceServiceCancelled
    Contract_Supplement->>Contract_Supplement: Set Status = REFUNDED
    Contract_Supplement->>RMQ: AM.CancelTransactionRequest
    VAS_Deal->>SIR: Sequence
    Contract_Service->>Contract_Service: Cancel
    SIR->>Contract_Service: Cancel Contract Service
    Contract_Supplement->>KAFKA_contract_supplement: TransactionSupplementChanged
```

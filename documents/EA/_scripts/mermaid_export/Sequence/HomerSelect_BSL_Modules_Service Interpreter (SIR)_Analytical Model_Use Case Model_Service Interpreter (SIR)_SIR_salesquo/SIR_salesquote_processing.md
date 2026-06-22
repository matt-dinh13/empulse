# SIR_salesquote_processing

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model/Service Interpreter (SIR)/SIR_salesquote_processing_seq
- **Diagram ID**: 151256
- **Elements**: 23
- **Connectors**: 48

```mermaid
sequenceDiagram
    participant SIR as SIR
    participant INSR_Insurance_Program as INSR Insurance Program
    participant AM as AM
    participant External as External
    participant ContractService as ContractService
    participant ADS as ADS
    participant Contract_Supplement as Contract
Supplement
    participant KAFKA_csi_contract_supplement as KAFKA.csi.contract-supplement
    participant RQM_csi_am_processservice_operationnotification as RQM.csi.am. 
processservice
operationnotification
    participant RMQ_csi_contract_service as RMQ.csi.contract-service
    participant Contract_Insurance_Service as Contract Insurance
 Service
    participant LAP_RMQ as LAP RMQ
    participant SQS as SQS
    participant Run_processing as Run processing
    participant Service_Catalogue as Service Catalogue
    participant BSL_Payment_Channels as BSL.Payment 
Channels
    SIR->>+INSR_Insurance_Program: GetInsuranceProgram
    SIR->>+AM: GetAccount
    SIR->>+SIR: Validate Request
    External->>+SIR: ProcessLoanRequest
    ContractService->>+SIR: Sequence
    SIR->>+ADS: GetApplicationData
    SIR->>+SIR: Check Supplement for approval
    Contract_Supplement->>+KAFKA_csi_contract_supplement: Sequence
    KAFKA_csi_contract_supplement->>+External: TransactionSupplementRejected
    SIR->>+SIR: SelectServicesForActivation
    Contract_Supplement->>+AM: ConfirmTransactionWithIP
    Contract_Supplement->>+Contract_Supplement: GetNewTransactions
    RQM_csi_am_processservice_operationnotification->>+ContractService: UC08.290
    Contract_Supplement->>+KAFKA_csi_contract_supplement: Sequence
    KAFKA_csi_contract_supplement->>+External: TransactionSupplementDocumentPrepared
    AM->>+RQM_csi_am_processservice_operationnotification: ServiceAccepted
    KAFKA_csi_contract_supplement->>+SIR: TransactionSupplementAccepted
    RMQ_csi_contract_service->>+AM: ServiceAdded
    SIR->>+External: Sequence
    SIR->>+Contract_Supplement: Add SalesQuote
    ContractService->>+RMQ_csi_contract_service: ContractServiceCreated
    SIR->>+SIR: Check Approval Response
    SIR->>+Contract_Insurance_Service: ActivateInsurance
    External->>+External: Sign documents
    ContractService->>+RMQ_csi_contract_service: ContractServiceActivated
    SIR->>+LAP_RMQ: ApprovalRequest
    SIR->>+SQS: GetSalesQuotes
    Run_processing->>+SIR: Sequence
    Contract_Supplement->>+AM: AuthorizeTransactionWithOffer
    Contract_Supplement->>+SIR: Sequence
    Contract_Supplement->>+Contract_Supplement: ALOPRequestSigned
    SIR->>+Contract_Supplement: POST transaction-supplement/create
    Contract_Supplement->>+Contract_Supplement: ALOPRequestApprovedSE
    KAFKA_csi_contract_supplement->>+External: TransactionSupplementAccepted
    SIR->>+Contract_Supplement: GetTransactionSupplement
    External->>+Contract_Supplement: PUT /transaction-supplements/acceptation
    SIR->>+ContractService: AddLoanService
    Contract_Supplement->>+KAFKA_csi_contract_supplement: Sequence
    SIR->>+Contract_Supplement: AddSalesQuote
    SIR->>+SIR: Determine Loan Process Type
    SIR->>+Contract_Supplement: POST transaction-supplements/authorize
    SIR->>+Service_Catalogue: GetServiceDefinition
    SIR->>+Contract_Supplement: POST transaction-supplements/reject
    SIR->>+BSL_Payment_Channels: CreatePaymentChannel
    SIR->>+SQS: GetSalesQuote
    SIR->>+Contract_Insurance_Service: CreateInsuranceContract
    LAP_RMQ->>+SIR: ApprovalResponse
    ContractService->>+ContractService: Activate
```

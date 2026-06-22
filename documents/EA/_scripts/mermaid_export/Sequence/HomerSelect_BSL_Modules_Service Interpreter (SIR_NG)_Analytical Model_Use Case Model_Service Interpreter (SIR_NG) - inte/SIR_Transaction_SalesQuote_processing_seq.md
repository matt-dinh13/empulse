# SIR_Transaction_SalesQuote_processing_seq

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model/Service Interpreter (SIR_NG) - interaction diagrams/SIR_Transaction_SalesQuote_processing_seq
- **Diagram ID**: 162073
- **Elements**: 27
- **Connectors**: 60

```mermaid
sequenceDiagram
    participant RMQ_csi_contract_service as RMQ.csi.contract-service
    participant AM as AM
    participant COMA as COMA
    participant SIR as SIR
    participant Contract_Services_COS as Contract Services (COS)
    participant INSR_Insurance_Program as INSR Insurance Program
    participant Supplements_SUP as Supplements
 (SUP)
    participant RMQ_csi_contract_supplement as  RMQ csi.contract-supplement
    participant SQS as SQS
    participant RQM_csi_am_processservice_operationnotification as RQM.csi.am. 
processservice
operationnotification
    participant External as External
    participant LAP_RMQ as LAP RMQ
    participant VAS_Deals as VAS Deals
    participant ADS as ADS
    participant BSL_Payment_Channels as BSL.Payment 
Channels
    participant Service_Catalogue as Service Catalogue
    participant Run_processing as Run processing
    RMQ_csi_contract_service->>+AM: ServiceAdded
    COMA->>+SIR: Sequence
    Contract_Services_COS->>+SIR: Sequence
    SIR->>+INSR_Insurance_Program: GetInsuranceProgram
    SIR->>+SIR: Determine Loan Process Type
    SIR->>+COMA: GetContract
    SIR->>+Supplements_SUP: GetTransactionSupplement
    Supplements_SUP->>+RMQ_csi_contract_supplement: Sequence
    SIR->>+SQS: GetSalesQuotes
    AM->>+AM: Create Account
    RQM_csi_am_processservice_operationnotification->>+SIR: Sequence
    SIR->>+SQS: GetSalesQuote
    SIR->>+Supplements_SUP: POST contract-supplement/create
    RMQ_csi_contract_service->>+AM: Sequence
    SIR->>+COMA: CreateContract
    Supplements_SUP->>+AM: ConfirmTransactionWithIP
    Supplements_SUP->>+SIR: Sequence
    SIR->>+SIR: Get Service from Sales Quote
    Contract_Services_COS->>+Contract_Services_COS: Activate
    SIR->>+Supplements_SUP: POST transaction-supplements/reject
    External->>+Supplements_SUP: PUT /transaction-supplements/acceptation
    SIR->>+SIR: Check Approval Response
    RMQ_csi_contract_supplement->>+External: TransactionSupplementAccepted
    External->>+SIR: ProcessLoanRequest
    AM->>+RQM_csi_am_processservice_operationnotification: EventInfo
    SIR->>+SIR: Check Supplement for approval
    Supplements_SUP->>+Supplements_SUP: ALOPRequestApprovedSE
    SIR->>+Contract_Services_COS: AddService
    Supplements_SUP->>+AM: AuthorizeTransactionWithOffer
    LAP_RMQ->>+SIR: ApprovalResponse
    SIR->>+VAS_Deals: CreateInsuranceContract
    SIR->>+ADS: GetApplicationData
    Contract_Services_COS->>+RMQ_csi_contract_service: ContractServiceCreated
    SIR->>+Supplements_SUP: Add SalesQuote
    SIR->>+BSL_Payment_Channels: CreatePaymentChannel
    Supplements_SUP->>+RMQ_csi_contract_supplement: Sequence
    SIR->>+Contract_Services_COS: AddLoanService
    Supplements_SUP->>+RMQ_csi_contract_supplement: Sequence
    SIR->>+Service_Catalogue: GetServiceDefinition
    Contract_Services_COS->>+RMQ_csi_contract_service: ContractServiceCreated
    Supplements_SUP->>+Supplements_SUP: GetNewTransactions
    SIR->>+SIR: SelectServicesForActivation
    RMQ_csi_contract_supplement->>+SIR: TransactionSupplementAccepted
    SIR->>+SIR: Validate Request
    SIR->>+AM: GetAccount
    External->>+External: Sign documents
    SIR->>+LAP_RMQ: ApprovalRequest
    SIR->>+VAS_Deals: ActivateInsurance
    SIR->>+Supplements_SUP: POST transaction-supplements/authorize
    SIR->>+Supplements_SUP: AddSalesQuote
    SIR->>+Service_Catalogue: GetServiceDefinition
    RMQ_csi_contract_supplement->>+External: TransactionSupplementDocumentPrepared
    RMQ_csi_contract_supplement->>+External: TransactionSupplementRejected
    Run_processing->>+SIR: Sequence
    Contract_Services_COS->>+RMQ_csi_contract_service: ContractServiceActivated
    AM->>+RQM_csi_am_processservice_operationnotification: ServiceAccepted
    SIR->>+SIR: Get SalesQuote
    RQM_csi_am_processservice_operationnotification->>+Contract_Services_COS: UC08.290
    SIR->>+External: Sequence
    Supplements_SUP->>+Supplements_SUP: ALOPRequestSigned
```

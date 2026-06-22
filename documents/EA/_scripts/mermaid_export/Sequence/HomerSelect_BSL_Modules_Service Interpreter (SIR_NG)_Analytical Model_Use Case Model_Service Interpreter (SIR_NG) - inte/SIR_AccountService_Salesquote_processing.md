# SIR_AccountService_Salesquote_processing

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model/Service Interpreter (SIR_NG) - interaction diagrams/SIR_AccountService-Salesquote_processing_seq
- **Diagram ID**: 163633
- **Elements**: 19
- **Connectors**: 49

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant Request_Type_ACCOUNT_CREATION as Request Type = ACCOUNT_CREATION
    participant unnamed as unnamed
    participant SIR as SIR
    participant COMA as COMA
    participant Supplements_SUP as Supplements
 (SUP)
    participant RMQ_csi_contract_service as RMQ.csi.contract-service
    participant RQM_csi_am_processservice_operationnotification as RQM.csi.am. 
processservice
operationnotification
    participant RMQ_am_event_notification as RMQ
am.event.notification
    participant AM as AM
    participant Contract_Services_COS as Contract Services (COS)
    participant RMQ_csi_contract_supplement as  RMQ csi.contract-supplement
    participant SQS as SQS
    participant ADS as ADS
    participant External as External
    participant Service_Catalogue as Service Catalogue
    unnamed->>Request_Type_ACCOUNT_CREATION: NoteLink
    unnamed->>SIR: NoteLink
    SIR->>+SIR: Check MTCACC service existence
    SIR->>+SIR: Validate Request type
    SIR->>+COMA: Add Account to Contract
    SIR->>+COMA: CreateContract
    SIR->>+Supplements_SUP: Get ContractSupplements
    RMQ_csi_contract_service->>+RQM_csi_am_processservice_operationnotification: Sequence
    RMQ_am_event_notification->>+SIR: EventInfo
    AM->>+AM: Create Account
    SIR->>+Contract_Services_COS: AddService
    SIR->>+Supplements_SUP: POST contract-supplement/create
    SIR->>+SIR: Get SalesQuotes[].type
    RMQ_csi_contract_service->>+AM: Sequence
    SIR->>+Supplements_SUP: Create Contract Supplement documents
    RMQ_csi_contract_service->>+AM: ServiceAdded
    Supplements_SUP->>+RMQ_csi_contract_supplement: Sequence
    SIR->>+SQS: GetSalesQuote
    SIR->>+ADS: GetApplicationData
    Contract_Services_COS->>+Contract_Services_COS: Service Added
    RQM_csi_am_processservice_operationnotification->>+Contract_Services_COS: Sequence
    SIR->>+SQS: GetSalesQuotes
    SIR->>+Supplements_SUP: Get ContractSupplement
    SIR->>+Supplements_SUP: GetSupplementDefinition
    Request_Type_ACCOUNT_CREATION->>+SIR: Sequence
    AM->>+RQM_csi_am_processservice_operationnotification: ServiceAccepted
    AM->>+RMQ_am_event_notification: EventInfo
    SIR->>+SIR: Get Service from Sales Quote
    Contract_Services_COS->>+Contract_Services_COS: Confirm
    RQM_csi_am_processservice_operationnotification->>+Contract_Services_COS: UC08.290
    RMQ_csi_contract_supplement->>+External: ContractSupplementDocumentPrepared
    Contract_Services_COS->>+RMQ_csi_contract_service: ContractServiceCreated
    SIR->>+Supplements_SUP: Add SalesQuote
    Contract_Services_COS->>+RMQ_csi_contract_service: ContractServiceCreated
    External->>+SIR: ProcessLoanRequest
    SIR->>+SIR: Check ContractSupplement duplicity
    SIR->>+External: Sequence
    SIR->>+Service_Catalogue: GetServiceDefinition
    SIR->>+Contract_Services_COS: Get ContractService
    SIR->>+Contract_Services_COS: AddContractService
    Supplements_SUP->>+SIR: Sequence
    SIR->>+Service_Catalogue: GetServiceDefinition
    SIR->>+ADS: GetApplicationData
    External->>+External: Download documents
    SIR->>+SIR: Find Contract Supplement
    SIR->>+SIR: Get SalesQuote
    Supplements_SUP->>+Supplements_SUP: Generate Documents
    Supplements_SUP->>+Supplements_SUP: Set ContractSupplement status
    COMA->>+SIR: Sequence
```

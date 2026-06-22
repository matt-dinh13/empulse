# Loan application processing - seq

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/BREIT-35 HoSel as a Product - Applications Phase 1/Loan application processing - seq
- **Diagram ID**: 159936
- **Elements**: 22
- **Connectors**: 81

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant Open_Account as Open Account
    participant unnamed as unnamed
    participant Generation_of_Documents_Prepare_materials as Generation of Documents (Prepare materials)
    participant AM as AM
    participant SUPP as SUPP
    participant RMQ_exchanges as RMQ exchanges
    participant Loan_Offer_processing_SIR as Loan Offer processing (SIR)
    participant COS as COS
    participant COMA as COMA
    participant customer_chooses_offer as customer chooses offer
    participant Actor_orchestrator as Actor (orchestrator?)
    participant Documents_acceptation_signature as Documents acceptation/signature
    participant SC_SERVICE as SC_SERVICE
    participant ADS as ADS
    participant SQS as SQS
    unnamed->>Open_Account: NoteLink
    unnamed->>Generation_of_Documents_Prepare_materials: NoteLink
    AM->>+AM: SwitchServiceOn
    SUPP->>+RMQ_exchanges: ContractSupplementAccepted
    SUPP->>+SUPP: Check All Transaction confirmed
    SUPP->>+RMQ_exchanges: ContractSupplementSigned
    Loan_Offer_processing_SIR->>+Loan_Offer_processing_SIR: CheckMTCACCServiceExistence
    Loan_Offer_processing_SIR->>+SUPP: GetContractSupplement
    Loan_Offer_processing_SIR->>+COS: ActivateContractService
    COMA->>+Loan_Offer_processing_SIR: Sequence
    Loan_Offer_processing_SIR->>+SUPP: AddSalesQuote
    Loan_Offer_processing_SIR->>+SUPP: AcceptContractSupplement
    customer_chooses_offer->>+Actor_orchestrator: Sequence
    Actor_orchestrator->>+Loan_Offer_processing_SIR: SalesQuotesProcessing
    Loan_Offer_processing_SIR->>+COMA: SignContract
    COMA->>+RMQ_exchanges: ContractSigned
    RMQ_exchanges->>+Loan_Offer_processing_SIR: ContractSupplementAccepted
    COS->>+Loan_Offer_processing_SIR: Sequence
    Loan_Offer_processing_SIR->>+RMQ_exchanges: OffersProcessed
    Loan_Offer_processing_SIR->>+Loan_Offer_processing_SIR: Evaluate
    COS->>+Loan_Offer_processing_SIR: Sequence
    COS->>+RMQ_exchanges: ContractServiceOperationStatus
    Loan_Offer_processing_SIR->>+COS: GetContractServiceData
    Documents_acceptation_signature->>+Loan_Offer_processing_SIR: Sequence
    SUPP->>+SUPP: GetSupplementDefinition
    SUPP->>+Loan_Offer_processing_SIR: Sequence
    Loan_Offer_processing_SIR->>+COMA: GetContract
    SUPP->>+RMQ_exchanges: ConfirmTransaction
    Loan_Offer_processing_SIR->>+COS: AddServiceToContract
    Loan_Offer_processing_SIR->>+COMA: CreateContract
    RMQ_exchanges->>+AM: Sequence
    Loan_Offer_processing_SIR->>+SC_SERVICE: GetServiceDefinition
    RMQ_exchanges->>+SUPP: Sequence
    SUPP->>+SUPP: DocumentGeneration
    Loan_Offer_processing_SIR->>+Loan_Offer_processing_SIR: Determine Purchase Sales Quote
    Loan_Offer_processing_SIR->>+SUPP: GetContractSupplement
    ADS->>+Loan_Offer_processing_SIR: Sequence
    Loan_Offer_processing_SIR->>+SUPP: GenerateDocuments
    Loan_Offer_processing_SIR->>+Loan_Offer_processing_SIR: Get Services related to Contract Supplement
    ADS->>+COMA: Sequence
    Loan_Offer_processing_SIR->>+SUPP: AddSalesQuote
    Loan_Offer_processing_SIR->>+Loan_Offer_processing_SIR: CheckContractStatus
    COMA->>+COMA: ActivateContract
    COMA->>+RMQ_exchanges: ContractCreated
    COMA->>+Loan_Offer_processing_SIR: Sequence
    SUPP->>+RMQ_exchanges: ContractSupplementDocumentsPrepared
    COMA->>+Loan_Offer_processing_SIR: Sequence
    AM->>+AM: Process Confirmation request
    SUPP->>+SUPP: Get AccountTransactions
    Loan_Offer_processing_SIR->>+SC_SERVICE: GetServiceDefinition
    AM->>+RMQ_exchanges: Sequence
    COMA->>+ADS: GetApplicationData
    Loan_Offer_processing_SIR->>+SQS: GetSalesQuotes
    SUPP->>+RMQ_exchanges: ContractSupplementCreated
    COMA->>+COMA: Sequence
    COMA->>+Loan_Offer_processing_SIR: Sequence
    SUPP->>+Loan_Offer_processing_SIR: Sequence
    Loan_Offer_processing_SIR->>+Loan_Offer_processing_SIR: Get Services to activation
    Loan_Offer_processing_SIR->>+COMA: GetContract
    SUPP->>+Loan_Offer_processing_SIR: Sequence
    Loan_Offer_processing_SIR->>+Loan_Offer_processing_SIR: Get Services from SalesQuotes
    Loan_Offer_processing_SIR->>+ADS: GetApplicationData
    AM->>+AM: CreateAccount/AddService
    SUPP->>+SUPP: Accept ContractSupplement
    SUPP->>+SUPP: PrepareTransaction
    Generation_of_Documents_Prepare_materials->>+Loan_Offer_processing_SIR: Sequence
    Loan_Offer_processing_SIR->>+COMA: GetContractService
    RMQ_exchanges->>+AM: Sequence
    SUPP->>+Loan_Offer_processing_SIR: Sequence
    SQS->>+Loan_Offer_processing_SIR: Sequence
    Loan_Offer_processing_SIR->>+Loan_Offer_processing_SIR: DetermineSupplementType
    Loan_Offer_processing_SIR->>+Loan_Offer_processing_SIR: ProcessError
    COS->>+RMQ_exchanges: ContractServiceCreated
    Loan_Offer_processing_SIR->>+SUPP: CreateSupplement
    SUPP->>+Loan_Offer_processing_SIR: Sequence
    Loan_Offer_processing_SIR->>+RMQ_exchanges: OfferProcessingFailed
    RMQ_exchanges->>+AM: Sequence
    SUPP->>+SUPP: Sign ContractSupplement
    SC_SERVICE->>+Loan_Offer_processing_SIR: Sequence
    SUPP->>+SUPP: Sequence
    Loan_Offer_processing_SIR->>+SUPP: GetSuplementDefinition
```

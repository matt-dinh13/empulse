# Consolidation - CLM part sequence diagram

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans/Consolidation - CLM part sequence diagram
- **Diagram ID**: 84606
- **Elements**: 15
- **Connectors**: 25

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant n_01_380_Prepare_Contract_for_Consolidation_UC as 01.380 Prepare Contract for Consolidation UC
    participant IS_module as IS module
    participant EventProcessor as EventProcessor
    participant JMS_topic as JMS topic
    participant n_05_350_Process_disbursement_confirmation_message_UC as 05.350 Process disbursement confirmation message UC
    participant n_01_382_Perform_consolidation_UC as 01.382 Perform consolidation UC
    participant PAY_module as PAY module
    participant n_01_180_Sign_contract_UC as 01.180 Sign contract UC
    participant n_01_384_Finalize_contract_consolidation_UC as 01.384 Finalize contract consolidation UC
    unnamed->>n_01_380_Prepare_Contract_for_Consolidation_UC: NoteLink
    n_01_380_Prepare_Contract_for_Consolidation_UC->>+n_01_380_Prepare_Contract_for_Consolidation_UC: CreateConsolidation
    IS_module->>+IS_module: PerformFER
    n_01_380_Prepare_Contract_for_Consolidation_UC->>+IS_module: BlockBonusService
    EventProcessor->>+JMS_topic: LoanServiceRequest message
    n_05_350_Process_disbursement_confirmation_message_UC->>+EventProcessor: CashDisbursementConfirmedSE
    n_01_382_Perform_consolidation_UC->>+PAY_module: PaymentManagement.createPayment
    n_01_380_Prepare_Contract_for_Consolidation_UC->>+n_01_380_Prepare_Contract_for_Consolidation_UC: CheckEligibility
    EventProcessor->>+n_01_380_Prepare_Contract_for_Consolidation_UC: PrepareConsolidation
    IS_module->>+EventProcessor: ContractFERExecutedSE
    n_01_180_Sign_contract_UC->>+EventProcessor: ContractConsolidationSE
    n_01_384_Finalize_contract_consolidation_UC->>+n_01_384_Finalize_contract_consolidation_UC: Check if all ConsolidatedContracts are finished
    EventProcessor->>+n_01_382_Perform_consolidation_UC: RunConsolidation
    n_01_380_Prepare_Contract_for_Consolidation_UC->>+n_01_382_Perform_consolidation_UC: PerformConsolidation
    n_01_380_Prepare_Contract_for_Consolidation_UC->>+n_01_380_Prepare_Contract_for_Consolidation_UC: CreateFerRequest
    PAY_module->>+IS_module: PairPayment
    n_01_380_Prepare_Contract_for_Consolidation_UC->>+n_01_380_Prepare_Contract_for_Consolidation_UC:  CheckConsolidation Service.Consolidation Type 
    EventProcessor->>+n_01_384_Finalize_contract_consolidation_UC: Sequence
    n_01_384_Finalize_contract_consolidation_UC->>+EventProcessor: ConsolidationRequestExecuted
    EventProcessor->>+JMS_topic: LoanServiceRequest message
    n_01_384_Finalize_contract_consolidation_UC->>+n_01_384_Finalize_contract_consolidation_UC: FinishContract
    n_01_380_Prepare_Contract_for_Consolidation_UC->>+EventProcessor: ConsolidationRequestCreated
    n_01_384_Finalize_contract_consolidation_UC->>+n_01_384_Finalize_contract_consolidation_UC: ConsolidationLSR
    n_05_350_Process_disbursement_confirmation_message_UC->>+n_05_350_Process_disbursement_confirmation_message_UC: Contract disbursed
    n_01_380_Prepare_Contract_for_Consolidation_UC->>+PAY_module: DirectDebitService.suspendDDM
```

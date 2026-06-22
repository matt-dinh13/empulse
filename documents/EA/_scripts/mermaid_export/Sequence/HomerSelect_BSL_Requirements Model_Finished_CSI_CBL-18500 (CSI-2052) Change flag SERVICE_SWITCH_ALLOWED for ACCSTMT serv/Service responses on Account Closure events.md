# Service responses on Account Closure events

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/Service responses on Account Closure events
- **Diagram ID**: 149769
- **Elements**: 21
- **Connectors**: 51

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant ContractPaidOffSE as ContractPaidOffSE
    participant unnamed as unnamed
    participant PO_request_from_LCS as PO request (from LCS)
    participant AM as AM
    participant RMQ_echange_clm_request_account as RMQ echange
clm.request.account
    participant BSL_LoanService as BSL:LoanService
    participant RMQ_exchange_csi_event_loan_service_request as RMQ exchange
csi.event.loan.service.request
    participant RMQ_exchange_am_topic_account_closure as RMQ exchange
am.topic.account.closure
    participant RMQ_exchange_csi_contract_service as RMQ exchange
.csi.contract.service
    participant Cancellation_request as Cancellation request
    participant Write_off_request as Write-off request
    participant Payoff_request as Payoff request
    participant RMQ_exchange_am_account_service_status as RMQ exchange
am.account.service.status
    participant USER_API as USER/API
    participant BSL_Contract as BSL:Contract
    participant Termination_request as Termination request
    unnamed->>ContractPaidOffSE: NoteLink
    unnamed->>PO_request_from_LCS: NoteLink
    AM->>+RMQ_echange_clm_request_account: AccountClosure
    BSL_LoanService->>+RMQ_exchange_csi_event_loan_service_request: LoanServiceRequest
    ContractPaidOffSE->>+BSL_LoanService: Sequence
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    AM->>+AM: Sequence
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    RMQ_exchange_am_topic_account_closure->>+BSL_LoanService: AccountClosure
    AM->>+AM: Sequence
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+BSL_LoanService: DeactivateInsuranceContract
    RMQ_echange_clm_request_account->>+BSL_LoanService: ProcessAccountClosureResultRequest
    BSL_LoanService->>+RMQ_exchange_csi_event_loan_service_request: LoanServiceRequest
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceCreated
    BSL_LoanService->>+RMQ_exchange_am_topic_account_closure: ContractServiceOperStatusChange
    AM->>+RMQ_exchange_am_topic_account_closure: AccountClosure
    BSL_LoanService->>+BSL_LoanService: evaluateResponseOnEvent
    AM->>+RMQ_exchange_am_topic_account_closure: AccountClosure
    Cancellation_request->>+AM: Sequence
    Write_off_request->>+AM: Sequence
    Payoff_request->>+AM: Sequence
    BSL_LoanService->>+RMQ_exchange_am_topic_account_closure: ContractServiceOperStatusChange
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    AM->>+RMQ_exchange_am_topic_account_closure: AccountClosure
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+BSL_LoanService: evaluateResponseOnEvent
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    USER_API->>+BSL_Contract: SignContract
    BSL_LoanService->>+BSL_LoanService: 01.740
    AM->>+RMQ_exchange_am_topic_account_closure: AccountClosure
    Termination_request->>+AM: Sequence
    RMQ_exchange_am_topic_account_closure->>+BSL_LoanService: AccountClosure
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    RMQ_exchange_am_topic_account_closure->>+BSL_LoanService: AccountClosure
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    PO_request_from_LCS->>+BSL_Contract: Sequence
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceCancelled
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceTerminated
    BSL_Contract->>+AM: CloseAccountRequest
    BSL_LoanService->>+RMQ_exchange_csi_event_loan_service_request: LoanServiceRequest
    USER_API->>+BSL_Contract: TerminateContract
    AM->>+AM: Sequence
    BSL_Contract->>+BSL_LoanService: AddContractService
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    AM->>+AM: Sequence
    RMQ_exchange_am_topic_account_closure->>+BSL_LoanService: AccountClosure
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceTerminated
```

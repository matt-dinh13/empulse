# Contract Service notifications and Account responses

```mermaid
sequenceDiagram
    participant BSL_LoanService as BSL:LoanService
    participant RMQ_exchange_csi_contract_service as RMQ exchange
.csi.contract.service
    participant BSL_Contract as BSL:Contract
    participant AM as AM
    participant ContractSignSE as ContractSignSE
    participant USER_API as USER/API
    participant RMQ_exchange_csi_request_account as RMQ exchange
csi.request.account
    participant RMQ_exchange_csi_event_loan_service_request as RMQ exchange
csi.event.loan.service.request
    participant ContractSignSE_ContractActivatedSE as ContractSignSE / ContractActivatedSE
    BSL_LoanService->>RMQ_exchange_csi_contract_service: ContractServiceTerminated
    BSL_Contract->>BSL_LoanService: ActivateInsurance
    BSL_Contract->>BSL_LoanService: ActivateContractService
    BSL_LoanService->>BSL_LoanService: Add Service to Contract
    AM->>BSL_LoanService: Sequence
    BSL_LoanService->>AM: ap/service/flip
    ContractSignSE->>BSL_Contract: SignContract
    BSL_LoanService->>BSL_LoanService: Create Loan Service Request
    USER_API->>BSL_Contract: ReplaceService
    RMQ_exchange_csi_request_account->>BSL_LoanService: processserviceoperationnotification
    BSL_LoanService->>RMQ_exchange_csi_event_loan_service_request: LoanServiceRequest
    BSL_Contract->>BSL_LoanService: AddInsuranceService
    BSL_LoanService->>BSL_LoanService: CreateLoanServiceRequest
    BSL_LoanService->>RMQ_exchange_csi_event_loan_service_request: LoanServiceRequest
    BSL_LoanService->>BSL_LoanService: ServiceSwitch_on
    BSL_LoanService->>RMQ_exchange_csi_event_loan_service_request: LoanServiceRequest
    USER_API->>BSL_Contract: ServiceSwitch-on/off
    BSL_Contract->>BSL_LoanService: AddContractService
    BSL_Contract->>BSL_LoanService: TerminateService
    BSL_LoanService->>RMQ_exchange_csi_contract_service: ContractInsuranceServiceCreated
    BSL_LoanService->>RMQ_exchange_csi_event_loan_service_request: LoanServiceRequest
    BSL_Contract->>BSL_LoanService: ContractServiceChangeStatus
    BSL_LoanService->>BSL_LoanService: ActivateInsurance
    BSL_LoanService->>RMQ_exchange_csi_event_loan_service_request: LoanServiceRequest
    USER_API->>BSL_Contract: TerminateService
    RMQ_exchange_csi_request_account->>BSL_LoanService: processserviceoperationnotification
    BSL_LoanService->>BSL_LoanService: Add Insurance to Contract
    USER_API->>BSL_Contract: AddService
    BSL_LoanService->>BSL_LoanService: ExecuteLoanServiceRequest
    BSL_LoanService->>BSL_LoanService: ActivateContractService
    BSL_Contract->>BSL_LoanService: ReplaceService
    BSL_LoanService->>BSL_LoanService: Create Loan Service Request
    BSL_LoanService->>BSL_LoanService: CreateInsurancePeriod
    USER_API->>BSL_Contract: AddInsurance
    ContractSignSE_ContractActivatedSE->>BSL_Contract: Sequence
    BSL_LoanService->>RMQ_exchange_csi_contract_service: ContractServiceCreated
    BSL_LoanService->>RMQ_exchange_csi_event_loan_service_request: LoanServiceRequest
```

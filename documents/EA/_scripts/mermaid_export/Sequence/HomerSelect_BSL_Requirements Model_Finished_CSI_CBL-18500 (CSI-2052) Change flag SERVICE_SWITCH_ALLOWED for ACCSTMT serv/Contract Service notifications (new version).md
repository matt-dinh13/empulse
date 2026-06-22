# Contract Service notifications (new version)

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/Contract Service notifications (new version)
- **Diagram ID**: 154425
- **Elements**: 19
- **Connectors**: 79

```mermaid
sequenceDiagram
    participant RMQ_exchange_am_account_service_status as RMQ exchange
am.account.service.status
    participant BSL_LoanService as BSL:LoanService
    participant RMQ_exchange_csi_contract_service as RMQ exchange
.csi.contract.service
    participant USER_API as USER/API
    participant BSL_Contract as BSL:Contract
    participant AM as AM
    participant ContractSignSE_ContractActivatedSE as ContractSignSE / ContractActivatedSE
    participant ContractSignSE as ContractSignSE
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceActivated
    BSL_LoanService->>+BSL_LoanService: ServiceSwitch_on
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceOperStatusChanged
    BSL_LoanService->>+BSL_LoanService: ActivateInsuranceContract
    USER_API->>+BSL_Contract: ReplaceService
    BSL_LoanService->>+BSL_LoanService: CreateInsurancePeriod
    BSL_Contract->>+BSL_LoanService: ContractServiceChangeStatus
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_Contract->>+BSL_LoanService: CancelInsuranceContract
    USER_API->>+BSL_Contract: TerminateService
    BSL_LoanService->>+BSL_LoanService: Add Service to Contract
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceTerminated
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceCreated
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceCreated
    BSL_LoanService->>+BSL_LoanService: Sequence
    BSL_LoanService->>+BSL_LoanService: Rollback replaced Contract Service
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+BSL_LoanService: Loan Service Request
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    BSL_LoanService->>+BSL_LoanService: ContractService.Status
    BSL_Contract->>+BSL_LoanService: AddContractService
    USER_API->>+BSL_Contract: AddInsurance
    USER_API->>+BSL_Contract: TerminateInsurance
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceTerminated
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceActivated
    BSL_LoanService->>+BSL_LoanService: Loan Service Request
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceCreated
    BSL_LoanService->>+BSL_LoanService: Loan Service Request
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceReplaced
    BSL_Contract->>+BSL_LoanService: AddInsuranceService
    BSL_LoanService->>+BSL_LoanService: ExecuteLoanServiceRequest
    BSL_LoanService->>+AM: openapi/account/
    AM->>+BSL_LoanService: Account
    BSL_LoanService->>+BSL_LoanService: ActivateInsurancePeriod
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceCreated
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+BSL_LoanService: Loan Service Request
    BSL_Contract->>+BSL_LoanService: ActivateInsurance
    BSL_Contract->>+BSL_LoanService: DeactivateInsurance
    USER_API->>+BSL_Contract: InsuranceSwitch-on/off
    BSL_LoanService->>+BSL_LoanService: ActivateContractService
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceActivated
    BSL_Contract->>+BSL_LoanService: TerminateService
    ContractSignSE_ContractActivatedSE->>+BSL_Contract: Sequence
    USER_API->>+BSL_Contract: AddService
    USER_API->>+BSL_Contract: CancelInsurance
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+BSL_LoanService: Loan Service Request
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    BSL_LoanService->>+BSL_LoanService: Loan Service Request
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceReplaced
    BSL_LoanService->>+BSL_LoanService: Add Insurance to Contract
    BSL_LoanService->>+BSL_LoanService: LoanServiceRequest
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceCreated
    BSL_LoanService->>+BSL_LoanService: Activate ContractService
    BSL_LoanService->>+BSL_LoanService: Loan Service Request
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractServiceOperStatusChanged
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceCancelled
    USER_API->>+BSL_Contract: ServiceSwitch-on/off
    BSL_Contract->>+BSL_LoanService: ActivateInsurance
    RMQ_exchange_am_account_service_status->>+BSL_LoanService: processServiceOperationNotification
    ContractSignSE->>+BSL_Contract: SignContract
    BSL_Contract->>+BSL_LoanService: TerminateContractInsurance
    BSL_LoanService->>+BSL_LoanService: Loan Service Request
    BSL_LoanService->>+BSL_LoanService: Loan Service Request
    BSL_LoanService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceOperStatusChanged
    BSL_Contract->>+BSL_LoanService: ActivateContractService
    BSL_Contract->>+BSL_LoanService: ReplaceService
    BSL_LoanService->>+BSL_LoanService: Create Loan Service Request
```

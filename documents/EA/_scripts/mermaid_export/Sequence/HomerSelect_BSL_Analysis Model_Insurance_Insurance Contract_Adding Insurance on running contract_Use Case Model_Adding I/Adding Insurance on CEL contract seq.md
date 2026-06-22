# Adding Insurance on CEL contract seq

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model/Adding Insurance on CEL contract seq
- **Diagram ID**: 164277
- **Elements**: 12
- **Connectors**: 50

```mermaid
sequenceDiagram
    participant BSL_ContractService as BSL.ContractService
    participant RMQ_exchange_csi_contract_service as RMQ exchange
csi.contract.service
    participant BSL_LoanServiceRequest as BSL.LoanServiceRequest
    participant External_App as External App
    participant Installments as Installments
    participant BSL_UI as BSL UI
    participant PIF as PIF
    participant User as User
    participant InsuranceContract_VAS_Deal as InsuranceContract
VAS-Deal
    participant PCG_Services as PCG.Services
    BSL_ContractService->>+RMQ_exchange_csi_contract_service: Sequence
    BSL_LoanServiceRequest->>+BSL_LoanServiceRequest: Time for AcceptInsuranceOffer expired
    BSL_ContractService->>+BSL_ContractService: EvaluateRequest
    External_App->>+External_App: Notify Client about insurance cancellation
    External_App->>+BSL_LoanServiceRequest: GetInsuranceOfferParameters
    Installments->>+BSL_ContractService: response
    BSL_ContractService->>+BSL_UI: ShowInsuranceOfferPreview
    External_App->>+External_App: GenerateDocuments
    BSL_ContractService->>+Installments: RecalculateFinancialParameters
    PIF->>+BSL_UI: response
    BSL_ContractService->>+BSL_LoanServiceRequest: GetInsuranceOfferParameters
    User->>+External_App: Sign
    User->>+BSL_UI: Choose an Insurance
    BSL_ContractService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceCreatedSE
    BSL_UI->>+User: response
    BSL_ContractService->>+InsuranceContract_VAS_Deal: CreateInsuranceContract
    BSL_UI->>+BSL_ContractService: AddContractInsuranceService
    External_App->>+External_App: Notify Client about insurance activation
    BSL_LoanServiceRequest->>+BSL_ContractService: CancelInsuranceService
    BSL_LoanServiceRequest->>+External_App: response
    BSL_ContractService->>+BSL_ContractService: ActivateContractInsuranceService
    External_App->>+External_App: ExposeDocumentsToClient
    BSL_UI->>+BSL_UI: FilterEligibleServices
    External_App->>+External_App: Sequence
    BSL_ContractService->>+BSL_ContractService: SetUpInsuranceOfferParameters
    BSL_ContractService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceCancelledSE
    PCG_Services->>+BSL_UI: response
    BSL_ContractService->>+RMQ_exchange_csi_contract_service: ContractInsuranceServiceActivatedSE
    BSL_UI->>+BSL_UI: ShowEligibleInsuranceServices
    BSL_UI->>+PCG_Services: GetInsuranceServiceOffers
    External_App->>+BSL_ContractService: AcceptInsuranceOffer
    BSL_ContractService->>+InsuranceContract_VAS_Deal: ActivateInsuranceContract
    BSL_ContractService->>+PCG_Services: GetServiceParameters
    InsuranceContract_VAS_Deal->>+BSL_ContractService: response
    BSL_UI->>+User: response
    User->>+BSL_UI: ConfirmInsuranceOffer
    InsuranceContract_VAS_Deal->>+BSL_ContractService: response
    BSL_ContractService->>+InsuranceContract_VAS_Deal: CancelInsuranceContract
    BSL_UI->>+PIF: GetCustomerData
    BSL_UI->>+BSL_ContractService: ShowInsuranceOfferPreview
    BSL_ContractService->>+BSL_ContractService: CalcuateInsurancePremium
    PCG_Services->>+BSL_ContractService: response
    RMQ_exchange_csi_contract_service->>+External_App: ContractInsuranceServiceCancelledNotification
    RMQ_exchange_csi_contract_service->>+External_App: ContractInsuranceServiceActivatedNotification
    External_App->>+External_App: CreateDataSource
    BSL_ContractService->>+BSL_LoanServiceRequest: CreateLSRInsuranceOffer
    User->>+BSL_UI: GetInsuranceServices
    BSL_ContractService->>+Installments: RegenerateInstallmentSchedule
    BSL_LoanServiceRequest->>+BSL_ContractService: Sequence
    RMQ_exchange_csi_contract_service->>+External_App: ContractInsuranceServiceCreatedNotification
```

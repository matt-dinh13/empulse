# Contract Insurance Services - PUT: Contract Insurance Service Terminate

```mermaid
classDiagram
    class n_08_454_Terminate_contract_insurance_service["08.454 Terminate contract insurance service"]
    class Contract_Insurance_Services["Contract Insurance Services"]
    class InsuranceCommodity["InsuranceCommodity"]
    class Insurance["Insurance"]
    class LoanService["LoanService"]
    class SetContractInsuranceTerminated["SetContractInsuranceTerminated"]
    Contract_Insurance_Services --> SetContractInsuranceTerminated : unnamed
    Contract_Insurance_Services --> LoanService : unnamed
    Insurance --> LoanService : unnamed
    InsuranceCommodity --> Insurance : unnamed
    Contract_Insurance_Services --> n_08_454_Terminate_contract_insurance_service : unnamed
```

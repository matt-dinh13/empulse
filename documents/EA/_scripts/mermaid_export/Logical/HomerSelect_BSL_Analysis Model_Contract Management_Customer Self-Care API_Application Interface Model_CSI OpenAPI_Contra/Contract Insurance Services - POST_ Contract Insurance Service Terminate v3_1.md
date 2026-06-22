# Contract Insurance Services - POST: Contract Insurance Service Terminate v3

```mermaid
classDiagram
    class Insurance_v3["Insurance_v3"]
    class InsuranceCommodity_v3["InsuranceCommodity_v3"]
    class InsuranceCustomData["InsuranceCustomData"]
    class LoanService_v3["LoanService_v3"]
    class n_08_454_Terminate_contract_insurance_service["08.454 Terminate contract insurance service"]
    class Contract_Insurance_Services["Contract Insurance Services"]
    class SetContractInsuranceTerminated["SetContractInsuranceTerminated"]
    Contract_Insurance_Services --> LoanService_v3 : unnamed
    Contract_Insurance_Services --> LoanService_v3 : unnamed
    Contract_Insurance_Services --> SetContractInsuranceTerminated : unnamed
    Contract_Insurance_Services --> n_08_454_Terminate_contract_insurance_service : unnamed
    Contract_Insurance_Services --> LoanService_v3 : unnamed
    Contract_Insurance_Services --> LoanService_v3 : unnamed
    Insurance_v3 --> InsuranceCommodity_v3 : unnamed
    Insurance_v3 --> InsuranceCustomData : unnamed
    Insurance_v3 --> LoanService_v3 : unnamed
```

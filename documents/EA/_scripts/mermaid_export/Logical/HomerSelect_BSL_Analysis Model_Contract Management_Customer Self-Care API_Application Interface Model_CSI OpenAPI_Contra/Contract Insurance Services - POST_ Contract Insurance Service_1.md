# Contract Insurance Services - POST: Contract Insurance Service

```mermaid
classDiagram
    class MOD_08_347_Add_Insurance_service_on_Contract_service["{MOD}08.347 Add Insurance service on Contract service"]
    class DocumentFile["DocumentFile"]
    class Document["Document"]
    class InsuranceCommodity["InsuranceCommodity"]
    class Insurance["Insurance"]
    class LoanService["LoanService"]
    class InsuranceService["InsuranceService"]
    class CreateContractInsurance["CreateContractInsurance"]
    class Contract_Insurance_Services["Contract Insurance Services"]
    Contract_Insurance_Services --> CreateContractInsurance : unnamed
    CreateContractInsurance --> InsuranceService : unnamed
    Insurance --> LoanService : unnamed
    Contract_Insurance_Services --> LoanService : unnamed
    InsuranceCommodity --> Insurance : unnamed
    DocumentFile --> Document : unnamed
    LoanService --> Document : unnamed
    Contract_Insurance_Services --> MOD_08_347_Add_Insurance_service_on_Contract_service : unnamed
    Contract_Insurance_Services --> MOD_08_347_Add_Insurance_service_on_Contract_service : unnamed
```

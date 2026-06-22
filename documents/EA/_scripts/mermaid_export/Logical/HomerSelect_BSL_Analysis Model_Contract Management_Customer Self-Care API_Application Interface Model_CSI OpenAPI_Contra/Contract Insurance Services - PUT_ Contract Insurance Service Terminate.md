# Contract Insurance Services - PUT: Contract Insurance Service Terminate

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0
- **Diagram ID**: 161872
- **Elements**: 6
- **Connectors**: 5

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
    LoanService <|-- Insurance : unnamed
    Insurance o-- InsuranceCommodity : unnamed
    Contract_Insurance_Services ..> n_08_454_Terminate_contract_insurance_service : unnamed
```

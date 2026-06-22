# Contract Insurance Change Requests - GET: ContractInsuranceCancelPreview

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0
- **Diagram ID**: 161873
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class Use_case_model_Cancellation_of_Insurance_contract_options["Use case model :Cancellation of Insurance contract options"]
    class n_08_451_Get_Contract_insurance_Cancel_preview_service["08.451 Get Contract insurance Cancel preview service"]
    class ReasonType["ReasonType"]
    class ContractDataChanged["ContractDataChanged"]
    class ContractInsuranceCancelPreview["ContractInsuranceCancelPreview"]
    class GetContractInsuranceCancelPreview["GetContractInsuranceCancelPreview"]
    class Contract_Insurance_Services["Contract Insurance Services"]
    Contract_Insurance_Services --> GetContractInsuranceCancelPreview : unnamed
    Contract_Insurance_Services --> ContractInsuranceCancelPreview : unnamed
    ContractInsuranceCancelPreview --> ContractDataChanged : unnamed
    ContractInsuranceCancelPreview --> ReasonType : unnamed
    Contract_Insurance_Services ..> n_08_451_Get_Contract_insurance_Cancel_preview_service : unnamed
```

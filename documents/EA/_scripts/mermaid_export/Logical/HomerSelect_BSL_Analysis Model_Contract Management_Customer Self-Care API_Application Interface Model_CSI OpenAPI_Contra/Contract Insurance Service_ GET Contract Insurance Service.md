# Contract Insurance Service: GET Contract Insurance Service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3_proposal
- **Diagram ID**: 161867
- **Elements**: 10
- **Connectors**: 12

```mermaid
classDiagram
    class ADD_InsuranceOffer_v3["{ADD}InsuranceOffer_v3"]
    class GetContractListInsurancesRequest_v3["GetContractListInsurancesRequest_v3"]
    class Insurance_v3["Insurance_v3"]
    class InsuranceCommodity_v3["InsuranceCommodity_v3"]
    class GetContractListInsurancesResponse_v3["GetContractListInsurancesResponse_v3"]
    class Contract_Insurance_Services["Contract Insurance Services"]
    class MOD_01_772_Get_contract_list_insurances_for_self_care["{MOD}01.772 Get contract list insurances for self-care"]
    class InsuranceCustomData["InsuranceCustomData"]
    class Contract["Contract"]
    class LoanService_v3["LoanService_v3"]
    Contract --> LoanService_v3 : unnamed
    Contract_Insurance_Services --> GetContractListInsurancesRequest_v3 : unnamed
    Contract_Insurance_Services --> GetContractListInsurancesResponse_v3 : unnamed
    Contract_Insurance_Services ..> LoanService_v3 : unnamed
    Contract_Insurance_Services ..> MOD_01_772_Get_contract_list_insurances_for_self_care : unnamed
    Contract_Insurance_Services ..> LoanService_v3 : unnamed
    Contract_Insurance_Services ..> LoanService_v3 : unnamed
    GetContractListInsurancesResponse_v3 --> Contract : unnamed
    Insurance_v3 --> InsuranceCommodity_v3 : unnamed
    Insurance_v3 --> ADD_InsuranceOffer_v3 : unnamed
    Insurance_v3 --> InsuranceCustomData : unnamed
    LoanService_v3 <|-- Insurance_v3 : unnamed
```

# Contract Insurance Services - GET: Contract list Insurances

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v2.0
- **Diagram ID**: 147955
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class Contract_Insurance_Services["Contract Insurance Services"]
    class Application_Interface_Model_Application_Interface_Model["Application Interface Model : Application Interface Model"]
    class MOD_01_772_Get_contract_list_insurances_for_self_care["{MOD}01.772 Get contract list insurances for self-care"]
    class InsuranceCustomData["InsuranceCustomData"]
    class LoanService_v2["LoanService_v2"]
    class InsuranceCommodity["InsuranceCommodity"]
    class Insurance["Insurance"]
    class GetContractListInsurancesResponse_v2["GetContractListInsurancesResponse_v2"]
    class GetContractListInsurancesRequest_v2["GetContractListInsurancesRequest_v2"]
    class Contract["Contract"]
    Contract o-- LoanService_v2 : unnamed
    GetContractListInsurancesResponse_v2 o-- Contract : unnamed
    Insurance o-- InsuranceCommodity : unnamed
    Insurance o-- InsuranceCustomData : unnamed
    LoanService_v2 <|-- Insurance : unnamed
    Contract_Insurance_Services ..> GetContractListInsurancesResponse_v2 : unnamed
    Contract_Insurance_Services ..> MOD_01_772_Get_contract_list_insurances_for_self_care : unnamed
    Contract_Insurance_Services ..> MOD_01_772_Get_contract_list_insurances_for_self_care : unnamed
    Contract_Insurance_Services ..> GetContractListInsurancesRequest_v2 : unnamed
```

# Contract Insurance Services - GET: Contract list Insurances

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0
- **Diagram ID**: 161869
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class contractservices["contractservices"]
    class InsuranceCustomData["InsuranceCustomData"]
    class Contract_Insurance_Services["Contract Insurance Services"]
    class Use_Case_Model_Customer_Self_Care_API_Use_Case_Model["Use Case Model :Customer Self-Care API - Use Case Model"]
    class MOD_01_772_Get_contract_list_insurances_for_self_care["{MOD}01.772 Get contract list insurances for self-care"]
    class Contract["Contract"]
    class InsuranceCommodity["InsuranceCommodity"]
    class Insurance["Insurance"]
    class LoanService["LoanService"]
    class GetContractListInsurancesResponse["GetContractListInsurancesResponse"]
    class GetContractListInsurancesRequest["GetContractListInsurancesRequest"]
    class Application_Interface_Model_Application_Interface_Model["Application Interface Model : Application Interface Model"]
    Contract_Insurance_Services ..> GetContractListInsurancesRequest : unnamed
    GetContractListInsurancesResponse o-- Contract : unnamed
    Contract_Insurance_Services ..> GetContractListInsurancesResponse : unnamed
    LoanService <|-- Insurance : unnamed
    Insurance o-- InsuranceCustomData : unnamed
    Insurance o-- InsuranceCommodity : unnamed
    Contract o-- LoanService : unnamed
    Contract_Insurance_Services ..> MOD_01_772_Get_contract_list_insurances_for_self_care : unnamed
    Contract_Insurance_Services ..> MOD_01_772_Get_contract_list_insurances_for_self_care : unnamed
    Contract_Insurance_Services ..> MOD_01_772_Get_contract_list_insurances_for_self_care : unnamed
    contractservices o-- Contract_Insurance_Services : unnamed
```

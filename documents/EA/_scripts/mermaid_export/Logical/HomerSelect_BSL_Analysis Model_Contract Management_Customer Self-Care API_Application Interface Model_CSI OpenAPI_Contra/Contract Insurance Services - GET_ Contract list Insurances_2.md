# Contract Insurance Services - GET: Contract list Insurances

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
    LoanService_v2 --> Contract : unnamed
    Contract --> GetContractListInsurancesResponse_v2 : unnamed
    InsuranceCommodity --> Insurance : unnamed
    InsuranceCustomData --> Insurance : unnamed
    Insurance --> LoanService_v2 : unnamed
    Contract_Insurance_Services --> GetContractListInsurancesResponse_v2 : unnamed
    Contract_Insurance_Services --> MOD_01_772_Get_contract_list_insurances_for_self_care : unnamed
    Contract_Insurance_Services --> MOD_01_772_Get_contract_list_insurances_for_self_care : unnamed
    Contract_Insurance_Services --> GetContractListInsurancesRequest_v2 : unnamed
```

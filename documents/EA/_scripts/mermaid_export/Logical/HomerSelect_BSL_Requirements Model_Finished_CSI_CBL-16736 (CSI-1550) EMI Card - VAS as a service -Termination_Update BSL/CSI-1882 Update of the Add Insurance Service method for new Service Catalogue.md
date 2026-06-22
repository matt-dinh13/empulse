# CSI-1882 Update of the Add Insurance Service method for new Service Catalogue

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods/CSI-1882 Update of the Add Insurance Service method for new Service Catalogue
- **Diagram ID**: 146451
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class MOD_08_347_Add_Insurance_service_on_Contract_service["{MOD}08.347 Add Insurance service on Contract service"]
    class LoanService_v3["LoanService_v3"]
    class Contract_Insurance_Services["Contract Insurance Services"]
    class InsuranceService_v3["InsuranceService_v3"]
    class CreateContractInsurance_v3["CreateContractInsurance_v3"]
    CreateContractInsurance_v3 --> InsuranceService_v3 : unnamed
    Contract_Insurance_Services ..> MOD_08_347_Add_Insurance_service_on_Contract_service : unnamed
    Contract_Insurance_Services ..> LoanService_v3 : unnamed
    Contract_Insurance_Services --> CreateContractInsurance_v3 : unnamed
```

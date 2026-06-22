# Contract IBACK Service status

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract IBACK Service status
- **Diagram ID**: 163435
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class EvaluationStatus["EvaluationStatus"]
    class InterestBackPeriod["InterestBackPeriod"]
    class ServiceData["ServiceData"]
    class InterestBackStatus["InterestBackStatus"]
    class InterestBackStatusParams["InterestBackStatusParams"]
    class ADD_01_830_Get_ContractIBACkSeviceStatus["{ADD} 01.830 Get ContractIBACkSeviceStatus"]
    class InterestBackStatus["InterestBackStatus"]
    InterestBackStatus ..> ADD_01_830_Get_ContractIBACkSeviceStatus : unnamed
    InterestBackStatus --> InterestBackStatusParams : unnamed
    InterestBackStatus --> InterestBackStatus : unnamed
    InterestBackStatus ..> ServiceData : unnamed
    InterestBackStatus ..> InterestBackPeriod : unnamed
    InterestBackPeriod ..> EvaluationStatus : unnamed
```

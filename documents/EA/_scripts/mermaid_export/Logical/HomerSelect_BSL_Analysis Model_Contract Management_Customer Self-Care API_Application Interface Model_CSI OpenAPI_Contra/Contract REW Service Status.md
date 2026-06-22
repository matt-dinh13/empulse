# Contract REW Service Status

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract REW Service Status
- **Diagram ID**: 162016
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ADD_01_820_Get_ContractREWServiceStatus["{ADD} 01.820 Get ContractREWServiceStatus"]
    class EvaluationStatus["EvaluationStatus"]
    class RewardPeriod["RewardPeriod"]
    class ServiceData["ServiceData"]
    class REWServiceEvaluationStatus["REWServiceEvaluationStatus"]
    class REWServiceEvaluationParams["REWServiceEvaluationParams"]
    class REWServiceStatus["REWServiceStatus"]
    REWServiceStatus --> REWServiceEvaluationParams : unnamed
    REWServiceStatus --> REWServiceEvaluationStatus : unnamed
    REWServiceEvaluationStatus ..> ServiceData : unnamed
    REWServiceEvaluationStatus ..> RewardPeriod : unnamed
    RewardPeriod ..> EvaluationStatus : unnamed
    REWServiceStatus ..> ADD_01_820_Get_ContractREWServiceStatus : unnamed
```

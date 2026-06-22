# Getting Insurance Contract statistics

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Getting Insurance Contract statistics
- **Diagram ID**: 142930
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Statistic["Statistic"]
    class Statistics["Statistics"]
    class GetInsuranceContractStatistics["GetInsuranceContractStatistics"]
    class n_11_070_Get_Insurance_Contract_statistics["11.070 Get Insurance Contract statistics"]
    Statistics ..> n_11_070_Get_Insurance_Contract_statistics : unnamed
    Statistics --> GetInsuranceContractStatistics : unnamed
    Statistics --> Statistic : unnamed
```

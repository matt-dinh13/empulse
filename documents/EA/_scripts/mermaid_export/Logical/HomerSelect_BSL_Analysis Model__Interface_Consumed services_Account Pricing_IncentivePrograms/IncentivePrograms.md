# IncentivePrograms

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Account Pricing/IncentivePrograms
- **Diagram ID**: 89863
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class IncentiveProgramsCodeAndName["IncentiveProgramsCodeAndName"]
    class IncentiveProgramsResponse["IncentiveProgramsResponse"]
    class IPStatus["IPStatus"]
    class IncentiveProgramsRequest["IncentiveProgramsRequest"]
    class IncentivePrograms["IncentivePrograms"]
    IncentivePrograms ..> IncentiveProgramsRequest : unnamed
    IncentiveProgramsRequest ..> IPStatus : unnamed
    IncentivePrograms ..> IncentiveProgramsResponse : unnamed
    IncentiveProgramsResponse ..> IncentiveProgramsCodeAndName : unnamed
```

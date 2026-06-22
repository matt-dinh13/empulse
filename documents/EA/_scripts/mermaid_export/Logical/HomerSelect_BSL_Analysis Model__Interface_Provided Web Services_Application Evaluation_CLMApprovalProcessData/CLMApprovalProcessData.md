# CLMApprovalProcessData

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application Evaluation/CLMApprovalProcessData
- **Diagram ID**: 96012
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ApprovalProcessDataRequest["ApprovalProcessDataRequest"]
    class ApprovalProcessDataFault["ApprovalProcessDataFault"]
    class ApprovalProcessDataResponse["ApprovalProcessDataResponse"]
    class CLMApprovalProcessDataWS["CLMApprovalProcessDataWS"]
    CLMApprovalProcessDataWS ..> ApprovalProcessDataResponse : unnamed
    CLMApprovalProcessDataWS ..> ApprovalProcessDataFault : unnamed
    CLMApprovalProcessDataWS ..> ApprovalProcessDataRequest : unnamed
```

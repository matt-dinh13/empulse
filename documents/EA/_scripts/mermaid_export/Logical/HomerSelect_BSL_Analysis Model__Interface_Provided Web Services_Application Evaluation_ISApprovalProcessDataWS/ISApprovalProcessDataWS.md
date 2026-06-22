# ISApprovalProcessDataWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application Evaluation/ISApprovalProcessDataWS
- **Diagram ID**: 112078
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ApprovalProcessDataFault["ApprovalProcessDataFault"]
    class ApprovalProcessDataResponse["ApprovalProcessDataResponse"]
    class ApprovalProcessDataRequest["ApprovalProcessDataRequest"]
    class ISApprovalProcessDataWS["ISApprovalProcessDataWS"]
    ISApprovalProcessDataWS ..> ApprovalProcessDataRequest : unnamed
    ISApprovalProcessDataWS ..> ApprovalProcessDataResponse : unnamed
    ISApprovalProcessDataWS ..> ApprovalProcessDataFault : unnamed
```

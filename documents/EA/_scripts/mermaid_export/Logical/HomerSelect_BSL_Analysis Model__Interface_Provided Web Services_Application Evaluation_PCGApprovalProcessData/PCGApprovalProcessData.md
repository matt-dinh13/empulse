# PCGApprovalProcessData

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application Evaluation/PCGApprovalProcessData
- **Diagram ID**: 96014
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ProductType["ProductType"]
    class ApprovalProcessDataRequest["ApprovalProcessDataRequest"]
    class ApprovalProcessDataFault["ApprovalProcessDataFault"]
    class ApprovalProcessDataResponse["ApprovalProcessDataResponse"]
    class PCGApprovalProcessDataWS["PCGApprovalProcessDataWS"]
    PCGApprovalProcessDataWS ..> ApprovalProcessDataResponse : unnamed
    PCGApprovalProcessDataWS ..> ApprovalProcessDataFault : unnamed
    PCGApprovalProcessDataWS ..> ApprovalProcessDataRequest : unnamed
    ApprovalProcessDataRequest ..> ProductType : unnamed
```

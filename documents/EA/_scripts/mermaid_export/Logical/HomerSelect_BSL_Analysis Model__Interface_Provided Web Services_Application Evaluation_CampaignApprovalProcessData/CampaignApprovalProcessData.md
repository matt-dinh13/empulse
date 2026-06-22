# CampaignApprovalProcessData

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application Evaluation/CampaignApprovalProcessData
- **Diagram ID**: 96011
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ApprovalProcessDataRequest["ApprovalProcessDataRequest"]
    class ApprovalProcessDataFault["ApprovalProcessDataFault"]
    class ApprovalProcessDataResponse["ApprovalProcessDataResponse"]
    class CampaignApprovalProcessDataWS["CampaignApprovalProcessDataWS"]
    CampaignApprovalProcessDataWS ..> ApprovalProcessDataResponse : unnamed
    CampaignApprovalProcessDataWS ..> ApprovalProcessDataFault : unnamed
    CampaignApprovalProcessDataWS ..> ApprovalProcessDataRequest : unnamed
```

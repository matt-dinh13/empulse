# Contract PER Service Requests - get preview

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests
- **Diagram ID**: 163959
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class PERResult["PERResult"]
    class ADD_PERServiceRequestPreview["{ADD}PERServiceRequestPreview"]
    class ADD_PERServiceRequestParams["{ADD}PERServiceRequestParams"]
    class requests["requests"]
    class PERServiceRequests["PERServiceRequests"]
    class n_01_787_Get_ContractPERRequest_preview_service["01.787 Get ContractPERRequest preview service"]
    class ADD_PERServiceRequests["{ADD}PERServiceRequests"]
    ADD_PERServiceRequests ..> n_01_787_Get_ContractPERRequest_preview_service : unnamed
    PERServiceRequests o-- ADD_PERServiceRequests : unnamed
    requests <|-- PERServiceRequests : unnamed
    ADD_PERServiceRequests --> ADD_PERServiceRequestParams : unnamed
    ADD_PERServiceRequests --> ADD_PERServiceRequestParams : unnamed
    ADD_PERServiceRequests --> ADD_PERServiceRequestPreview : unnamed
    ADD_PERServiceRequestPreview ..> PERResult : unnamed
```

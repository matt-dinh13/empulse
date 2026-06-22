# Contract PER Service Requests - create request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests
- **Diagram ID**: 163958
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class ADD_PERServiceRequest["{ADD}PERServiceRequest"]
    class PERResult["PERResult"]
    class ADD_PERServiceRequestParams["{ADD}PERServiceRequestParams"]
    class n_01_788_Create_ContractPERRequest_service["01.788 Create ContractPERRequest service"]
    class requests["requests"]
    class PERServiceRequests["PERServiceRequests"]
    class ADD_PERServiceRequests["{ADD}PERServiceRequests"]
    PERServiceRequests o-- ADD_PERServiceRequests : unnamed
    requests <|-- PERServiceRequests : unnamed
    ADD_PERServiceRequests ..> n_01_788_Create_ContractPERRequest_service : unnamed
    ADD_PERServiceRequests --> ADD_PERServiceRequestParams : unnamed
    ADD_PERServiceRequests --> ADD_PERServiceRequestParams : unnamed
    ADD_PERServiceRequest ..> PERResult : unnamed
    ADD_PERServiceRequests --> ADD_PERServiceRequest : unnamed
```

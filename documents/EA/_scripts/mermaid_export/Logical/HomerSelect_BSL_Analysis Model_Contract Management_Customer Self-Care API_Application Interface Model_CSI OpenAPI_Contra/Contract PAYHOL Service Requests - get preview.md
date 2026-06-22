# Contract PAYHOL Service Requests - get preview

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PAYHOL Service Requests
- **Diagram ID**: 136509
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class PAYHOLResult["PAYHOLResult"]
    class PAYHOLServiceRequestPreview["PAYHOLServiceRequestPreview"]
    class PAYHOLServiceRequestParams["PAYHOLServiceRequestParams"]
    class n_01_796_Get_ContractPayholRequest_preview_service["01.796 Get ContractPayholRequest preview service"]
    class PAYHOLServiceRequests["PAYHOLServiceRequests"]
    class PAYHOLServiceRequests["PAYHOLServiceRequests"]
    class requests["requests"]
    requests <|-- PAYHOLServiceRequests : unnamed
    PAYHOLServiceRequests o-- PAYHOLServiceRequests : unnamed
    PAYHOLServiceRequests ..> n_01_796_Get_ContractPayholRequest_preview_service : unnamed
    PAYHOLServiceRequests --> PAYHOLServiceRequestParams : unnamed
    PAYHOLServiceRequests --> PAYHOLServiceRequestParams : unnamed
    PAYHOLServiceRequests --> PAYHOLServiceRequestPreview : unnamed
    PAYHOLServiceRequestPreview ..> PAYHOLResult : unnamed
```

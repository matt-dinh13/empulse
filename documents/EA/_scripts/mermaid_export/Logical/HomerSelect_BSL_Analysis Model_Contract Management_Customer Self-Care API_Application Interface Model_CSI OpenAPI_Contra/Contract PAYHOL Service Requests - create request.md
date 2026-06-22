# Contract PAYHOL Service Requests - create request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PAYHOL Service Requests
- **Diagram ID**: 136510
- **Elements**: 8
- **Connectors**: 8

```mermaid
classDiagram
    class ADD_DocumentPrintout["{ADD}DocumentPrintout"]
    class PAYHOLServiceRequest["PAYHOLServiceRequest"]
    class n_01_797_Create_ContractPayholRequest_service["01.797 Create ContractPayholRequest service"]
    class PAYHOLResult["PAYHOLResult"]
    class PAYHOLServiceRequestParams["PAYHOLServiceRequestParams"]
    class PAYHOLServiceRequests["PAYHOLServiceRequests"]
    class PAYHOLServiceRequests["PAYHOLServiceRequests"]
    class requests["requests"]
    requests <|-- PAYHOLServiceRequests : unnamed
    PAYHOLServiceRequests o-- PAYHOLServiceRequests : unnamed
    PAYHOLServiceRequests --> PAYHOLServiceRequestParams : unnamed
    PAYHOLServiceRequests --> PAYHOLServiceRequestParams : unnamed
    PAYHOLServiceRequest ..> PAYHOLResult : unnamed
    PAYHOLServiceRequests ..> n_01_797_Create_ContractPayholRequest_service : unnamed
    PAYHOLServiceRequests --> PAYHOLServiceRequest : unnamed
    PAYHOLServiceRequest --> ADD_DocumentPrintout : unnamed
```

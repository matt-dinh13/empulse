# Contract LRES Service Requests - create request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract LRES Service Requests
- **Diagram ID**: 131792
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class n_01_810_Create_ContractLRESRequest_service["01.810 Create ContractLRESRequest service"]
    class ADD_LRESServiceRequest["{ADD}LRESServiceRequest"]
    class ADD_LRESServiceRequestCreateParams["{ADD}LRESServiceRequestCreateParams"]
    class ADD_LRESServiceRequests["{ADD}LRESServiceRequests"]
    class LRESServiceRequests["LRESServiceRequests"]
    class requests["requests"]
    requests <|-- LRESServiceRequests : unnamed
    LRESServiceRequests o-- ADD_LRESServiceRequests : unnamed
    ADD_LRESServiceRequests --> ADD_LRESServiceRequestCreateParams : unnamed
    ADD_LRESServiceRequests --> ADD_LRESServiceRequest : unnamed
    ADD_LRESServiceRequests --> ADD_LRESServiceRequest : unnamed
    ADD_LRESServiceRequests ..> n_01_810_Create_ContractLRESRequest_service : unnamed
```

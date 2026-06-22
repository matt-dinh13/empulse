# Contract LRES Service Requests - confirm offer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract LRES Service Requests
- **Diagram ID**: 131793
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class ADD_LRESServiceRequestConfirmParams["{ADD}LRESServiceRequestConfirmParams"]
    class n_01_812_Confirm_ContractLRESRequest_offer_service["01.812 Confirm ContractLRESRequest offer service"]
    class ADD_LRESServiceRequest["{ADD}LRESServiceRequest"]
    class ADD_LRESServiceRequests["{ADD}LRESServiceRequests"]
    class LRESServiceRequests["LRESServiceRequests"]
    class requests["requests"]
    ADD_LRESServiceRequests --> ADD_LRESServiceRequestConfirmParams : unnamed
    ADD_LRESServiceRequests ..> n_01_812_Confirm_ContractLRESRequest_offer_service : unnamed
    requests <|-- LRESServiceRequests : unnamed
    LRESServiceRequests o-- ADD_LRESServiceRequests : unnamed
    ADD_LRESServiceRequests --> ADD_LRESServiceRequest : unnamed
    ADD_LRESServiceRequests --> ADD_LRESServiceRequest : unnamed
```

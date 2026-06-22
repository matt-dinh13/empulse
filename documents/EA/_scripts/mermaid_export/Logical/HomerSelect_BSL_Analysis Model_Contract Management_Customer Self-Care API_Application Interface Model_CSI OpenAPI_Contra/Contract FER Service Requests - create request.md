# Contract FER Service Requests - create request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract FER Service Requests
- **Diagram ID**: 131786
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ADD_CreateFERServiceRequestParams["{ADD}CreateFERServiceRequestParams"]
    class ADD_FERServiceRequest["{ADD}FERServiceRequest"]
    class FERServiceRequests["FERServiceRequests"]
    class requests["requests"]
    class n_01_786_Create_ContractFERRequest_service["01.786 Create ContractFERRequest service"]
    class ADD_FERServiceRequests["{ADD}FERServiceRequests"]
    class EarlyRepaymentResult["EarlyRepaymentResult"]
    ADD_FERServiceRequest --> EarlyRepaymentResult : unnamed
    ADD_FERServiceRequests ..> n_01_786_Create_ContractFERRequest_service : unnamed
    requests <|-- FERServiceRequests : unnamed
    FERServiceRequests o-- ADD_FERServiceRequests : unnamed
    ADD_FERServiceRequests --> ADD_FERServiceRequest : unnamed
    ADD_FERServiceRequests --> ADD_CreateFERServiceRequestParams : unnamed
```

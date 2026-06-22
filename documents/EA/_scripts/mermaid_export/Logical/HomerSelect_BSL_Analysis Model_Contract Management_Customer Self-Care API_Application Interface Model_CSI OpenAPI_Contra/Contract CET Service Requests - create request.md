# Contract CET Service Requests - create request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CET Service Requests
- **Diagram ID**: 151338
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class CreateCETServiceRequestParams["CreateCETServiceRequestParams"]
    class CETServiceRequest["CETServiceRequest"]
    class EarlyRepaymentResult["EarlyRepaymentResult"]
    class CETServiceRequests["CETServiceRequests"]
    class CETServiceRequests["CETServiceRequests"]
    class requests["requests"]
    class n_01_784_Create_ContractCETRequest_service["01.784 Create ContractCETRequest service"]
    CETServiceRequests ..> n_01_784_Create_ContractCETRequest_service : unnamed
    requests <|-- CETServiceRequests : unnamed
    CETServiceRequests o-- CETServiceRequests : unnamed
    CETServiceRequest ..> EarlyRepaymentResult : unnamed
    CETServiceRequests ..> CETServiceRequest : unnamed
    CETServiceRequests ..> CreateCETServiceRequestParams : unnamed
```

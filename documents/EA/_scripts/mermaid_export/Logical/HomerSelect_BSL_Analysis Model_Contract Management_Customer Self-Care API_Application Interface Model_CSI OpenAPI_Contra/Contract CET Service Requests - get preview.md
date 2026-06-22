# Contract CET Service Requests - get preview

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CET Service Requests
- **Diagram ID**: 151337
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class ReasonType["ReasonType"]
    class EarlyRepaymentResult["EarlyRepaymentResult"]
    class CETServiceRequestPreview["CETServiceRequestPreview"]
    class GetCETServiceRequestParams["GetCETServiceRequestParams"]
    class CETServiceRequests["CETServiceRequests"]
    class CETServiceRequests["CETServiceRequests"]
    class requests["requests"]
    class n_01_783_Get_ContractCETRequest_preview["01.783 Get ContractCETRequest preview"]
    CETServiceRequests ..> n_01_783_Get_ContractCETRequest_preview : unnamed
    requests <|-- CETServiceRequests : unnamed
    CETServiceRequests o-- CETServiceRequests : unnamed
    CETServiceRequests --> GetCETServiceRequestParams : unnamed
    CETServiceRequests --> CETServiceRequestPreview : unnamed
    CETServiceRequestPreview --> EarlyRepaymentResult : unnamed
    CETServiceRequestPreview --> ReasonType : unnamed
```

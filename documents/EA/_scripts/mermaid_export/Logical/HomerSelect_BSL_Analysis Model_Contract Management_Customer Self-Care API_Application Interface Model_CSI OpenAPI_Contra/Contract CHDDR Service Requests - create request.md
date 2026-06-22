# Contract CHDDR Service Requests - create request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract CHDDR Service Requests
- **Diagram ID**: 131789
- **Elements**: 9
- **Connectors**: 9

```mermaid
classDiagram
    class ADD_CHDDRDueDaySelection["{ADD}CHDDRDueDaySelection"]
    class ADD_CHDDRInstallmentSelection["{ADD}CHDDRInstallmentSelection"]
    class ADD_CHDDRResult["{ADD}CHDDRResult"]
    class ADD_CHDDRServiceRequest["{ADD}CHDDRServiceRequest"]
    class n_01_795_Create_ContractCHDDRequest_service["01.795 Create ContractCHDDRequest service"]
    class requests["requests"]
    class ADD_CHDDRServiceRequestParams["{ADD}CHDDRServiceRequestParams"]
    class CHDDRServiceRequests["CHDDRServiceRequests"]
    class ADD_CHDDRServiceRequests["{ADD}CHDDRServiceRequests"]
    CHDDRServiceRequests o-- ADD_CHDDRServiceRequests : unnamed
    ADD_CHDDRServiceRequests --> ADD_CHDDRServiceRequestParams : unnamed
    ADD_CHDDRServiceRequests --> ADD_CHDDRServiceRequestParams : unnamed
    requests <|-- CHDDRServiceRequests : unnamed
    ADD_CHDDRServiceRequests ..> n_01_795_Create_ContractCHDDRequest_service : unnamed
    ADD_CHDDRServiceRequests --> ADD_CHDDRServiceRequest : unnamed
    ADD_CHDDRServiceRequest ..> ADD_CHDDRResult : unnamed
    ADD_CHDDRResult ..> ADD_CHDDRInstallmentSelection : unnamed
    ADD_CHDDRResult ..> ADD_CHDDRDueDaySelection : unnamed
```

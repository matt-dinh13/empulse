# Contract CHDDR Service Requests - get preview

```mermaid
classDiagram
    class ADD_CHDDRDueDaySelection["{ADD}CHDDRDueDaySelection"]
    class ADD_CHDDRInstallmentSelection["{ADD}CHDDRInstallmentSelection"]
    class ADD_CHDDRResult["{ADD}CHDDRResult"]
    class n_01_794_Get_ContractCHDDRequest_preview_service["01.794 Get ContractCHDDRequest preview service"]
    class requests["requests"]
    class ADD_CHDDRServiceRequestPreview["{ADD}CHDDRServiceRequestPreview"]
    class ADD_CHDDRServiceRequestParams["{ADD}CHDDRServiceRequestParams"]
    class CHDDRServiceRequests["CHDDRServiceRequests"]
    class ADD_CHDDRServiceRequests["{ADD}CHDDRServiceRequests"]
    ADD_CHDDRServiceRequests --> CHDDRServiceRequests : unnamed
    ADD_CHDDRServiceRequests --> ADD_CHDDRServiceRequestParams : unnamed
    ADD_CHDDRServiceRequests --> ADD_CHDDRServiceRequestParams : unnamed
    ADD_CHDDRServiceRequests --> ADD_CHDDRServiceRequestPreview : unnamed
    CHDDRServiceRequests --> requests : unnamed
    ADD_CHDDRServiceRequests --> n_01_794_Get_ContractCHDDRequest_preview_service : unnamed
    ADD_CHDDRServiceRequestPreview --> ADD_CHDDRResult : unnamed
    ADD_CHDDRResult --> ADD_CHDDRInstallmentSelection : unnamed
    ADD_CHDDRResult --> ADD_CHDDRDueDaySelection : unnamed
```

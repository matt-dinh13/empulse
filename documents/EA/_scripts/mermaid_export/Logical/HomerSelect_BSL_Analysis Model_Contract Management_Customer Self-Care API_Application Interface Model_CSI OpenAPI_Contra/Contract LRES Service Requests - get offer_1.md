# Contract LRES Service Requests - get offer

```mermaid
classDiagram
    class ADD_LRESOffer["{ADD}LRESOffer"]
    class ADD_LRESServiceRequestGetOfferParams["{ADD}LRESServiceRequestGetOfferParams"]
    class n_01_811_Get_ContractLRESRequest_offer_service["01.811 Get ContractLRESRequest offer service"]
    class ADD_LRESLoanServiceRequest["{ADD}LRESLoanServiceRequest"]
    class ADD_LRESServiceRequestOffers["{ADD}LRESServiceRequestOffers"]
    class ADD_LRESServiceRequests["{ADD}LRESServiceRequests"]
    class LRESServiceRequests["LRESServiceRequests"]
    class requests["requests"]
    ADD_LRESServiceRequests --> ADD_LRESServiceRequestGetOfferParams : unnamed
    ADD_LRESServiceRequests --> n_01_811_Get_ContractLRESRequest_offer_service : unnamed
    ADD_LRESLoanServiceRequest --> ADD_LRESOffer : unnamed
    LRESServiceRequests --> requests : unnamed
    ADD_LRESServiceRequests --> LRESServiceRequests : unnamed
    ADD_LRESServiceRequests --> ADD_LRESServiceRequestOffers : unnamed
    ADD_LRESServiceRequestOffers --> ADD_LRESLoanServiceRequest : unnamed
```

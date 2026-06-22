# ApplicationManagementWS_v23 - AcceptOffer

```mermaid
classDiagram
    class n_01_167_Accept_offer_externally["01.167 Accept offer externally"]
    class AcceptOfferResultCode["AcceptOfferResultCode"]
    class AcceptOfferResponse["AcceptOfferResponse"]
    class AcceptOfferRequest["AcceptOfferRequest"]
    class AcceptOfferFault["AcceptOfferFault"]
    class ApplicationManagementWS_v23["ApplicationManagementWS_v23"]
    ApplicationManagementWS_v23 --> AcceptOfferFault : unnamed
    ApplicationManagementWS_v23 --> AcceptOfferRequest : unnamed
    ApplicationManagementWS_v23 --> AcceptOfferResponse : unnamed
    AcceptOfferFault --> AcceptOfferResultCode : unnamed
    ApplicationManagementWS_v23 --> n_01_167_Accept_offer_externally : unnamed
```

# ApplicationManagementWS_v22 - RefuseOffers

```mermaid
classDiagram
    class n_01_168_Refuse_offers_externally["01.168 Refuse offers externally"]
    class RefuseOffersResultCode["RefuseOffersResultCode"]
    class RefuseOffersResponse["RefuseOffersResponse"]
    class RefuseOffersRequest["RefuseOffersRequest"]
    class RefuseOfferFault["RefuseOfferFault"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 --> RefuseOfferFault : unnamed
    ApplicationManagementWS_v22 --> RefuseOffersRequest : unnamed
    ApplicationManagementWS_v22 --> RefuseOffersResponse : unnamed
    RefuseOfferFault --> RefuseOffersResultCode : unnamed
    ApplicationManagementWS_v22 --> n_01_168_Refuse_offers_externally : unnamed
```

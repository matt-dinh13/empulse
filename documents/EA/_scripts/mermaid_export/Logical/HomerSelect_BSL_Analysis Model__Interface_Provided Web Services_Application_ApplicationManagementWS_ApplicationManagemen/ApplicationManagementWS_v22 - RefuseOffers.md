# ApplicationManagementWS_v22 - RefuseOffers

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22
- **Diagram ID**: 158250
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class n_01_168_Refuse_offers_externally["01.168 Refuse offers externally"]
    class RefuseOffersResultCode["RefuseOffersResultCode"]
    class RefuseOffersResponse["RefuseOffersResponse"]
    class RefuseOffersRequest["RefuseOffersRequest"]
    class RefuseOfferFault["RefuseOfferFault"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 ..> RefuseOfferFault : unnamed
    ApplicationManagementWS_v22 ..> RefuseOffersRequest : unnamed
    ApplicationManagementWS_v22 ..> RefuseOffersResponse : unnamed
    RefuseOfferFault ..> RefuseOffersResultCode : unnamed
    n_01_168_Refuse_offers_externally <|.. ApplicationManagementWS_v22 : unnamed
```

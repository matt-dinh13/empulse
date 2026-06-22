# ApplicationManagementWS_v23 - RefuseOffers

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23
- **Diagram ID**: 153292
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class n_01_168_Refuse_offers_externally["01.168 Refuse offers externally"]
    class RefuseOffersResultCode["RefuseOffersResultCode"]
    class RefuseOffersResponse["RefuseOffersResponse"]
    class RefuseOffersRequest["RefuseOffersRequest"]
    class RefuseOfferFault["RefuseOfferFault"]
    class ApplicationManagementWS_v23["ApplicationManagementWS_v23"]
    ApplicationManagementWS_v23 ..> RefuseOfferFault : unnamed
    ApplicationManagementWS_v23 ..> RefuseOffersRequest : unnamed
    ApplicationManagementWS_v23 ..> RefuseOffersResponse : unnamed
    RefuseOfferFault ..> RefuseOffersResultCode : unnamed
    n_01_168_Refuse_offers_externally <|.. ApplicationManagementWS_v23 : unnamed
```

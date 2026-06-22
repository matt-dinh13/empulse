# ApplicationOfferManagementWS_v7 - Refuse Offers

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7
- **Diagram ID**: 157798
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class n_01_168_Refuse_offers_externally["01.168 Refuse offers externally"]
    class DEL_RefuseOffersResultCode["{DEL}RefuseOffersResultCode"]
    class DEL_RefuseOffersRequest["{DEL}RefuseOffersRequest"]
    class DEL_RefuseOfferFault["{DEL}RefuseOfferFault"]
    class DEL_RefuseOffersResponse["{DEL}RefuseOffersResponse"]
    class DEL_ApplicationOfferManagementWS_v7["{DEL}ApplicationOfferManagementWS_v7"]
    DEL_ApplicationOfferManagementWS_v7 ..> DEL_RefuseOffersResponse : unnamed
    DEL_ApplicationOfferManagementWS_v7 ..> DEL_RefuseOfferFault : unnamed
    DEL_ApplicationOfferManagementWS_v7 ..> DEL_RefuseOffersRequest : unnamed
    DEL_RefuseOfferFault ..> DEL_RefuseOffersResultCode : unnamed
    n_01_168_Refuse_offers_externally <|.. DEL_ApplicationOfferManagementWS_v7 : unnamed
```

# ApplicationManagementWS_v23 - AcceptOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23
- **Diagram ID**: 153293
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class n_01_167_Accept_offer_externally["01.167 Accept offer externally"]
    class AcceptOfferResultCode["AcceptOfferResultCode"]
    class AcceptOfferResponse["AcceptOfferResponse"]
    class AcceptOfferRequest["AcceptOfferRequest"]
    class AcceptOfferFault["AcceptOfferFault"]
    class ApplicationManagementWS_v23["ApplicationManagementWS_v23"]
    ApplicationManagementWS_v23 ..> AcceptOfferFault : unnamed
    ApplicationManagementWS_v23 ..> AcceptOfferRequest : unnamed
    ApplicationManagementWS_v23 ..> AcceptOfferResponse : unnamed
    AcceptOfferFault ..> AcceptOfferResultCode : unnamed
    n_01_167_Accept_offer_externally <|.. ApplicationManagementWS_v23 : unnamed
```

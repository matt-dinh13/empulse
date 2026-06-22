# {ADD}ApplicationManagementWS_v22 - AcceptOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22
- **Diagram ID**: 158251
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class n_01_167_Accept_offer_externally["01.167 Accept offer externally"]
    class AcceptOfferResultCode["AcceptOfferResultCode"]
    class AcceptOfferResponse["AcceptOfferResponse"]
    class AcceptOfferRequest["AcceptOfferRequest"]
    class AcceptOfferFault["AcceptOfferFault"]
    class ApplicationManagementWS_v22["ApplicationManagementWS_v22"]
    ApplicationManagementWS_v22 ..> AcceptOfferFault : unnamed
    ApplicationManagementWS_v22 ..> AcceptOfferRequest : unnamed
    ApplicationManagementWS_v22 ..> AcceptOfferResponse : unnamed
    AcceptOfferFault ..> AcceptOfferResultCode : unnamed
    n_01_167_Accept_offer_externally <|.. ApplicationManagementWS_v22 : unnamed
```

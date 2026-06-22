# CustomerOfferWS_v21 - UpdateOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21
- **Diagram ID**: 157936
- **Elements**: 13
- **Connectors**: 12

```mermaid
classDiagram
    class MOD_01_170_Update_offer_externally["{MOD}01.170 Update offer externally"]
    class Service["Service"]
    class ValidationError["ValidationError"]
    class MessageAttribute["MessageAttribute"]
    class InsuranceService["InsuranceService"]
    class InsuranceCustomData["InsuranceCustomData"]
    class CardService["CardService"]
    class KeyValueType["KeyValueType"]
    class UpdateOfferResultCode["UpdateOfferResultCode"]
    class UpdateOfferResponse["UpdateOfferResponse"]
    class UpdateOfferRequest["UpdateOfferRequest"]
    class UpdateOfferFault["UpdateOfferFault"]
    class CustomerOfferWS_21["CustomerOfferWS_21"]
    CustomerOfferWS_21 ..> UpdateOfferFault : unnamed
    CustomerOfferWS_21 ..> UpdateOfferRequest : unnamed
    CustomerOfferWS_21 ..> UpdateOfferResponse : unnamed
    UpdateOfferFault ..> UpdateOfferResultCode : unnamed
    KeyValueType <|-- MessageAttribute : unnamed
    InsuranceService ..> InsuranceCustomData : unnamed
    ValidationError ..> MessageAttribute : unnamed
    UpdateOfferFault ..> ValidationError : unnamed
    Service <|-- InsuranceService : unnamed
    Service <|-- CardService : unnamed
    UpdateOfferRequest ..> Service : unnamed
    MOD_01_170_Update_offer_externally <|.. CustomerOfferWS_21 : unnamed
```

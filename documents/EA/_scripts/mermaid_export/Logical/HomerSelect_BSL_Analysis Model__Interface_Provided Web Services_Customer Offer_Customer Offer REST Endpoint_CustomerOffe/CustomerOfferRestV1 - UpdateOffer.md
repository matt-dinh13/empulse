# CustomerOfferRestV1 - UpdateOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1
- **Diagram ID**: 164364
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class UpdateServiceType["UpdateServiceType"]
    class InsuranceServiceTypeTO["InsuranceServiceTypeTO"]
    class InsuranceCustomDataTO["InsuranceCustomDataTO"]
    class CardServiceTypeTO["CardServiceTypeTO"]
    class UpdateServiceTO["UpdateServiceTO"]
    class UpdateCustomerOfferServicesTO["UpdateCustomerOfferServicesTO"]
    class MOD_01_170_Update_offer_externally["{MOD}01.170 Update offer externally"]
    class Services["Services"]
    class CustomerOffers["CustomerOffers"]
    class BSL["BSL"]
    BSL o-- CustomerOffers : /v1.0/customerOffers
    CustomerOffers o-- Services : /{offerCode}/services
    Services ..> UpdateCustomerOfferServicesTO : unnamed
    MOD_01_170_Update_offer_externally <|.. Services : unnamed
    UpdateCustomerOfferServicesTO ..> UpdateServiceTO : unnamed
    UpdateServiceTO ..> UpdateServiceType : unnamed
    UpdateServiceTO <|-- CardServiceTypeTO : unnamed
    UpdateServiceTO <|-- InsuranceServiceTypeTO : unnamed
    InsuranceServiceTypeTO ..> InsuranceCustomDataTO : unnamed
```

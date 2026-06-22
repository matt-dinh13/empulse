# CustomerOfferRestV2 - UpdateOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2
- **Diagram ID**: 164369
- **Elements**: 10
- **Connectors**: 8

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
    CustomerOffers o-- Services : /{offerCode}/services
    MOD_01_170_Update_offer_externally <|.. Services : unnamed
    Services ..> UpdateCustomerOfferServicesTO : unnamed
    UpdateCustomerOfferServicesTO ..> UpdateServiceTO : unnamed
    UpdateServiceTO ..> UpdateServiceType : unnamed
    UpdateServiceTO <|-- CardServiceTypeTO : unnamed
    UpdateServiceTO <|-- InsuranceServiceTypeTO : unnamed
    InsuranceServiceTypeTO ..> InsuranceCustomDataTO : unnamed
```

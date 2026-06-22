# CustomerOffer - common

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20/CustomerOffer - common
- **Diagram ID**: 157789
- **Elements**: 13
- **Connectors**: 13

```mermaid
classDiagram
    class DEL_CustomData["{DEL}CustomData"]
    class DEL_Product["{DEL}Product"]
    class DEL_Fee["{DEL}Fee"]
    class DEL_Tariff_Item["{DEL}Tariff Item"]
    class DEL_RELIPOffer["{DEL}RELIPOffer"]
    class DEL_Service_Category["{DEL}Service Category"]
    class DEL_ServiceType["{DEL}ServiceType"]
    class DEL_InsuranceProgram["{DEL}InsuranceProgram"]
    class DEL_Commodity["{DEL}Commodity"]
    class DEL_Installment["{DEL}Installment"]
    class DEL_Service["{DEL}Service"]
    class DEL_TermsAndConditions["{DEL}TermsAndConditions"]
    class DEL_CustomerOffer["{DEL}CustomerOffer"]
    DEL_CustomerOffer ..> DEL_TermsAndConditions : unnamed
    DEL_Fee ..> DEL_Service : unnamed
    DEL_CustomerOffer ..> DEL_Service : unnamed
    DEL_CustomerOffer ..> DEL_Installment : unnamed
    DEL_CustomerOffer ..> DEL_Commodity : unnamed
    DEL_Service ..> DEL_InsuranceProgram : unnamed
    DEL_Service ..> DEL_ServiceType : unnamed
    DEL_ServiceType ..> DEL_Service_Category : unnamed
    DEL_Service ..> DEL_RELIPOffer : unnamed
    DEL_Service ..> DEL_Tariff_Item : unnamed
    DEL_CustomerOffer ..> DEL_Fee : unnamed
    DEL_CustomerOffer ..> DEL_Product : unnamed
    DEL_Service ..> DEL_CustomData : unnamed
```

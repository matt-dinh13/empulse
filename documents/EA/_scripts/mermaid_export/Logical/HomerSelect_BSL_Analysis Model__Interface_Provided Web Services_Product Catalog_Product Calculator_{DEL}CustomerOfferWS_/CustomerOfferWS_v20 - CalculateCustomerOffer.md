# CustomerOfferWS_v20 - CalculateCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20
- **Diagram ID**: 157786
- **Elements**: 13
- **Connectors**: 13

```mermaid
classDiagram
    class DEL_ProductSets["{DEL}ProductSets"]
    class n_02_820_Calculate_Product_Offers_for_External_system["02.820 Calculate Product Offers for External system"]
    class DEL_Currency["{DEL}Currency"]
    class DEL_ServiceTypePreference["{DEL}ServiceTypePreference"]
    class DEL_Qualification_Criteria["{DEL}Qualification Criteria"]
    class DEL_LoanOption["{DEL}LoanOption"]
    class DEL_Commodity["{DEL}Commodity"]
    class DEL_CalculateCustomerOfferResultCode["{DEL}CalculateCustomerOfferResultCode"]
    class DEL_CustomerOffer["{DEL}CustomerOffer"]
    class DEL_CalculateCustomerOfferRequest["{DEL}CalculateCustomerOfferRequest"]
    class DEL_CalculateCustomerOfferFault["{DEL}CalculateCustomerOfferFault"]
    class DEL_CalculateCustomerOfferResponse["{DEL}CalculateCustomerOfferResponse"]
    class DEL_CustomerOfferWS_20["{DEL}CustomerOfferWS_20"]
    DEL_CustomerOfferWS_20 ..> DEL_CalculateCustomerOfferResponse : unnamed
    DEL_CustomerOfferWS_20 ..> DEL_CalculateCustomerOfferFault : unnamed
    DEL_CustomerOfferWS_20 ..> DEL_CalculateCustomerOfferRequest : unnamed
    DEL_CalculateCustomerOfferResponse ..> DEL_CustomerOffer : unnamed
    DEL_CalculateCustomerOfferFault ..> DEL_CalculateCustomerOfferResultCode : unnamed
    DEL_CalculateCustomerOfferRequest ..> DEL_Commodity : unnamed
    DEL_CustomerOffer ..> DEL_Commodity : unnamed
    DEL_CalculateCustomerOfferRequest ..> DEL_LoanOption : unnamed
    DEL_CalculateCustomerOfferRequest ..> DEL_Qualification_Criteria : unnamed
    DEL_CalculateCustomerOfferRequest ..> DEL_ServiceTypePreference : unnamed
    DEL_CalculateCustomerOfferRequest ..> DEL_Currency : unnamed
    n_02_820_Calculate_Product_Offers_for_External_system <|.. DEL_CustomerOfferWS_20 : unnamed
    DEL_CalculateCustomerOfferRequest ..> DEL_ProductSets : unnamed
```

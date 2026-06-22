# CustomerOfferWS_v21 - CalculateCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21
- **Diagram ID**: 157933
- **Elements**: 13
- **Connectors**: 13

```mermaid
classDiagram
    class ProductSets["ProductSets"]
    class n_02_820_Calculate_Product_Offers_for_External_system["02.820 Calculate Product Offers for External system"]
    class Currency["Currency"]
    class ServiceTypePreference["ServiceTypePreference"]
    class Qualification_Criteria["Qualification Criteria"]
    class LoanOption["LoanOption"]
    class Commodity["Commodity"]
    class CalculateCustomerOfferResultCode["CalculateCustomerOfferResultCode"]
    class CustomerOffer["CustomerOffer"]
    class CalculateCustomerOfferRequest["CalculateCustomerOfferRequest"]
    class CalculateCustomerOfferFault["CalculateCustomerOfferFault"]
    class CalculateCustomerOfferResponse["CalculateCustomerOfferResponse"]
    class CustomerOfferWS_21["CustomerOfferWS_21"]
    CustomerOfferWS_21 ..> CalculateCustomerOfferResponse : unnamed
    CustomerOfferWS_21 ..> CalculateCustomerOfferFault : unnamed
    CustomerOfferWS_21 ..> CalculateCustomerOfferRequest : unnamed
    CalculateCustomerOfferResponse ..> CustomerOffer : unnamed
    CalculateCustomerOfferFault ..> CalculateCustomerOfferResultCode : unnamed
    CalculateCustomerOfferRequest ..> Commodity : unnamed
    CustomerOffer ..> Commodity : unnamed
    CalculateCustomerOfferRequest ..> LoanOption : unnamed
    CalculateCustomerOfferRequest ..> Qualification_Criteria : unnamed
    CalculateCustomerOfferRequest ..> ServiceTypePreference : unnamed
    CalculateCustomerOfferRequest ..> Currency : unnamed
    n_02_820_Calculate_Product_Offers_for_External_system <|.. CustomerOfferWS_21 : unnamed
    CalculateCustomerOfferRequest ..> ProductSets : unnamed
```

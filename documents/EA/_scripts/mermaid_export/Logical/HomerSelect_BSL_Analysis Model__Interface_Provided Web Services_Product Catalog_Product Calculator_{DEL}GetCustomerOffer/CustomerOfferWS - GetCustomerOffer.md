# CustomerOfferWS - GetCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCustomerOffer
- **Diagram ID**: 157920
- **Elements**: 10
- **Connectors**: 6

```mermaid
classDiagram
    class Use_Case_Product_Calculator_for_External_system_Provide_Data["Use Case : Product Calculator for External system - Provide Data"]
    class DEL_GetCustomerOfferResultCode["{DEL}GetCustomerOfferResultCode"]
    class n_02_835_Provide_Product_Offers_for_External_system["02.835 Provide Product Offers for External system"]
    class DEL_GetCustomerOfferFault["{DEL}GetCustomerOfferFault"]
    class DEL_GetCustomerOfferResponse["{DEL}GetCustomerOfferResponse"]
    class DEL_GetCustomerOfferRequest["{DEL}GetCustomerOfferRequest"]
    class Product_Calculator_CustomerOfferWS["Product Calculator : CustomerOfferWS"]
    class CustomerOffer_COMMON_CustomerOffer["CustomerOffer - COMMON :CustomerOffer"]
    class DEL_CustomerOffer["{DEL}CustomerOffer"]
    class DEL_CustomerOfferWS["{DEL}CustomerOfferWS"]
    DEL_GetCustomerOfferResponse ..> DEL_CustomerOffer : unnamed
    DEL_GetCustomerOfferFault ..> DEL_GetCustomerOfferResultCode : unnamed
    DEL_CustomerOfferWS ..> DEL_GetCustomerOfferRequest : unnamed
    n_02_835_Provide_Product_Offers_for_External_system <|.. DEL_CustomerOfferWS : unnamed
    DEL_CustomerOfferWS ..> DEL_GetCustomerOfferResponse : unnamed
    DEL_CustomerOfferWS ..> DEL_GetCustomerOfferFault : unnamed
```

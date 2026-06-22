# CalculateCustomerOfferFault

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CalculateCustomerOffer
- **Diagram ID**: 157928
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class Product_Calculator_CustomerOfferWS_CalculateCustomerOffer["Product Calculator :CustomerOfferWS - CalculateCustomerOffer"]
    class DEL_CalculateCustomerOfferResultCode["{DEL}CalculateCustomerOfferResultCode"]
    class DEL_CalculateCustomerOfferFault["{DEL}CalculateCustomerOfferFault"]
    DEL_CalculateCustomerOfferFault ..> DEL_CalculateCustomerOfferResultCode : unnamed
```

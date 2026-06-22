# CustomerOfferWS - CalculateCustomerOffer

```mermaid
classDiagram
    class Use_Case_Product_Calculator_for_External_system_Calculate_Re["Use Case :Product Calculator for External system - Calculate/Recalculate"]
    class n_02_820_Calculate_Product_Offers_for_External_system["02.820 Calculate Product Offers for External system"]
    class Product_Calculator_CustomerOfferWS["Product Calculator : CustomerOfferWS"]
    class CustomerOffer_COMMON_CustomerOffer["CustomerOffer - COMMON :CustomerOffer"]
    class DEL_CustomerOffer["{DEL}CustomerOffer"]
    class CalculateProductOffer_CalculateCustomerOfferFault["CalculateProductOffer : CalculateCustomerOfferFault"]
    class DEL_CalculateCustomerOfferFault["{DEL}CalculateCustomerOfferFault"]
    class DEL_CalculateCustomerOfferRequest["{DEL}CalculateCustomerOfferRequest"]
    class CalculateProductOffer_CalculateCustomerOfferRequest["CalculateProductOffer :CalculateCustomerOfferRequest"]
    class DEL_CalculateCustomerOfferResponse["{DEL}CalculateCustomerOfferResponse"]
    class DEL_CustomerOfferWS["{DEL}CustomerOfferWS"]
    DEL_CalculateCustomerOfferResponse --> DEL_CustomerOffer : unnamed
    DEL_CustomerOfferWS --> DEL_CalculateCustomerOfferRequest : unnamed
    DEL_CustomerOfferWS --> DEL_CalculateCustomerOfferFault : unnamed
    DEL_CustomerOfferWS --> n_02_820_Calculate_Product_Offers_for_External_system : unnamed
    DEL_CustomerOfferWS --> DEL_CalculateCustomerOfferResponse : unnamed
```

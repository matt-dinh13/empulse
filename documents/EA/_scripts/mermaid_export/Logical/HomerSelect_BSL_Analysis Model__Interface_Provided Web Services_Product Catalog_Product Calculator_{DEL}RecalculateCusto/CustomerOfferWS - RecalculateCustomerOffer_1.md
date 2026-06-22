# CustomerOfferWS - RecalculateCustomerOffer

```mermaid
classDiagram
    class DEL_RecalculateCustomerOfferResultCode["{DEL}RecalculateCustomerOfferResultCode"]
    class DEL_ServiceChoice["{DEL}ServiceChoice"]
    class DEL_RecalculateCustomerOfferRequest["{DEL}RecalculateCustomerOfferRequest"]
    class DEL_RecalculateCustomerOfferFault["{DEL}RecalculateCustomerOfferFault"]
    class DEL_RecalculateCustomerOfferResponse["{DEL}RecalculateCustomerOfferResponse"]
    class MOD_02_830_Recalculate_Product_Offers_for_External_system["{MOD}02.830 Recalculate Product Offers for External system"]
    class Use_Case_Product_Calculator_for_External_system_Calculate_Re["Use Case :Product Calculator for External system - Calculate/Recalculate"]
    class Product_Calculator_CustomerOfferWS["Product Calculator : CustomerOfferWS"]
    class CustomerOffer_COMMON_CustomerOffer["CustomerOffer - COMMON :CustomerOffer"]
    class DEL_CustomerOffer["{DEL}CustomerOffer"]
    class DEL_CustomerOfferWS["{DEL}CustomerOfferWS"]
    DEL_RecalculateCustomerOfferResponse --> DEL_CustomerOffer : unnamed
    DEL_RecalculateCustomerOfferRequest --> DEL_ServiceChoice : unnamed
    DEL_RecalculateCustomerOfferFault --> DEL_RecalculateCustomerOfferResultCode : unnamed
    DEL_CustomerOfferWS --> DEL_RecalculateCustomerOfferFault : unnamed
    DEL_CustomerOfferWS --> MOD_02_830_Recalculate_Product_Offers_for_External_system : unnamed
    DEL_CustomerOfferWS --> DEL_RecalculateCustomerOfferRequest : unnamed
    DEL_CustomerOfferWS --> DEL_RecalculateCustomerOfferResponse : unnamed
```

# CustomerOfferWS_v20 - RecalculateCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20
- **Diagram ID**: 157787
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class MOD_02_830_Recalculate_Product_Offers_for_External_system["{MOD}02.830 Recalculate Product Offers for External system"]
    class DEL_CustomerOffer["{DEL}CustomerOffer"]
    class DEL_RecalculateCustomerOfferResultCode["{DEL}RecalculateCustomerOfferResultCode"]
    class DEL_ServiceChoice["{DEL}ServiceChoice"]
    class DEL_RecalculateCustomerOfferRequest["{DEL}RecalculateCustomerOfferRequest"]
    class DEL_RecalculateCustomerOfferResponse["{DEL}RecalculateCustomerOfferResponse"]
    class DEL_RecalculateCustomerOfferFault["{DEL}RecalculateCustomerOfferFault"]
    class DEL_CustomerOfferWS_20["{DEL}CustomerOfferWS_20"]
    DEL_CustomerOfferWS_20 ..> DEL_RecalculateCustomerOfferFault : unnamed
    DEL_CustomerOfferWS_20 ..> DEL_RecalculateCustomerOfferResponse : unnamed
    DEL_CustomerOfferWS_20 ..> DEL_RecalculateCustomerOfferRequest : unnamed
    DEL_RecalculateCustomerOfferRequest ..> DEL_ServiceChoice : unnamed
    DEL_RecalculateCustomerOfferFault ..> DEL_RecalculateCustomerOfferResultCode : unnamed
    DEL_RecalculateCustomerOfferResponse ..> DEL_CustomerOffer : unnamed
    MOD_02_830_Recalculate_Product_Offers_for_External_system <|.. DEL_CustomerOfferWS_20 : unnamed
```

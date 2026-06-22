# CustomerOfferWS - GetProductsForCommodity

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity
- **Diagram ID**: 157921
- **Elements**: 12
- **Connectors**: 9

```mermaid
classDiagram
    class DEL_ProductForCommodityTariffItem["{DEL}ProductForCommodityTariffItem"]
    class DEL_InfoForCommodityType["{DEL}InfoForCommodityType"]
    class DEL_02_845_Provide_Products_for_Finacing_of_Commodity_for_Ex["{DEL}02.845 Provide Products for Finacing of Commodity for External system"]
    class Use_Case_Product_Calculator_for_External_system_Provide_Data["Use Case : Product Calculator for External system - Provide Data"]
    class DEL_ProductVariantForCommodity["{DEL}ProductVariantForCommodity"]
    class DEL_ProductForCommodity["{DEL}ProductForCommodity"]
    class DEL_GetProductsForCommodityResultCode["{DEL}GetProductsForCommodityResultCode"]
    class DEL_GetProductsForCommodityFault["{DEL}GetProductsForCommodityFault"]
    class DEL_GetProductsForCommodityResponse["{DEL}GetProductsForCommodityResponse"]
    class DEL_GetProductsForCommodityRequest["{DEL}GetProductsForCommodityRequest"]
    class Product_Calculator_CustomerOfferWS["Product Calculator : CustomerOfferWS"]
    class DEL_CustomerOfferWS["{DEL}CustomerOfferWS"]
    DEL_GetProductsForCommodityFault ..> DEL_GetProductsForCommodityResultCode : unnamed
    DEL_InfoForCommodityType ..> DEL_ProductForCommodity : unnamed
    DEL_ProductForCommodity ..> DEL_ProductVariantForCommodity : unnamed
    DEL_GetProductsForCommodityResponse ..> DEL_InfoForCommodityType : unnamed
    DEL_ProductForCommodity ..> DEL_ProductForCommodityTariffItem : unnamed
    DEL_02_845_Provide_Products_for_Finacing_of_Commodity_for_Ex <|.. DEL_CustomerOfferWS : unnamed
    DEL_CustomerOfferWS ..> DEL_GetProductsForCommodityFault : unnamed
    DEL_CustomerOfferWS ..> DEL_GetProductsForCommodityRequest : unnamed
    DEL_CustomerOfferWS ..> DEL_GetProductsForCommodityResponse : unnamed
```

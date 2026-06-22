# GetSalesroomSalesItems

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesroomSalesItem
- **Diagram ID**: 154022
- **Elements**: 16
- **Connectors**: 14

```mermaid
classDiagram
    class MOD_Product["{MOD}Product"]
    class Service["Service"]
    class Sales_Package_Item_Type["Sales Package Item Type"]
    class DEL_ResultCodeGetSalesroomSalesItem["{DEL}ResultCodeGetSalesroomSalesItem"]
    class DEL_ValidationCodeGetSalesroomSalesItem["{DEL}ValidationCodeGetSalesroomSalesItem"]
    class DEL_ResultGetSalesroomSalesItem["{DEL}ResultGetSalesroomSalesItem"]
    class DEL_GetSalesroomSalesItemResponse["{DEL}GetSalesroomSalesItemResponse"]
    class DEL_SalesroomSalesItemValues["{DEL}SalesroomSalesItemValues"]
    class DEL_GetSalesroomSalesItemCriterionType["{DEL}GetSalesroomSalesItemCriterionType"]
    class DEL_GetSalesroomSalesItemCriterion["{DEL}GetSalesroomSalesItemCriterion"]
    class DEL_GetSalesroomSalesItemRequest["{DEL}GetSalesroomSalesItemRequest"]
    class DEL_09_308_Get_Salesroom_Sales_Item["{DEL}09.308 Get Salesroom Sales Item"]
    class Use_Case_DEL_Sales_Package_UC["Use Case :{DEL}Sales Package UC"]
    class DEL_SalesPackageWS["{DEL}SalesPackageWS"]
    class Interface_Provided_SalesPackageWS["Interface Provided : SalesPackageWS"]
    class ValidationResult["ValidationResult"]
    DEL_GetSalesroomSalesItemResponse ..> ValidationResult : unnamed
    DEL_09_308_Get_Salesroom_Sales_Item <|.. DEL_SalesPackageWS : unnamed
    DEL_SalesPackageWS ..> DEL_GetSalesroomSalesItemRequest : unnamed
    DEL_GetSalesroomSalesItemRequest ..> DEL_GetSalesroomSalesItemCriterion : unnamed
    DEL_GetSalesroomSalesItemCriterion ..> DEL_GetSalesroomSalesItemCriterionType : unnamed
    DEL_ResultGetSalesroomSalesItem ..> DEL_SalesroomSalesItemValues : unnamed
    DEL_SalesPackageWS ..> DEL_GetSalesroomSalesItemResponse : unnamed
    DEL_GetSalesroomSalesItemResponse ..> DEL_ResultGetSalesroomSalesItem : unnamed
    DEL_GetSalesroomSalesItemResponse ..> DEL_ValidationCodeGetSalesroomSalesItem : unnamed
    DEL_GetSalesroomSalesItemResponse ..> DEL_ResultCodeGetSalesroomSalesItem : unnamed
    DEL_SalesroomSalesItemValues ..> Sales_Package_Item_Type : unnamed
    DEL_GetSalesroomSalesItemCriterionType ..> Sales_Package_Item_Type : unnamed
    DEL_SalesroomSalesItemValues ..> Service : unnamed
    DEL_SalesroomSalesItemValues ..> MOD_Product : unnamed
```

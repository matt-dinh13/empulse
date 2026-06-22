# {DEL}GetSalesroomForProduct

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Sales Network Management/{DEL}SalesroomWS/{DEL}GetSalesroomForProduct
- **Diagram ID**: 150987
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class Use_Case_DEL_Get_List_of_Salesrooms_by_product_code["Use Case :{DEL}Get List of Salesrooms by product code"]
    class DEL_09_273_Get_List_of_Salesrooms_by_product_code["{DEL}09.273 Get List of Salesrooms by product code"]
    class DEL_SalesroomWS["{DEL}SalesroomWS"]
    class DEL_GetSalesroomForProductSalesroomData["{DEL}GetSalesroomForProductSalesroomData"]
    class SalesroomWS_SalesroomWS["SalesroomWS : SalesroomWS"]
    class DEL_GetSalesroomForProductResponse["{DEL}GetSalesroomForProductResponse"]
    class DEL_GetSalesroomForProductRequest["{DEL}GetSalesroomForProductRequest"]
    DEL_SalesroomWS ..> DEL_GetSalesroomForProductRequest : unnamed
    DEL_SalesroomWS ..> DEL_GetSalesroomForProductResponse : unnamed
    DEL_SalesroomWS --> SalesroomWS_SalesroomWS : unnamed
    DEL_GetSalesroomForProductResponse ..> DEL_GetSalesroomForProductSalesroomData : unnamed
    Use_Case_DEL_Get_List_of_Salesrooms_by_product_code --> DEL_09_273_Get_List_of_Salesrooms_by_product_code : unnamed
    DEL_09_273_Get_List_of_Salesrooms_by_product_code <|.. DEL_SalesroomWS : unnamed
```

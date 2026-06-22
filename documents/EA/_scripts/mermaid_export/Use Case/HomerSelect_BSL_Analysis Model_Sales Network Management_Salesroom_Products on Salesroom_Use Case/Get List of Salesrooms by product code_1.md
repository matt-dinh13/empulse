# Get List of Salesrooms by product code

```mermaid
graph TD
    DEL_Algorithm_Find_salesrooms_by_product_code["{DEL}Algorithm: Find salesrooms by product code"]
    GetSalesroomsForProduct_DEL_GetSalesroomForProduct["GetSalesroomsForProduct :{DEL}GetSalesroomForProduct"]
    DEL_09_273_Get_List_of_Salesrooms_by_product_code["{DEL}09.273 Get List of Salesrooms by product code"]
    External_system["External system"]
    GetSalesroomsForProduct_DEL_GetSalesroomForProduct -->|unnamed| DEL_09_273_Get_List_of_Salesrooms_by_product_code
    DEL_09_273_Get_List_of_Salesrooms_by_product_code -->|unnamed| DEL_Algorithm_Find_salesrooms_by_product_code
    External_system -->|unnamed| DEL_09_273_Get_List_of_Salesrooms_by_product_code
```

# Get List of Salesrooms by product code

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Use Case
- **Diagram ID**: 150986
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    DEL_Algorithm_Find_salesrooms_by_product_code["{DEL}Algorithm: Find salesrooms by product code"]
    GetSalesroomsForProduct_DEL_GetSalesroomForProduct["GetSalesroomsForProduct :{DEL}GetSalesroomForProduct"]
    DEL_09_273_Get_List_of_Salesrooms_by_product_code(("{DEL}09.273 Get List of Salesrooms by product code"))
    External_system[/"External system"/]
    GetSalesroomsForProduct_DEL_GetSalesroomForProduct -->|unnamed| DEL_09_273_Get_List_of_Salesrooms_by_product_code
    DEL_09_273_Get_List_of_Salesrooms_by_product_code -->|unnamed| DEL_Algorithm_Find_salesrooms_by_product_code
    External_system --- DEL_09_273_Get_List_of_Salesrooms_by_product_code
```

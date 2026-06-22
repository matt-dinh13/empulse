# Products on Salesroom - Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Access Rights
- **Diagram ID**: 107710
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph TD
    DEL_09_273_Get_List_of_Salesrooms_by_product_code["{DEL}09.273 Get List of Salesrooms by product code"]
    ADD_09_273_Get_List_of_Salesrooms_by_product_code["{ADD}09.273 Get List of Salesrooms by product code"]
    n_09_272_Process_product_to_salesroom_assignment_file["09.272 Process product to salesroom assignment file"]
    n_09_271_Import_product_to_salesroom_assignment_file["09.271 Import product to salesroom assignment file"]
    n_09_272_Process_product_to_salesroom_assignment_file["09.272 Process product to salesroom assignment file"]
    n_09_271_Import_product_to_salesroom_assignment_file["09.271 Import product to salesroom assignment file"]
    n_09_275_Remove_Product_from_Salesroom["09.275 Remove Product from Salesroom"]
    n_09_270_Assign_product_to_salesroom["09.270 Assign product to salesroom"]
    n_09_275_Remove_Product_from_Salesroom["09.275 Remove Product from Salesroom"]
    n_09_270_Assign_product_to_salesroom["09.270 Assign product to salesroom"]
    n_09_272_Process_product_to_salesroom_assignment_file -->|unnamed| n_09_272_Process_product_to_salesroom_assignment_file
    n_09_275_Remove_Product_from_Salesroom -->|unnamed| n_09_275_Remove_Product_from_Salesroom
    n_09_270_Assign_product_to_salesroom -->|unnamed| n_09_270_Assign_product_to_salesroom
    n_09_271_Import_product_to_salesroom_assignment_file -->|unnamed| n_09_271_Import_product_to_salesroom_assignment_file
    DEL_09_273_Get_List_of_Salesrooms_by_product_code -->|unnamed| ADD_09_273_Get_List_of_Salesrooms_by_product_code
```

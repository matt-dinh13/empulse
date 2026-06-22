# Manage Products on Salesroom

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Use Case
- **Diagram ID**: 150985
- **Elements**: 11
- **Connectors**: 13

```mermaid
graph LR
    Filter_available_products_for_an_assignment_to_salesroom["Filter available products for an assignment to salesroom"]
    n_09_275_Remove_Product_from_Salesroom(("09.275 Remove Product from Salesroom"))
    n_09_272_Process_product_to_salesroom_assignment_file(("09.272 Process product to salesroom assignment file"))
    Assign_product_to_salesroom_validation_rules["Assign product to salesroom validation rules"]
    Interface_Structure_of_files_for_import_of_assignment_of_Pro["Interface :Structure of files for import of assignment of Product to Salesroom"]
    n_09_271_Import_product_to_salesroom_assignment_file(("09.271 Import product to salesroom assignment file"))
    Algorithm_Assignment_of_Product_to_Salesroom["Algorithm: Assignment of Product to Salesroom"]
    Assign_product_to_salesroom_input_form_Assign_product_to_sal["Assign product to salesroom - input form : Assign product to salesroom - input form"]
    n_09_270_Assign_product_to_salesroom(("09.270 Assign product to salesroom"))
    Algorithm_Removal_of_Product_from_Salesroom["Algorithm: Removal of Product from Salesroom"]
    User[/"User"/]
    n_09_275_Remove_Product_from_Salesroom -->|unnamed| Algorithm_Removal_of_Product_from_Salesroom
    n_09_272_Process_product_to_salesroom_assignment_file -->|unnamed| Algorithm_Removal_of_Product_from_Salesroom
    n_09_270_Assign_product_to_salesroom -->|unnamed| Assign_product_to_salesroom_input_form_Assign_product_to_sal
    n_09_270_Assign_product_to_salesroom -->|unnamed| Algorithm_Assignment_of_Product_to_Salesroom
    n_09_272_Process_product_to_salesroom_assignment_file -->|unnamed| Algorithm_Assignment_of_Product_to_Salesroom
    n_09_272_Process_product_to_salesroom_assignment_file -->|unnamed| Interface_Structure_of_files_for_import_of_assignment_of_Pro
    n_09_272_Process_product_to_salesroom_assignment_file -->|unnamed| Assign_product_to_salesroom_validation_rules
    n_09_270_Assign_product_to_salesroom -->|unnamed| Assign_product_to_salesroom_validation_rules
    n_09_271_Import_product_to_salesroom_assignment_file -.->|include| n_09_272_Process_product_to_salesroom_assignment_file
    n_09_270_Assign_product_to_salesroom -->|unnamed| Filter_available_products_for_an_assignment_to_salesroom
    User --- n_09_275_Remove_Product_from_Salesroom
    User --- n_09_270_Assign_product_to_salesroom
    User --> n_09_271_Import_product_to_salesroom_assignment_file
```

# Products Assignment Governance

```mermaid
graph TD
    Show_product["Show product"]
    ADD_CSV_Data_export_example["{ADD}CSV Data export example"]
    DELETE_salesrooms_products["DELETE salesrooms products"]
    Detail["Detail"]
    Remove_Assignment["Remove Assignment"]
    Product_Name["Product Name"]
    Product_code["Product code"]
    Search_Results["Search Results"]
    Partner_name["Partner name"]
    Action["Action"]
    Valid_to["Valid to"]
    Valid_from["Valid from"]
    Partner_code["Partner code"]
    Salesroom_name["Salesroom name"]
    Salesroom_code["Salesroom code"]
    ADD_GET_product_assignments["{ADD}GET product-assignments"]
    Export["Export"]
    Search_results["Search results"]
    Filter_parameters["Filter parameters"]
    Search_Criteria["Search Criteria"]
    UI_Control["UI Control"]
    Valid_on["Valid on"]
    UI_Control["UI Control"]
    Commodity_type["Commodity type"]
    Salesroom["Salesroom"]
    UI_Control["UI Control"]
    UI_Control["UI Control"]
    Search["Search"]
    Partner_name["Partner name"]
    UI_Control["UI Control"]
    Partner_code["Partner code"]
    UI_Control["UI Control"]
    Product_code["Product code"]
    Product_code["Product code"]
    ADD_Products_Assignment_Governance["{ADD}Products Assignment Governance"]
    ADD_Search_result_Export["{ADD}Search result Export"]
    ADD_Show_product_assignments["{ADD}Show product assignments"]
    ADD_Product_Assignments_Filter_parameters["{ADD}Product Assignments - Filter parameters"]
    ADD_Product_Assignmnets_Search_Result["{ADD}Product Assignmnets - Search Result"]
    ADD_Product_Assignments_Search_Criteria_Rules["{ADD} Product Assignments Search Criteria Rules"]
    Detail -->|unnamed| Show_product
    Search -->|unnamed| ADD_GET_product_assignments
    Remove_Assignment -->|unnamed| DELETE_salesrooms_products
    Export -->|unnamed| ADD_CSV_Data_export_example
    ADD_Show_product_assignments -->|unnamed| ADD_Product_Assignmnets_Search_Result
    ADD_Show_product_assignments -->|unnamed| ADD_Product_Assignments_Search_Criteria_Rules
    ADD_Show_product_assignments -->|unnamed| ADD_Product_Assignments_Filter_parameters
    ADD_Show_product_assignments -->|unnamed| ADD_Products_Assignment_Governance
```

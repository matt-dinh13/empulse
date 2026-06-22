# UI - Product Assignments Governance

```mermaid
graph TD
    ADD_Product_Assignmnets_Search_Result["{ADD}Product Assignmnets - Search Result"]
    ADD_Product_Assignments_Filter_parameters["{ADD}Product Assignments - Filter parameters"]
    ADD_Product_Assignments_Search_Criteria_Rules["{ADD} Product Assignments Search Criteria Rules"]
    UI_User["UI User"]
    ADD_Show_product_assignments["{ADD}Show product assignments"]
    ADD_Show_product_assignments -->|unnamed| ADD_Product_Assignmnets_Search_Result
    ADD_Show_product_assignments -->|unnamed| ADD_Product_Assignments_Filter_parameters
    ADD_Show_product_assignments -->|unnamed| ADD_Product_Assignments_Search_Criteria_Rules
    UI_User -->|unnamed| ADD_Show_product_assignments
```

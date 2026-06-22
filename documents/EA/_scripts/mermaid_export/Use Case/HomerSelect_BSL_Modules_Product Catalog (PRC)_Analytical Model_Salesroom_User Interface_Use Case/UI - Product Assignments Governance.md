# UI - Product Assignments Governance

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Use Case
- **Diagram ID**: 163913
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    ADD_Product_Assignmnets_Search_Result["{ADD}Product Assignmnets - Search Result"]
    ADD_Product_Assignments_Filter_parameters["{ADD}Product Assignments - Filter parameters"]
    ADD_Product_Assignments_Search_Criteria_Rules["{ADD} Product Assignments Search Criteria Rules"]
    UI_User[/"UI User"/]
    ADD_Show_product_assignments(("{ADD}Show product assignments"))
    ADD_Show_product_assignments -->|unnamed| ADD_Product_Assignmnets_Search_Result
    ADD_Show_product_assignments -->|unnamed| ADD_Product_Assignments_Filter_parameters
    ADD_Show_product_assignments -->|unnamed| ADD_Product_Assignments_Search_Criteria_Rules
    UI_User --- ADD_Show_product_assignments
```

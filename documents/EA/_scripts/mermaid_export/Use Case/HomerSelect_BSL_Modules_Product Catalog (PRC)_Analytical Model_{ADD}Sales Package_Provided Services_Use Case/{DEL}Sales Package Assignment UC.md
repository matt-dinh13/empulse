# {DEL}Sales Package Assignment UC

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case
- **Diagram ID**: 154024
- **Elements**: 14
- **Connectors**: 12

```mermaid
graph LR
    DEL_GetSalesroomSalesItem_SNM_search_filter["{DEL}GetSalesroomSalesItem - SNM search filter"]
    DEL_GetSalesroomSalesItemRequest_validation_rules["{DEL}GetSalesroomSalesItemRequest - validation rules"]
    DEL_GetSalesroomSalesItem_search_filter["{DEL}GetSalesroomSalesItem - search filter"]
    DEL_09_308_Get_Salesroom_Sales_Item(("{DEL}09.308 Get Salesroom Sales Item"))
    Use_Case_DEL_Sales_Package_UC["Use Case :{DEL}Sales Package UC"]
    DEL_GetSalesPackageAssignmentRequest_validation_rules["{DEL}GetSalesPackageAssignmentRequest - validation rules"]
    DEL_09_307_Archive_Sales_Package_Assignment(("{DEL}09.307 Archive Sales Package Assignment"))
    DEL_GetSalesPackageAssignment_search_filter["{DEL}GetSalesPackageAssignment - search filter"]
    DEL_SalesPackageAssignmentValues_validation_rules["{DEL}SalesPackageAssignmentValues - validation rules"]
    DEL_SetSalesPackageAssignment_validation_rules["{DEL}SetSalesPackageAssignment - validation rules"]
    DEL_09_306_Get_Sales_Package_Assignment_Code_Lists(("{DEL}09.306 Get Sales Package Assignment Code Lists"))
    DEL_09_305_Get_Sales_Package_Assignment(("{DEL}09.305 Get Sales Package Assignment"))
    DEL_09_304_Set_Sales_Package_Assignment(("{DEL}09.304 Set Sales Package Assignment"))
    External_Component[/"External Component"/]
    DEL_09_304_Set_Sales_Package_Assignment -->|unnamed| DEL_SetSalesPackageAssignment_validation_rules
    DEL_09_305_Get_Sales_Package_Assignment -->|unnamed| DEL_GetSalesPackageAssignment_search_filter
    DEL_09_305_Get_Sales_Package_Assignment -->|unnamed| DEL_GetSalesPackageAssignmentRequest_validation_rules
    DEL_09_308_Get_Salesroom_Sales_Item -->|unnamed| DEL_GetSalesroomSalesItem_search_filter
    DEL_09_308_Get_Salesroom_Sales_Item -->|unnamed| DEL_GetSalesroomSalesItemRequest_validation_rules
    DEL_09_308_Get_Salesroom_Sales_Item -->|unnamed| DEL_GetSalesroomSalesItem_SNM_search_filter
    DEL_SetSalesPackageAssignment_validation_rules -->|unnamed| DEL_SalesPackageAssignmentValues_validation_rules
    External_Component --- DEL_09_304_Set_Sales_Package_Assignment
    External_Component --- DEL_09_306_Get_Sales_Package_Assignment_Code_Lists
    External_Component --- DEL_09_307_Archive_Sales_Package_Assignment
    External_Component --- DEL_09_308_Get_Salesroom_Sales_Item
    External_Component --- DEL_09_305_Get_Sales_Package_Assignment
```

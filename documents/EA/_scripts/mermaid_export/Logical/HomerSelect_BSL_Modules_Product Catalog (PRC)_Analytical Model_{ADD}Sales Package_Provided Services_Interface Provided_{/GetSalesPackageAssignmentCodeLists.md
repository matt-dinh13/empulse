# GetSalesPackageAssignmentCodeLists

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignmentCodeLists
- **Diagram ID**: 154020
- **Elements**: 10
- **Connectors**: 7

```mermaid
classDiagram
    class Salesroom["Salesroom"]
    class DEL_Salesroom["{DEL}Salesroom"]
    class Sales_Package["Sales Package"]
    class DEL_SalesPackage["{DEL}SalesPackage"]
    class DEL_GetSalesPackageAssignmentCodeListsResponse["{DEL}GetSalesPackageAssignmentCodeListsResponse"]
    class DEL_ErrorCodeGetSalesPackageAssignmentCodeLists["{DEL}ErrorCodeGetSalesPackageAssignmentCodeLists"]
    class DEL_09_306_Get_Sales_Package_Assignment_Code_Lists["{DEL}09.306 Get Sales Package Assignment Code Lists"]
    class Use_Case_DEL_Sales_Package_UC["Use Case :{DEL}Sales Package UC"]
    class DEL_SalesPackageWS["{DEL}SalesPackageWS"]
    class Interface_Provided_SalesPackageWS["Interface Provided : SalesPackageWS"]
    DEL_09_306_Get_Sales_Package_Assignment_Code_Lists <|.. DEL_SalesPackageWS : unnamed
    DEL_GetSalesPackageAssignmentCodeListsResponse ..> DEL_ErrorCodeGetSalesPackageAssignmentCodeLists : unnamed
    DEL_SalesPackageWS ..> DEL_GetSalesPackageAssignmentCodeListsResponse : unnamed
    DEL_GetSalesPackageAssignmentCodeListsResponse ..> DEL_SalesPackage : unnamed
    DEL_SalesPackage ..> Sales_Package : unnamed
    DEL_GetSalesPackageAssignmentCodeListsResponse ..> DEL_Salesroom : unnamed
    DEL_Salesroom ..> Salesroom : unnamed
```

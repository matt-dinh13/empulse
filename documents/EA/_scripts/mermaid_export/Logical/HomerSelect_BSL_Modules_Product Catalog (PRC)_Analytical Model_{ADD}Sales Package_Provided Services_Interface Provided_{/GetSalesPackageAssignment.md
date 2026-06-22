# GetSalesPackageAssignment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignment
- **Diagram ID**: 154019
- **Elements**: 14
- **Connectors**: 10

```mermaid
classDiagram
    class DEL_ResultCodeGetSalesPackageAssignment["{DEL}ResultCodeGetSalesPackageAssignment"]
    class DEL_ValidationCodeGetSalesPackageAssignment["{DEL}ValidationCodeGetSalesPackageAssignment"]
    class DEL_ResultGetSalesPackageAssignment["{DEL}ResultGetSalesPackageAssignment"]
    class DEL_GetSalesPackageAssignmentResponse["{DEL}GetSalesPackageAssignmentResponse"]
    class COMMON_for_Sales_Package_SalesPackageAssignmentValues["COMMON for Sales Package : SalesPackageAssignmentValues"]
    class DEL_SalesPackageAssignmentValues["{DEL}SalesPackageAssignmentValues"]
    class DEL_GetSalesPackageAssignmentCriterionType["{DEL}GetSalesPackageAssignmentCriterionType"]
    class DEL_GetSalesPackageAssignmentCriterion["{DEL}GetSalesPackageAssignmentCriterion"]
    class DEL_GetSalesPackageAssignmentRequest["{DEL}GetSalesPackageAssignmentRequest"]
    class DEL_09_305_Get_Sales_Package_Assignment["{DEL}09.305 Get Sales Package Assignment"]
    class Use_Case_DEL_Sales_Package_UC["Use Case :{DEL}Sales Package UC"]
    class DEL_SalesPackageWS["{DEL}SalesPackageWS"]
    class Interface_Provided_SalesPackageWS["Interface Provided : SalesPackageWS"]
    class ValidationResult["ValidationResult"]
    DEL_GetSalesPackageAssignmentResponse ..> ValidationResult : unnamed
    DEL_09_305_Get_Sales_Package_Assignment <|.. DEL_SalesPackageWS : unnamed
    DEL_SalesPackageWS ..> DEL_GetSalesPackageAssignmentRequest : unnamed
    DEL_GetSalesPackageAssignmentRequest ..> DEL_GetSalesPackageAssignmentCriterion : unnamed
    DEL_GetSalesPackageAssignmentCriterion ..> DEL_GetSalesPackageAssignmentCriterionType : unnamed
    DEL_ResultGetSalesPackageAssignment ..> DEL_SalesPackageAssignmentValues : unnamed
    DEL_SalesPackageWS ..> DEL_GetSalesPackageAssignmentResponse : unnamed
    DEL_GetSalesPackageAssignmentResponse ..> DEL_ResultGetSalesPackageAssignment : unnamed
    DEL_GetSalesPackageAssignmentResponse ..> DEL_ValidationCodeGetSalesPackageAssignment : unnamed
    DEL_GetSalesPackageAssignmentResponse ..> DEL_ResultCodeGetSalesPackageAssignment : unnamed
```

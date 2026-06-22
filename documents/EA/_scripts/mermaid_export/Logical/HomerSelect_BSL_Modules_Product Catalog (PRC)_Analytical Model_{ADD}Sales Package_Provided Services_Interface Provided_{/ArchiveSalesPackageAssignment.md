# ArchiveSalesPackageAssignment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}ArchiveSalesPackageAssignment
- **Diagram ID**: 154021
- **Elements**: 9
- **Connectors**: 6

```mermaid
classDiagram
    class REL_ResultCodeArchiveSalesPackageAssignment["{REL}ResultCodeArchiveSalesPackageAssignment"]
    class REL_ResultArchiveSalesPackageAssignment["{REL}ResultArchiveSalesPackageAssignment"]
    class DEL_ArchiveSalesPackageAssignmentResponse["{DEL}ArchiveSalesPackageAssignmentResponse"]
    class DEL_ArchiveSalesPackageAssignmentRequest["{DEL}ArchiveSalesPackageAssignmentRequest"]
    class DEL_ArchiveSalesPackageAssignment["{DEL}ArchiveSalesPackageAssignment"]
    class DEL_09_307_Archive_Sales_Package_Assignment["{DEL}09.307 Archive Sales Package Assignment"]
    class Use_Case_DEL_Sales_Package_UC["Use Case :{DEL}Sales Package UC"]
    class DEL_SalesPackageWS["{DEL}SalesPackageWS"]
    class Interface_Provided_SalesPackageWS["Interface Provided : SalesPackageWS"]
    DEL_SalesPackageWS ..> DEL_09_307_Archive_Sales_Package_Assignment : unnamed
    DEL_ArchiveSalesPackageAssignmentRequest ..> DEL_ArchiveSalesPackageAssignment : unnamed
    DEL_SalesPackageWS ..> DEL_ArchiveSalesPackageAssignmentRequest : unnamed
    DEL_SalesPackageWS ..> DEL_ArchiveSalesPackageAssignmentResponse : unnamed
    DEL_ArchiveSalesPackageAssignmentResponse ..> REL_ResultArchiveSalesPackageAssignment : unnamed
    REL_ResultArchiveSalesPackageAssignment ..> REL_ResultCodeArchiveSalesPackageAssignment : unnamed
```

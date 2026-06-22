# Service Structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model
- **Diagram ID**: 161115
- **Elements**: 14
- **Connectors**: 12

```mermaid
classDiagram
    class Service_Role["Service Role"]
    class Service_Type_Service_Type["Service Type : Service Type"]
    class Get_List_of_Merchants["Get List of Merchants"]
    class Financing_Package_Purpose["Financing Package Purpose"]
    class Service_Parameter["Service Parameter"]
    class Service_Parameter_Type["Service Parameter Type"]
    class Logical_Data_Model_Service_Type_Structure["Logical Data Model : Service Type Structure"]
    class Service_Type["Service Type"]
    class MOD_Financing_Package_Criterion_Type["{MOD}Financing Package Criterion Type"]
    class Relation_Type["Relation Type"]
    class Service_Relation["Service Relation"]
    class Service_Selection_Criterion["Service Selection Criterion"]
    class Service_Criterion_type["Service Criterion type"]
    class Service["Service"]
    Service o-- Service_Relation : unnamed
    Service o-- Service_Selection_Criterion : unnamed
    Service o-- Service_Role : unnamed
    Service o-- Service_Parameter : unnamed
    Service_Selection_Criterion ..> Service_Criterion_type : unnamed
    Service_Relation ..> Relation_Type : unnamed
    Service ..> Service_Type : unnamed
    Service_Parameter ..> Service_Parameter_Type : unnamed
    Service_Criterion_type ..> Financing_Package_Purpose : unnamed
    Service_Criterion_type ..> Get_List_of_Merchants : unnamed
    MOD_Financing_Package_Criterion_Type ..> Financing_Package_Purpose : unnamed
    MOD_Financing_Package_Criterion_Type ..> Get_List_of_Merchants : unnamed
```

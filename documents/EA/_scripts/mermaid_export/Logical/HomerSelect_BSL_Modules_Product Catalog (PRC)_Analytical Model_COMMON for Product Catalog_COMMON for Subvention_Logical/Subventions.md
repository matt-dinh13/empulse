# Subventions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/Logical Data Model
- **Diagram ID**: 162304
- **Elements**: 12
- **Connectors**: 9

```mermaid
classDiagram
    class ADD_Model["{ADD}Model"]
    class Subvention_Purpose["Subvention Purpose"]
    class Logical_Data_Model_Loan_Service_Structure["Logical Data Model : Loan Service Structure"]
    class Service["Service"]
    class Commodity_Type["Commodity Type"]
    class Logical_Data_Model_Base_Types["Logical Data Model : Base Types"]
    class Logical_Data_Model_Product_Management["Logical Data Model : Product Management"]
    class MOD_Base_Type["{MOD}Base Type"]
    class Rounding["Rounding"]
    class Subvention_Participant["Subvention Participant"]
    class MOD_Subvention["{MOD}Subvention"]
    class MOD_Product["{MOD}Product"]
    MOD_Subvention ..> Subvention_Participant : unnamed
    MOD_Subvention ..> Rounding : unnamed
    MOD_Subvention ..> MOD_Base_Type : unnamed
    MOD_Subvention ..> Commodity_Type : unnamed
    MOD_Subvention ..> Subvention_Purpose : unnamed
    MOD_Subvention ..> ADD_Model : unnamed
    MOD_Base_Type --> Logical_Data_Model_Base_Types : unnamed
    MOD_Product --> MOD_Subvention : unnamed
    Service o-- MOD_Subvention : unnamed
```

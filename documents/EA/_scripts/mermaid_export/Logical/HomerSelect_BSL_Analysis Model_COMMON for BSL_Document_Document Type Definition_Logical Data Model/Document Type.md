# Document Type

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Type Definition/Logical Data Model
- **Diagram ID**: 164326
- **Elements**: 12
- **Connectors**: 12

```mermaid
classDiagram
    class Document_Type_Page_Specification["Document Type Page Specification"]
    class Document_Attribute_Usage_Type["Document Attribute Usage Type"]
    class State_Type["State Type"]
    class Behavior_Rule["Behavior Rule"]
    class MOD_Document_Type_Flag_Type["{MOD}Document Type Flag Type"]
    class Multi_Photo_Format_Type["Multi Photo Format Type"]
    class Custom_Data_Definition["Custom Data Definition"]
    class Logical_Data_Model_Custom_Data_definition["Logical Data Model : Custom Data definition"]
    class Document_Owner_Type["Document Owner Type"]
    class Document_Type_Flag["Document Type Flag"]
    class Document_Type_Attribute["Document Type Attribute"]
    class Document_Type["Document Type"]
    Document_Type ..> Document_Owner_Type : unnamed
    Document_Type ..> Multi_Photo_Format_Type : unnamed
    Document_Type o-- Document_Type_Attribute : unnamed
    Document_Type_Attribute --> Document_Attribute_Usage_Type : unnamed
    Document_Type_Attribute ..> Custom_Data_Definition : unnamed
    Document_Type o-- Document_Type_Flag : unnamed
    Document_Type_Flag ..> MOD_Document_Type_Flag_Type : unnamed
    Logical_Data_Model_Custom_Data_definition --> Custom_Data_Definition : unnamed
    Behavior_Rule --> Document_Type_Attribute : unnamed
    Behavior_Rule --> Document_Type_Attribute : unnamed
    Behavior_Rule --> State_Type : unnamed
    Document_Type o-- Document_Type_Page_Specification : unnamed
```

# Document Container

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/Logical Data Model
- **Diagram ID**: 124144
- **Elements**: 7
- **Connectors**: 4

```mermaid
classDiagram
    class Photo_Acquiring_Type["Photo Acquiring Type"]
    class Logical_Data_Model_Document_Common["Logical Data Model :Document - Common"]
    class Logical_Data_Model_Product_Management["Logical Data Model : Product Management"]
    class Document_Container_Type["Document Container Type"]
    class Document_Container_to_Document_Type["Document Container to Document Type"]
    class Document_Type["Document Type"]
    class Document_Container["Document Container"]
    Document_Container o-- Document_Container_to_Document_Type : unnamed
    Document_Container_to_Document_Type ..> Document_Type : unnamed
    Document_Container ..> Document_Container_Type : unnamed
    Document_Container_to_Document_Type ..> Photo_Acquiring_Type : unnamed
```

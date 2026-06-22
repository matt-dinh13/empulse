# Document Container

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Container/Logical Data Model
- **Diagram ID**: 162118
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Photo_Acquiring_Type["Photo Acquiring Type"]
    class Document_Container_Type["Document Container Type"]
    class Document_Container_to_Document_Type["Document Container to Document Type"]
    class Document_Container["Document Container"]
    Document_Container ..> Document_Container_Type : unnamed
    Document_Container o-- Document_Container_to_Document_Type : unnamed
    Document_Container_to_Document_Type ..> Photo_Acquiring_Type : unnamed
```

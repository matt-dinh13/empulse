# Document Instace - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Logical Data Model
- **Diagram ID**: 162121
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class Document_DMS_File["Document DMS File"]
    class DMS_File["DMS File"]
    class Document_Attribute["Document Attribute"]
    class Document["Document"]
    Document_Attribute --> Document : unnamed
    DMS_File --> DMS_File : unnamed
    Document_DMS_File --> DMS_File : unnamed
    Document o-- Document_DMS_File : unnamed
```

# Document Instace - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Logical Data Model
- **Diagram ID**: 164549
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class Document_DMS_File["Document DMS File"]
    class DMS_File["DMS File"]
    class MOD_CSI_4601_Document_Attribute["{MOD CSI-4601}Document Attribute"]
    class Document["Document"]
    MOD_CSI_4601_Document_Attribute --> Document : unnamed
    DMS_File --> DMS_File : unnamed
    Document o-- Document_DMS_File : unnamed
    Document_DMS_File --> DMS_File : unnamed
```

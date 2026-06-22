# Business rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Business rules
- **Diagram ID**: 162120
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    Find_default_page_specification["Find default page specification"]
    CreateDocument_validation["CreateDocument validation"]
    Document_Attribute_validation["Document Attribute validation"]
    Document_File_validation["Document File validation"]
    CreateDocument_validation -->|unnamed| Document_File_validation
    CreateDocument_validation -->|unnamed| Document_Attribute_validation
```

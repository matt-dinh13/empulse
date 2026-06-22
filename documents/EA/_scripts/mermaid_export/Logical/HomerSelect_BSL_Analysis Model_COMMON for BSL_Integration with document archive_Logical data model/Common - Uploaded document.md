# Common - Uploaded document

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Integration with document archive/Logical data model
- **Diagram ID**: 134201
- **Elements**: 5
- **Connectors**: 6

```mermaid
classDiagram
    class ADD_File_Type["{ADD}File Type"]
    class ADD_Document_DMS_File["{ADD}Document DMS File"]
    class User["User"]
    class Document["Document"]
    class DMS_File["DMS File"]
    ADD_Document_DMS_File --> DMS_File : unnamed
    DMS_File --> DMS_File : unnamed
    User --> User : unnamed
    DMS_File --> User : unnamed
    ADD_Document_DMS_File --> ADD_File_Type : unnamed
    Document o-- ADD_Document_DMS_File : unnamed
```

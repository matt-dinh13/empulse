# Business rules

```mermaid
graph TD
    ADD_Find_default_page_specification["{ADD}Find default page specification"]
    CreateDocument_validation["CreateDocument validation"]
    Document_Attribute_validation["Document Attribute validation"]
    MOD_Document_File_validation["{MOD}Document File validation"]
    CreateDocument_validation -->|unnamed| MOD_Document_File_validation
    CreateDocument_validation -->|unnamed| Document_Attribute_validation
```

# Temporary Application - document

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model
- **Diagram ID**: 153604
- **Elements**: 18
- **Connectors**: 18

```mermaid
classDiagram
    class Document_Photo_Validation["Document Photo Validation"]
    class TempAppl_2_Document["TempAppl 2 Document"]
    class DMS_File["DMS File"]
    class MOD_Temporary_Application["{MOD}Temporary Application"]
    class Photo_Quality_Issue["Photo Quality Issue"]
    class Validation_Attempt_Detail_Type["Validation Attempt Detail Type"]
    class Validation_Attempt_Detail["Validation Attempt Detail"]
    class Document_Type_Attribute["Document Type Attribute"]
    class TempAppl_Document_Attribute["TempAppl Document Attribute"]
    class Validation_Result_Type["Validation Result Type"]
    class TempAppl_DMS_File["TempAppl DMS File"]
    class MOD_Check_Moment_Type["{MOD}Check Moment Type"]
    class TempAppl_Document_Content["TempAppl Document Content"]
    class Photo_Taking_Result["Photo Taking Result"]
    class Validation_Attempt["Validation Attempt"]
    class MOD_TempAppl_Document_Photo_Validation["{MOD}TempAppl Document Photo Validation"]
    class Document_Type["Document Type"]
    class TempAppl_Document["TempAppl Document"]
    TempAppl_Document ..> Photo_Taking_Result : unnamed
    DMS_File --> DMS_File : unnamed
    MOD_Temporary_Application o-- TempAppl_2_Document : unnamed
    MOD_Temporary_Application o-- TempAppl_Document : unnamed
    TempAppl_Document_Attribute ..> Document_Type_Attribute : unnamed
    Validation_Attempt ..> Validation_Result_Type : unnamed
    TempAppl_DMS_File --> DMS_File : unnamed
    TempAppl_Document --> TempAppl_Document_Content : has
    TempAppl_Document o-- MOD_TempAppl_Document_Photo_Validation : unnamed
    Validation_Attempt o-- Validation_Attempt_Detail : unnamed
    Validation_Attempt <|-- MOD_TempAppl_Document_Photo_Validation : unnamed
    Validation_Attempt <|-- Document_Photo_Validation : unnamed
    TempAppl_Document ..> Document_Type : unnamed
    TempAppl_Document_Attribute --> TempAppl_Document : unnamed
    TempAppl_Document o-- TempAppl_DMS_File : unnamed
    TempAppl_Document ..> MOD_Check_Moment_Type : unnamed
    Validation_Attempt_Detail ..> Validation_Attempt_Detail_Type : unnamed
    Document_Type o-- Document_Type_Attribute : unnamed
```

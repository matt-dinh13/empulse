# Printing an Installment schedule

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model
- **Diagram ID**: 162148
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class Installment_Version_Printout["Installment Version Printout"]
    class Installment["Installment"]
    class DMS_File["DMS File"]
    class Document["Document"]
    class Check_Moment_For_Recalculation_Reason["Check Moment For Recalculation Reason"]
    class MOD_Check_Moment_Type["{MOD}Check Moment Type"]
    class Recalculation_Reason["Recalculation Reason"]
    Installment ..> Recalculation_Reason : unnamed
    Check_Moment_For_Recalculation_Reason --> Recalculation_Reason : unnamed
    Check_Moment_For_Recalculation_Reason --> MOD_Check_Moment_Type : unnamed
    Installment_Version_Printout --> Document : unnamed
    DMS_File --> DMS_File : unnamed
    Installment o-- Installment_Version_Printout : unnamed
    Installment --> Installment : unnamed
```

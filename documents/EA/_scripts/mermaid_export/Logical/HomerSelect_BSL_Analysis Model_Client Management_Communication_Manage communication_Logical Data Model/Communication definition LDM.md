# Communication definition LDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model
- **Diagram ID**: 140374
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class Communication_Subtype_Subspecification["Communication Subtype Subspecification"]
    class Communication_Subtype_Specification["Communication Subtype Specification"]
    class Communication_Result_Type["Communication Result Type"]
    class Communication_Definition["Communication Definition"]
    class Communication_Status["Communication Status"]
    class Communication_Result_Definition["Communication Result Definition"]
    class Communication_Channel["Communication Channel"]
    class Communication_Subtype["Communication Subtype"]
    class Communication_Result_Type_Part["Communication Result Type Part"]
    class Communication_Type["Communication Type"]
    Communication_Definition --> Communication_Type : unnamed
    Communication_Definition --> Communication_Subtype : unnamed
    Communication_Result_Definition --> Communication_Subtype : unnamed
    Communication_Definition --> Communication_Channel : unnamed
    Communication_Result_Definition --> Communication_Status : unnamed
    Communication_Result_Definition --> Communication_Result_Type : unnamed
    Communication_Result_Type_Part --> Communication_Result_Type : unnamed
    Communication_Subtype --> Communication_Subtype_Specification : unnamed
    Communication_Subtype_Specification --> Communication_Subtype_Subspecification : unnamed
```

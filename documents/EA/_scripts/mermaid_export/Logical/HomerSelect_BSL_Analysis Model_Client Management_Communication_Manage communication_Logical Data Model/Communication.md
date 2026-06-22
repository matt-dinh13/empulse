# Communication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model
- **Diagram ID**: 140373
- **Elements**: 27
- **Connectors**: 26

```mermaid
classDiagram
    class Ticket["Ticket"]
    class Communication_Subtype_Subspecification["Communication Subtype Subspecification"]
    class Communication_Subtype_Specification["Communication Subtype Specification"]
    class CommunicationRecord2Ticket["CommunicationRecord2Ticket"]
    class Communication_Result_Type["Communication Result Type"]
    class Communication_Definition["Communication Definition"]
    class Communication_Status["Communication Status"]
    class Contact["Contact"]
    class Address["Address"]
    class Communication_Event["Communication Event"]
    class Client["Client"]
    class Deal["Deal"]
    class MOD_Contract["{MOD}Contract"]
    class Communication_Result_Part["Communication Result Part"]
    class Communication_Result_Definition["Communication Result Definition"]
    class Communication_Channel["Communication Channel"]
    class Communication_Subtype["Communication Subtype"]
    class Communication_Result_Type_Part["Communication Result Type Part"]
    class Communication_Type["Communication Type"]
    class Communication_Result_Value["Communication Result Value"]
    class Communication_Record["Communication Record"]
    class Communication_variant_definition_used_in_form_to_fill_combob["Communication variant definition (used in form to fill comboboxes)"]
    class Communication_result_definition["Communication result definition"]
    Communication_Subtype --> Communication_Subtype_Specification : unnamed
    Communication_Result_Part ..> Communication_Result_Type : unnamed
    Communication_Result_Type_Part --> Communication_Result_Type : unnamed
    Communication_Result_Definition --> Communication_Result_Type : unnamed
    Communication_Channel --> unnamed : unnamed
    Communication_Result_Definition --> Communication_Status : unnamed
    Communication_Result_Part --> unnamed : unnamed
    Communication_Record --> Contact : unnamed
    Communication_Event o-- Communication_Record : was recorded during
    Communication_Event --> Client : unnamed
    Communication_Subtype_Specification --> Communication_Subtype_Subspecification : unnamed
    Communication_Record --> MOD_Contract : unnamed
    Communication_Record o-- Address : unnamed
    Communication_Definition --> Communication_Channel : unnamed
    Communication_Result_Definition --> Communication_Subtype : unnamed
    Communication_Definition --> Communication_Subtype : unnamed
    Communication_Result_Value ..> Communication_Result_Type_Part : unnamed
    unnamed --> Communication_Result_Type_Part : unnamed
    Communication_Result_Part ..> Communication_Result_Type_Part : unnamed
    Communication_Definition --> Communication_Type : unnamed
    Communication_Result_Part ..> Communication_Result_Value : unnamed
    Communication_Record o-- CommunicationRecord2Ticket : unnamed
    Communication_Record o-- Communication_Result_Part : is composed of
    Deal o-- MOD_Contract : unnamed
    Deal --> Client : unnamed
    MOD_Contract --> Ticket : unnamed
```

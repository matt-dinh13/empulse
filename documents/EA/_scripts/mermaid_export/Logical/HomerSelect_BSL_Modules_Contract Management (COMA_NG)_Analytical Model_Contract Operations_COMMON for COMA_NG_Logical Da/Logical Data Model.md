# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model
- **Diagram ID**: 163936
- **Elements**: 21
- **Connectors**: 20

```mermaid
classDiagram
    class Account_Status_Transition_Request["Account Status Transition Request"]
    class Contract_Status_Transition_Request_Status_Type["Contract Status Transition Request Status Type"]
    class Contract_Status_Transition_Request_Type["Contract Status Transition Request Type"]
    class ADD_Contract_Account["{ADD]Contract Account"]
    class Contract_Party_Role_Attribute_Type["Contract Party Role Attribute Type"]
    class Contract_Party_Role_Attribute["Contract Party Role Attribute"]
    class Business_Event_Attribute["Business Event Attribute"]
    class Extended_Property_Value["Extended Property Value"]
    class Extended_Property_Item["Extended Property Item"]
    class Extended_Property_Group["Extended Property Group"]
    class Contract_Status_Transition["Contract Status Transition"]
    class Contract_Status_Type["Contract Status Type"]
    class Contract_Status_Transition_Request["Contract Status Transition Request"]
    class Client["Client"]
    class Contract_to_Applicant["Contract to Applicant"]
    class Deal["Deal"]
    class Contract_Party_Role["Contract Party Role"]
    class Contract_Document["Contract Document"]
    class Contract_Commodity["Contract Commodity"]
    class Business_Event["Business Event"]
    class Contract["Contract"]
    Contract_Party_Role o-- Contract_Party_Role_Attribute : unnamed
    Contract_Status_Transition_Request --> Contract_Status_Transition_Request_Type : unnamed
    ADD_Contract_Account o-- Account_Status_Transition_Request : unnamed
    Contract_Party_Role_Attribute ..> Contract_Party_Role_Attribute_Type : unnamed
    Extended_Property_Value --> Extended_Property_Item : is type of
    Extended_Property_Item --> Extended_Property_Group : belongs to
    Contract_Status_Transition --> Contract_Status_Transition : unnamed
    Contract_Status_Transition ..> Contract_Status_Type : unnamed
    Contract_Status_Transition_Request --> Contract_Status_Transition_Request_Status_Type : unnamed
    Deal o-- Contract : unnamed
    Contract o-- Business_Event : unnamed
    Business_Event o-- Business_Event_Attribute : unnamed
    Contract o-- Contract_Status_Transition_Request : unnamed
    Contract o-- ADD_Contract_Account : unnamed
    Contract o-- Contract_Status_Transition : unnamed
    Contract o-- Contract_to_Applicant : unnamed
    Contract o-- Contract_Party_Role : unnamed
    Contract o-- Contract_Document : unnamed
    Contract o-- Contract_Commodity : unnamed
    Client --> Deal : unnamed
```

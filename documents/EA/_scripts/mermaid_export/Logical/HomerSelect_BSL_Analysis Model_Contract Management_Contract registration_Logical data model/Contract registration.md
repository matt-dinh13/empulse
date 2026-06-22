# Contract registration

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/Logical data model
- **Diagram ID**: 160758
- **Elements**: 11
- **Connectors**: 7

```mermaid
classDiagram
    class Logical_Data_Model_Contract_Document["Logical Data Model : Contract - Document"]
    class Registration_Status["Registration Status"]
    class Registration_Status_Transition["Registration Status Transition"]
    class RelatedSubject["RelatedSubject"]
    class Ticket["Ticket"]
    class Client_Document["Client Document"]
    class Contract_Document["Contract Document"]
    class MOD_Contract["{MOD}Contract"]
    class Logical_Data_Model_Document["Logical Data Model : Document "]
    class Logical_Data_Model_Ticketing_Logical_Data_Model["Logical Data Model : Ticketing - Logical Data Model"]
    class Document["Document"]
    Registration_Status_Transition ..> Registration_Status : unnamed
    Ticket o-- RelatedSubject : unnamed
    Client_Document --> Document : unnamed
    Contract_Document --> Document : unnamed
    MOD_Contract o-- Contract_Document : unnamed
    MOD_Contract ..> Registration_Status : unnamed
    MOD_Contract o-- Registration_Status_Transition : unnamed
```

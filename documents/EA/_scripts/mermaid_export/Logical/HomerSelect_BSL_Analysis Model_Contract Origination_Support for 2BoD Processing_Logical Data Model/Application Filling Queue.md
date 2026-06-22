# Application Filling Queue

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Support for 2BoD Processing/Logical Data Model
- **Diagram ID**: 123548
- **Elements**: 8
- **Connectors**: 10

```mermaid
classDiagram
    class Filling_Channel_Type["Filling Channel Type"]
    class MOD_Contract["{MOD}Contract"]
    class Application_Filling_Modification_Type["Application Filling Modification Type"]
    class Application_Filling_Transition["Application Filling Transition"]
    class Application_Filling_Group_Type["Application Filling Group Type"]
    class Application_Filling_Status["Application Filling Status"]
    class Preferred_Contact_Mode_Type["Preferred Contact Mode Type"]
    class Application_Filling_Queue["Application Filling Queue"]
    Application_Filling_Queue ..> Filling_Channel_Type : unnamed
    Application_Filling_Queue ..> Application_Filling_Group_Type : unnamed
    Application_Filling_Queue ..> Preferred_Contact_Mode_Type : unnamed
    Application_Filling_Queue ..> Application_Filling_Status : unnamed
    Application_Filling_Queue o-- Application_Filling_Transition : unnamed
    Application_Filling_Transition ..> Filling_Channel_Type : unnamed
    Application_Filling_Transition ..> Application_Filling_Status : unnamed
    Application_Filling_Transition ..> Application_Filling_Group_Type : unnamed
    Application_Filling_Transition ..> Application_Filling_Modification_Type : unnamed
    MOD_Contract o-- Application_Filling_Queue : unnamed
```

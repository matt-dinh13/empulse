# Card Balance Transfer Supplement - Logical Domain Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Logical Domain Model
- **Diagram ID**: 157607
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class Contract_Supplement_Status_Type["Contract Supplement Status Type"]
    class Contract_Supplement_Custom_Data["Contract Supplement Custom Data"]
    class Contract_Supplement["Contract Supplement"]
    class Contract_Supplement_Status_Transition["Contract Supplement Status Transition"]
    class Contract_Supplement_Document["Contract Supplement Document"]
    class Contract_Supplement_Status_Transitions_Reason["Contract Supplement Status Transitions Reason"]
    class ADD_Card_Balance_Transfer["{ADD}Card Balance Transfer"]
    class Supplement["Supplement"]
    class Document["Document"]
    class MOD_Contract["{MOD}Contract"]
    Contract_Supplement_Document ..> Document : unnamed
    Contract_Supplement ..> Contract_Supplement_Status_Type : unnamed
    Contract_Supplement_Status_Transition ..> Contract_Supplement_Status_Type : unnamed
    Contract_Supplement o-- Contract_Supplement_Custom_Data : unnamed
    Contract_Supplement o-- Contract_Supplement_Status_Transition : unnamed
    Contract_Supplement o-- Contract_Supplement_Document : unnamed
    Contract_Supplement --> Supplement : unnamed
    Contract_Supplement_Status_Transition ..> Contract_Supplement_Status_Transitions_Reason : unnamed
    Contract_Supplement_Status_Transitions_Reason ..> Contract_Supplement_Status_Type : unnamed
    MOD_Contract o-- Contract_Supplement : unnamed
```

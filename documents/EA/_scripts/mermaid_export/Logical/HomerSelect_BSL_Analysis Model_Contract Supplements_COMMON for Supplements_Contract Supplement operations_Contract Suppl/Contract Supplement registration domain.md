# Contract Supplement registration domain

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/Logical data model
- **Diagram ID**: 162868
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Document["Document"]
    class Client_Supplement_Document["Client Supplement Document"]
    class Contract_Supplement_Document["Contract Supplement Document"]
    class Registration_Status["Registration Status"]
    class Contract_Supplement_Registration_Status_Transition["Contract Supplement Registration Status Transition"]
    class Contract_Supplement["Contract Supplement"]
    Contract_Supplement ..> Registration_Status : unnamed
    Contract_Supplement_Registration_Status_Transition ..> Registration_Status : unnamed
    Contract_Supplement o-- Contract_Supplement_Registration_Status_Transition : unnamed
    Contract_Supplement o-- Client_Supplement_Document : unnamed
    Contract_Supplement o-- Contract_Supplement_Document : unnamed
```

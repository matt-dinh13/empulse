# Supplement definition - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model
- **Diagram ID**: 163996
- **Elements**: 16
- **Connectors**: 16

```mermaid
classDiagram
    class Scoring_Type["Scoring Type"]
    class Supplement_Process_Setting["Supplement Process Setting"]
    class Transaction_Supplement["Transaction Supplement"]
    class Evaluation_Request_Definition["Evaluation Request Definition"]
    class Signature_Requirement_Type["Signature Requirement Type"]
    class Request_Reason_Type["Request Reason Type"]
    class Required_Document_Container["Required Document Container"]
    class Person_Document_Type["Person Document Type"]
    class Supplement_To_Required_Document_Container["Supplement To Required Document Container"]
    class Contract_Supplement_Status_Type["Contract Supplement Status Type"]
    class Supplement_Type["Supplement Type"]
    class Supplement_Document_Required_Moment["Supplement Document Required Moment"]
    class Printout_Template["Printout Template"]
    class Document_Type["Document Type"]
    class Supplement_Document_Type["Supplement Document Type"]
    class Supplement["Supplement"]
    Person_Document_Type --> Document_Type : unnamed
    Supplement_Document_Type ..> Signature_Requirement_Type : unnamed
    Required_Document_Container --> Request_Reason_Type : unnamed
    Required_Document_Container o-- Person_Document_Type : unnamed
    Supplement_To_Required_Document_Container --> Required_Document_Container : unnamed
    Supplement_Process_Setting --> Contract_Supplement_Status_Type : unnamed
    Evaluation_Request_Definition --> Scoring_Type : unnamed
    Supplement_Document_Type --> Printout_Template : unnamed
    Supplement o-- Evaluation_Request_Definition : unnamed
    Supplement_Document_Type --> Document_Type : unnamed
    Supplement_Document_Type o-- Supplement_Document_Required_Moment : unnamed
    Supplement o-- Supplement_To_Required_Document_Container : unnamed
    Supplement o-- Supplement_Process_Setting : unnamed
    Supplement o-- Supplement_Document_Type : unnamed
    Supplement <|-- Transaction_Supplement : unnamed
    Supplement --> Supplement_Type : unnamed
```

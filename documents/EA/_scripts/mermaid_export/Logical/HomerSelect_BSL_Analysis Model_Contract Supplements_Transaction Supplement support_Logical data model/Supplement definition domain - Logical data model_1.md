# Supplement definition domain - Logical data model

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
    class Supplement_Type["Supplement Type"]
    class Supplement_Document_Required_Moment["Supplement Document Required Moment"]
    class Supplement_Document_Print_Moment["Supplement Document Print Moment"]
    class Printout_Template["Printout Template"]
    class Document_Type["Document Type"]
    class MOD_Check_Moment_Type["{MOD}Check Moment Type"]
    class Supplement_Document_Type["Supplement Document Type"]
    class Supplement["Supplement"]
    class Contract_Supplement_Status_Type["Contract Supplement Status Type"]
    Transaction_Supplement --> Supplement : unnamed
    Required_Document_Container --> Request_Reason_Type : unnamed
    Person_Document_Type --> Required_Document_Container : unnamed
    Supplement_To_Required_Document_Container --> Required_Document_Container : unnamed
    Supplement_Process_Setting --> Supplement : unnamed
    Supplement_Document_Required_Moment --> Supplement_Document_Type : unnamed
    Supplement_Document_Required_Moment --> MOD_Check_Moment_Type : unnamed
    Evaluation_Request_Definition --> Supplement : unnamed
    Supplement_Document_Print_Moment --> Supplement_Document_Type : unnamed
    Supplement_Document_Type --> Printout_Template : unnamed
    Supplement_Document_Type --> Signature_Requirement_Type : unnamed
    Supplement_Document_Type --> Supplement : unnamed
    Supplement_To_Required_Document_Container --> Supplement : unnamed
    Supplement_Document_Print_Moment --> MOD_Check_Moment_Type : unnamed
    Supplement --> Supplement_Type : unnamed
    Supplement_Type --> MOD_Check_Moment_Type : unnamed
    Supplement_Process_Setting --> Contract_Supplement_Status_Type : unnamed
```

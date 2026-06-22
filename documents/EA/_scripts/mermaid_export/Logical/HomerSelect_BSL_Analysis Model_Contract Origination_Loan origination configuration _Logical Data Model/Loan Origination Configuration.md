# Loan Origination Configuration

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model
- **Diagram ID**: 129057
- **Elements**: 19
- **Connectors**: 19

```mermaid
classDiagram
    class Field_Validation["Field Validation"]
    class Cross_Validation["Cross Validation"]
    class Document_Container_Status["Document Container Status"]
    class Process_Status["Process Status"]
    class Person_Scoring_Segment["Person Scoring Segment"]
    class Validations["Validations"]
    class Document_Printout["Document Printout"]
    class Container_Type["Container Type"]
    class Document_Processing_Configuration["Document Processing Configuration"]
    class Printout_Template["Printout Template"]
    class Document_Validation_Type["Document Validation Type"]
    class Form_Configuration["Form Configuration"]
    class Personal_Document_Container["Personal Document Container"]
    class Document_Type_To_Container["Document Type To Container"]
    class Subprocess_Parameter["Subprocess Parameter"]
    class Subprocess["Subprocess"]
    class Loan_Origination_Process["Loan Origination Process"]
    class Subprocess_Type["Subprocess Type"]
    class Document_Type["Document Type"]
    Subprocess o-- Cross_Validation : unnamed
    Subprocess ..> Process_Status : unnamed
    Loan_Origination_Process ..> Process_Status : unnamed
    Personal_Document_Container ..> Person_Scoring_Segment : unnamed
    Document_Processing_Configuration --> Document_Printout : unnamed
    Personal_Document_Container ..> Container_Type : unnamed
    Document_Printout ..> Printout_Template : unnamed
    Document_Processing_Configuration ..> Document_Validation_Type : unnamed
    Personal_Document_Container ..> Document_Container_Status : unnamed
    Subprocess o-- Form_Configuration : unnamed
    Document_Processing_Configuration ..> Document_Type : unnamed
    Subprocess o-- Personal_Document_Container : unnamed
    Subprocess o-- Field_Validation : unnamed
    Subprocess o-- Document_Processing_Configuration : unnamed
    Subprocess o-- Subprocess_Parameter : unnamed
    Loan_Origination_Process o-- Subprocess : unnamed
    Subprocess ..> Subprocess_Type : unnamed
    Document_Type_To_Container ..> Document_Type : unnamed
    Personal_Document_Container o-- Document_Type_To_Container : unnamed
```

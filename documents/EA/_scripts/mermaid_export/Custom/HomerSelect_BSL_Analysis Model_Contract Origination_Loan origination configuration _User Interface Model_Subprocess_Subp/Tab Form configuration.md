# Tab Form configuration

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /User Interface Model/Subprocess/Subprocess detail/Tab Form configuration
- **Diagram ID**: 124339
- **Elements**: 13
- **Connectors**: 4

```mermaid
graph TD
    Subprocess_detail["Subprocess detail"]
    InsuranceChangeAllowed["InsuranceChangeAllowed"]
    PresetRelatedPersons["PresetRelatedPersons"]
    MinNumberOfRelatedPersons["MinNumberOfRelatedPersons"]
    MinNumberOfCloseFamilyMembers["MinNumberOfCloseFamilyMembers"]
    DefaultDisbPaymentChannel["DefaultDisbPaymentChannel"]
    Cancel["Cancel"]
    Add["Add"]
    Form_code["Form code"]
    Add_Form["Add Form"]
    Add_Form["Add Form"]
    List_of_forms["List of forms"]
    Tab_Form_configuration["Tab Form configuration"]
    Subprocess_detail -->|unnamed| Tab_Form_configuration
    Cancel -->|unnamed| Tab_Form_configuration
    Add -->|unnamed| Tab_Form_configuration
    Add_Form -->|unnamed| Add_Form
```

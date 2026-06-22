# Assign ticket to department - user interface

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Assign ticket to department
- **Diagram ID**: 156201
- **Elements**: 12
- **Connectors**: 5

```mermaid
graph TD
    Comment["Comment"]
    Assign_to["Assign to"]
    Comment["Comment:"]
    UI_Control["UI Control"]
    OK["OK"]
    Cancel["Cancel"]
    Mandatory["Mandatory"]
    Printable_text_0_2047_characters["Printable text 0 - 2047 characters"]
    Assign_ticket_to_department_form_validations["Assign ticket to department form validations"]
    n_10_050_Assign_ticket_to_department["10.050 Assign ticket to department"]
    Department["Department"]
    Assign_ticket_to_department["Assign ticket to department"]
    Assign_ticket_to_department -->|unnamed| n_10_050_Assign_ticket_to_department
    Comment -->|unnamed| Printable_text_0_2047_characters
    Department -->|unnamed| Mandatory
    Assign_ticket_to_department_form_validations -->|unnamed| Mandatory
    Assign_ticket_to_department_form_validations -->|unnamed| Printable_text_0_2047_characters
```

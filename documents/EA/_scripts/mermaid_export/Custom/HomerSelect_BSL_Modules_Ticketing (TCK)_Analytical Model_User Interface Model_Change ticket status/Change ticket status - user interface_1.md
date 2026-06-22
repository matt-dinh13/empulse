# Change ticket status - user interface

```mermaid
graph TD
    Change_ticket_status_form_validations["Change ticket status form validations"]
    Printable_text_0_2047_characters["Printable text 0 - 2047 characters"]
    Operation_ticket["'%Operation%' ticket."]
    Comment["Comment"]
    Cancel["Cancel"]
    OK["OK"]
    ADD_v04_Change_ticket_status["{ADD_v04}Change ticket status"]
    Comment -->|unnamed| Printable_text_0_2047_characters
    Change_ticket_status_form_validations -->|unnamed| Printable_text_0_2047_characters
```

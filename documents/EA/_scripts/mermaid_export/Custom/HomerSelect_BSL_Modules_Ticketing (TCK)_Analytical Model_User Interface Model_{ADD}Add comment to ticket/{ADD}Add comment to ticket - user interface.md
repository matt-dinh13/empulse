# {ADD}Add comment to ticket - user interface

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/{ADD}Add comment to ticket
- **Diagram ID**: 156200
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    n_10_051_Add_comment_to_ticket["10.051 Add comment to ticket"]
    Mandatory["Mandatory"]
    Printable_text_0_2047_characters["Printable text 0 - 2047 characters"]
    Comment["Comment"]
    Cancel["Cancel"]
    OK["OK"]
    ADD_Add_comment["{ADD}Add comment"]
    Comment -->|unnamed| Printable_text_0_2047_characters
    Comment -->|unnamed| Mandatory
    ADD_Add_comment -->|unnamed| n_10_051_Add_comment_to_ticket
```

# E-commerce security level change

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface
- **Diagram ID**: 140751
- **Elements**: 10
- **Connectors**: 3

```mermaid
graph TD
    Printable_characters_up_to_255["Printable characters up to 255"]
    ADD_Note["{ADD}Note"]
    Mandatory["Mandatory"]
    New_security_level["New security level"]
    Current_security_level["Current security level"]
    Cancel["Cancel"]
    OK["OK"]
    Primary_mobile["Primary mobile"]
    n_12_542_Change_e_commerce_security_level["12.542 Change e-commerce security level"]
    E_commerce_security_level_change["E-commerce security level change"]
    E_commerce_security_level_change -->|unnamed| n_12_542_Change_e_commerce_security_level
    New_security_level -->|unnamed| Mandatory
    ADD_Note -->|unnamed| Printable_characters_up_to_255
```

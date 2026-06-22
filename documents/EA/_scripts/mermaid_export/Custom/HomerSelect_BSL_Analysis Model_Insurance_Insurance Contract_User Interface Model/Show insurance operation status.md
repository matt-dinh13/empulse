# Show insurance operation status

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/User Interface Model
- **Diagram ID**: 153464
- **Elements**: 12
- **Connectors**: 2

```mermaid
graph TD
    n_08_072_Change_insurance_operation_status["08.072 Change insurance operation status"]
    Printable_text_0_255_char["Printable text 0 - 255 char"]
    Cancel["Cancel"]
    Switch_off["Switch off"]
    Switch_on["Switch on"]
    Reason_of_status_change["Reason of status change"]
    Insurance_operation_status["Insurance operation status"]
    Insurance_type["Insurance type"]
    Insurance_name["Insurance name"]
    Insurance_code["Insurance code"]
    Tab_Insurance["Tab-Insurance"]
    Show_insurance_operation_status["Show insurance operation status"]
    Show_insurance_operation_status -->|unnamed| Tab_Insurance
    Reason_of_status_change -->|unnamed| Printable_text_0_255_char
```

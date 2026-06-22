# Other contract manipulations

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Other contract manipulations
- **Diagram ID**: 104070
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph LR
    Change_installment_due_date_of_Contract(("Change installment due date of Contract"))
    OBS_message_mapping_rules["OBS message mapping rules"]
    Change_Shop_code_on_Contract(("Change Shop code on Contract"))
    Repair_Client_name_on_Contract(("Repair Client name on Contract"))
    Change_VIN_code_on_Contract(("Change VIN code on Contract"))
    Change_installment_due_date_of_Contract -->|unnamed| OBS_message_mapping_rules
    Change_Shop_code_on_Contract -->|unnamed| OBS_message_mapping_rules
```

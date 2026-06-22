# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 1SP/Access Rights
- **Diagram ID**: 65907
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    n_01_081Fill_in_application_1SP_all_salesrooms["01.081Fill in application - 1SP (all salesrooms)"]
    n_01_081_Fill_in_application_1SP["01.081 Fill in application - 1SP"]
    Access_control_to_Contract_by_Salesroom["Access control to Contract by Salesroom"]
    MOD_01_081_Fill_in_application_1SP["{MOD}01.081 Fill in application - 1SP"]
    MOD_01_081_Fill_in_application_1SP -->|unnamed| n_01_081Fill_in_application_1SP_all_salesrooms
    MOD_01_081_Fill_in_application_1SP -->|unnamed| n_01_081_Fill_in_application_1SP
    MOD_01_081_Fill_in_application_1SP -->|unnamed| Access_control_to_Contract_by_Salesroom
```

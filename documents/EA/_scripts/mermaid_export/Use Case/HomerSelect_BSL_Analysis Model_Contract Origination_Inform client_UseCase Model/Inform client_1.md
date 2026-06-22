# Inform client

```mermaid
graph TD
    Panel_of_buttons_Panel_of_buttons["Panel of buttons : Panel of buttons"]
    Access_control_to_Contract_by_Salesroom["Access control to Contract by Salesroom"]
    n_01_305_Inform_client["01.305 Inform client"]
    User["User"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    Panel_of_buttons_Panel_of_buttons -->|unnamed| MOD_01_210_Show_contract_detail
    Panel_of_buttons_Panel_of_buttons -->|unnamed| n_01_305_Inform_client
    n_01_305_Inform_client -->|unnamed| Access_control_to_Contract_by_Salesroom
    User -->|unnamed| MOD_01_210_Show_contract_detail
    User -->|unnamed| n_01_305_Inform_client
```

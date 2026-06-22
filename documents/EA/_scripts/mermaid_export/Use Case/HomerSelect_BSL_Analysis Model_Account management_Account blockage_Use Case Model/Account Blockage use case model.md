# Account Blockage use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Account management/Account blockage/Use Case Model
- **Diagram ID**: 161439
- **Elements**: 11
- **Connectors**: 9

```mermaid
graph LR
    Create_communication_Create_communication["Create communication : Create communication"]
    n_07_041_Create_communication_record(("07.041 Create communication record"))
    Account_Blocking_Reason_Type["Account Blocking Reason Type"]
    User_interface_UI_Account_blockage["User interface :UI: Account blockage"]
    Validation_for_Account_unblocking["Validation for Account unblocking"]
    Validation_for_Account_blocking["Validation for Account blocking"]
    User[/"User"/]
    n_12_607_Show_account_blocking_overview(("12.607 Show account blocking overview"))
    n_12_610_Unblock_account(("12.610 Unblock account"))
    n_12_609_Block_account(("12.609 Block account"))
    Validations["Validations"]
    n_12_609_Block_account -->|unnamed| n_07_041_Create_communication_record
    Create_communication_Create_communication -->|unnamed| n_07_041_Create_communication_record
    User_interface_UI_Account_blockage -->|unnamed| n_12_607_Show_account_blocking_overview
    n_12_609_Block_account -->|unnamed| Validation_for_Account_blocking
    n_12_610_Unblock_account -->|unnamed| Validation_for_Account_unblocking
    n_12_607_Show_account_blocking_overview -->|unnamed| Account_Blocking_Reason_Type
    User --> n_12_610_Unblock_account
    User --> n_12_609_Block_account
    User --> n_12_607_Show_account_blocking_overview
```

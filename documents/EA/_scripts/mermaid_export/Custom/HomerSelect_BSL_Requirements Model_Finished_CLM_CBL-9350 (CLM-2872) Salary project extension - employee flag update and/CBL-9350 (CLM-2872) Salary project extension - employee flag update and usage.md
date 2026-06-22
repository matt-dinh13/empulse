# CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage
- **Diagram ID**: 126474
- **Elements**: 12
- **Connectors**: 5

```mermaid
graph TD
    n_08_085_Replace_Contract_Service_manually["08.085 Replace Contract Service manually"]
    n_01_782_Replace_Contract_Service["01.782 Replace Contract Service"]
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    MOD_Sign_contract_finalization["{MOD}Sign contract finalization"]
    ADD_Update_DataProtectionLevel_for_client_data["{ADD}Update DataProtectionLevel for client data"]
    REQ_2_update_rule_Account_detail_visibility_to_check_current["REQ#2 - update rule Account detail visibility to check current value of Data Protection level from PIF"]
    REQ_1_update_of_Data_Protection_level_in_PIF_during_contract["REQ#1 - update of Data Protection level in PIF during contract sign and service replacement"]
    n_12_601_Show_account_detail_salary_debit_card["12.601 Show account detail (salary debit card)"]
    MOD_Account_detail_visibility["{MOD}Account detail visibility"]
    MOD_12_601_Show_account_detail["{MOD}12.601 Show account detail"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    User_Interface_Model_Contract_detail["User Interface Model : Contract detail"]
    MOD_Account_detail_visibility -->|unnamed| n_12_601_Show_account_detail_salary_debit_card
    MOD_01_187_Sign_contract -->|unnamed| MOD_Sign_contract_finalization
    MOD_Sign_contract_finalization -->|unnamed| ADD_Update_DataProtectionLevel_for_client_data
    MOD_12_601_Show_account_detail -->|unnamed| MOD_Account_detail_visibility
    MOD_01_210_Show_contract_detail -->|unnamed| MOD_Account_detail_visibility
```

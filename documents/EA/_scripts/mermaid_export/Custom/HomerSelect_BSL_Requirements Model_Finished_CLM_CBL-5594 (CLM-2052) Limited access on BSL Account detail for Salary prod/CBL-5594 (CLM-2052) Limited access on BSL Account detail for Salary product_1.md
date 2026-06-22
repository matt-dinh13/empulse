# CBL-5594 (CLM-2052) Limited access on BSL Account detail for Salary product

```mermaid
graph TD
    n_12_601_Show_account_detail_salary_debit_card["12.601 Show account detail (salary debit card)"]
    MOD_Account_detail_visibility["{MOD}Account detail visibility"]
    MOD_12_601_Show_account_detail["{MOD}12.601 Show account detail"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    User_Interface_Model_Contract_detail["User Interface Model : Contract detail"]
    REQ_1_Hide_Account_panel_in_the_Contract_detail_screen_and_A["REQ#1 - Hide Account panel in the Contract detail screen and Accunt detail for salary debit card"]
    MOD_01_210_Show_contract_detail -->|unnamed| MOD_Account_detail_visibility
    MOD_12_601_Show_account_detail -->|unnamed| MOD_Account_detail_visibility
    MOD_Account_detail_visibility -->|unnamed| n_12_601_Show_account_detail_salary_debit_card
```

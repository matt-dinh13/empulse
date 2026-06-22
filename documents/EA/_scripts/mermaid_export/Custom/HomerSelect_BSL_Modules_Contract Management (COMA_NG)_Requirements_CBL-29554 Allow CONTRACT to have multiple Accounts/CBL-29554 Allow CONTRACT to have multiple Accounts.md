# CBL-29554 Allow CONTRACT to have multiple Accounts

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Requirements/CBL-29554 Allow CONTRACT to have multiple Accounts
- **Diagram ID**: 163144
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    Use_Case_Model_Processing_Account_Closure_notification_Use_C["Use Case Model : Processing Account Closure notification - Use Case Model"]
    DOBA_279_Processing_Accounts_Closure_notification["DOBA-279 Processing Accounts Closure notification"]
    ADD_AssignCreditAccount_Assign_Credit_Account["{ADD}AssignCreditAccount :Assign Credit Account"]
    getContractAccount_Get_Contract_Accounts["getContractAccount :Get Contract Accounts"]
    Logical_Data_Model_Logical_Data_Model["Logical Data Model : Logical Data Model"]
    DOBA_221_Allow_CONTRACT_to_have_multiple_Accounts_E_COMA["DOBA-221 Allow CONTRACT to have multiple Accounts - E-COMA"]
    Use_Case_Model_Processing_Account_Closure_notification_Use_C -->|unnamed| DOBA_279_Processing_Accounts_Closure_notification
    ADD_AssignCreditAccount_Assign_Credit_Account -->|unnamed| DOBA_221_Allow_CONTRACT_to_have_multiple_Accounts_E_COMA
    getContractAccount_Get_Contract_Accounts -->|unnamed| DOBA_221_Allow_CONTRACT_to_have_multiple_Accounts_E_COMA
    Logical_Data_Model_Logical_Data_Model -->|unnamed| DOBA_221_Allow_CONTRACT_to_have_multiple_Accounts_E_COMA
```

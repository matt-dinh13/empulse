# Insurance based on AccountBalanceChange EOM event

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features
- **Diagram ID**: 164077
- **Elements**: 15
- **Connectors**: 15

```mermaid
graph LR
    n_01_739_Process_Account_Balance_Change_EOM_notification(("01.739 Process Account Balance Change EOM notification"))
    Create_notifications_for_Insurance_prolongation["Create notifications for Insurance prolongation"]
    Insurance_Contract_notifications_Insurance_Contract_prolonga["Insurance Contract notifications : Insurance Contract prolongation"]
    Create_business_event["Create business event"]
    n_11_126_Check_client_eligibility_for_insurance(("11.126 Check client eligibility for insurance"))
    Check_DPD_limit_for_insurance_prolongation["Check DPD limit for insurance prolongation"]
    Use_Case_Model_Insurance_prolongation["Use Case Model : Insurance prolongation"]
    Account_Transactions_AccountTransactionWS_usage_on_REL_trans["Account Transactions : AccountTransactionWS - usage on REL transaction confirmation"]
    Determine_next_insurance_period["Determine next insurance period"]
    Create_Account_transaction_for_Insurance_rule["Create Account transaction for Insurance rule"]
    MOD_Saving_of_Payment_Channels["{MOD}Saving of Payment Channels"]
    n_11_020_Add_insurance_period(("11.020 Add insurance period"))
    MOD_05_091_Generate_outgoing_payment_insurance(("{MOD}05.091 Generate outgoing payment - insurance"))
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    CaBus_AM[/"CaBus-AM"/]
    n_01_739_Process_Account_Balance_Change_EOM_notification --> CaBus_AM
    n_01_739_Process_Account_Balance_Change_EOM_notification -.->|include| n_11_040_Activate_insurance_contract
    n_01_739_Process_Account_Balance_Change_EOM_notification -.->|include| MOD_05_091_Generate_outgoing_payment_insurance
    n_01_739_Process_Account_Balance_Change_EOM_notification -.->|include| n_11_020_Add_insurance_period
    n_01_739_Process_Account_Balance_Change_EOM_notification -->|unnamed| Create_Account_transaction_for_Insurance_rule
    n_01_739_Process_Account_Balance_Change_EOM_notification -->|unnamed| Determine_next_insurance_period
    Insurance_Contract_notifications_Insurance_Contract_prolonga -->|unnamed| Check_DPD_limit_for_insurance_prolongation
    n_01_739_Process_Account_Balance_Change_EOM_notification -->|unnamed| Check_DPD_limit_for_insurance_prolongation
    n_01_739_Process_Account_Balance_Change_EOM_notification -.->|include| n_11_126_Check_client_eligibility_for_insurance
    n_01_739_Process_Account_Balance_Change_EOM_notification -->|unnamed| Create_notifications_for_Insurance_prolongation
    Insurance_Contract_notifications_Insurance_Contract_prolonga -->|unnamed| Create_notifications_for_Insurance_prolongation
    Account_Transactions_AccountTransactionWS_usage_on_REL_trans -->|unnamed| n_01_739_Process_Account_Balance_Change_EOM_notification
    MOD_05_091_Generate_outgoing_payment_insurance -->|unnamed| MOD_Saving_of_Payment_Channels
    Create_notifications_for_Insurance_prolongation -->|unnamed| Create_business_event
    Check_DPD_limit_for_insurance_prolongation -->|unnamed| Create_business_event
```

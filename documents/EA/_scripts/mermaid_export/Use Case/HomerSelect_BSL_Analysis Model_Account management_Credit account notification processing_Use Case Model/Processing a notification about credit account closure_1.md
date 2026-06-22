# Processing a notification about credit account closure

```mermaid
graph TD
    Account_Notifications_Consumed_JMS_messages_Process_Account_["Account Notifications : Consumed JMS messages - Process Account Closure"]
    MOD_Saving_of_Payment_Channels["{MOD}Saving of Payment Channels"]
    Loyalty_program["Loyalty program"]
    n_01_360_Cancel_contract["01.360 Cancel contract"]
    Set_contract_status_to_Finished_rule["Set contract status to Finished rule"]
    n_01_740_Process_notification_about_credit_account_closure["01.740 Process notification about credit account closure "]
    CaBus_AM["CaBus-AM"]
    BSL["BSL"]
    n_11_149_Deactivate_insurance_on_contract["11.149 Deactivate insurance on contract"]
    n_05_550_Create_refund_of_overpayment_on_request["05.550 Create refund of overpayment on request"]
    n_01_740_Process_notification_about_credit_account_closure -->|unnamed| Set_contract_status_to_Finished_rule
    n_01_740_Process_notification_about_credit_account_closure -->|only for application| n_01_360_Cancel_contract
    n_01_740_Process_notification_about_credit_account_closure -->|unnamed| Account_Notifications_Consumed_JMS_messages_Process_Account_
    Loyalty_program -->|unnamed| n_01_740_Process_notification_about_credit_account_closure
    CaBus_AM -->|unnamed| n_01_740_Process_notification_about_credit_account_closure
    n_05_550_Create_refund_of_overpayment_on_request -->|unnamed| MOD_Saving_of_Payment_Channels
```

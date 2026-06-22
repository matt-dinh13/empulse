# Insurance based on EOM message

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features
- **Diagram ID**: 164074
- **Elements**: 22
- **Connectors**: 27

```mermaid
graph LR
    unnamed["unnamed"]
    Get_count_of_Insurance_Periods_passed["Get count of Insurance Periods passed"]
    unnamed["unnamed"]
    Create_Premium_Payment_Channel["Create Premium Payment Channel"]
    Create_request_for_insurance_revenue_payment["Create request for insurance revenue payment"]
    Create_request_for_insurance_premium_payment["Create request for insurance premium payment"]
    Insurance_change_notifications_Insurance_change_notification["Insurance change notifications : Insurance change notifications"]
    Logical_Data_Model_Insurance_Contract["Logical Data Model : Insurance Contract"]
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    Expected_date_of_Billing_period["Expected date of Billing period"]
    Calculate_Net_Premium_based_on_Revenue_Share["Calculate Net Premium based on Revenue Share"]
    n_11_770_Activate_insurance_on_first_account_transaction_not(("11.770 Activate insurance on first account transaction notification"))
    Generate_notification_about_insurance_change["Generate notification about insurance change"]
    Insurance_change_notifications_Insurance_change_notification["Insurance change notifications : Insurance change notifications"]
    DEL_Check_maximum_client_age_rule["{DEL}Check maximum client age rule"]
    CIF[/"CIF"/]
    n_11_126_Check_client_eligibility_for_insurance(("11.126 Check client eligibility for insurance"))
    n_11_773_Process_account_EOM_billing_finished_notification(("11.773 Process account EOM billing finished notification"))
    n_11_772_Activate_insurance_on_Contract_event_notification(("11.772 Activate insurance on Contract event notification"))
    CaBus_AM[/"CaBus-AM"/]
    n_11_122_Finalize_insurance_period(("11.122 Finalize insurance period"))
    n_01_770_Process_account_transaction_notification(("01.770 Process account transaction notification"))
    Insurance_change_notifications_Insurance_change_notification -->|unnamed| Generate_notification_about_insurance_change
    n_11_770_Activate_insurance_on_first_account_transaction_not -.->|include| n_11_040_Activate_insurance_contract
    n_01_770_Process_account_transaction_notification -.->|include| n_11_040_Activate_insurance_contract
    n_01_770_Process_account_transaction_notification -->|unnamed| n_11_770_Activate_insurance_on_first_account_transaction_not
    n_11_770_Activate_insurance_on_first_account_transaction_not -->|unnamed| Generate_notification_about_insurance_change
    n_11_773_Process_account_EOM_billing_finished_notification -->|unnamed| Get_count_of_Insurance_Periods_passed
    n_11_773_Process_account_EOM_billing_finished_notification -->|unnamed| Generate_notification_about_insurance_change
    n_11_770_Activate_insurance_on_first_account_transaction_not -->|unnamed| n_11_126_Check_client_eligibility_for_insurance
    n_11_773_Process_account_EOM_billing_finished_notification -.->|include| n_11_126_Check_client_eligibility_for_insurance
    unnamed -->|unnamed| n_11_773_Process_account_EOM_billing_finished_notification
    Logical_Data_Model_Insurance_Contract -->|unnamed| n_11_772_Activate_insurance_on_Contract_event_notification
    unnamed -->|unnamed| n_11_772_Activate_insurance_on_Contract_event_notification
    n_11_773_Process_account_EOM_billing_finished_notification -.->|include| n_11_122_Finalize_insurance_period
    Insurance_change_notifications_Insurance_change_notification -->|unnamed| Generate_notification_about_insurance_change
    CaBus_AM --> n_11_773_Process_account_EOM_billing_finished_notification
    CaBus_AM --> n_01_770_Process_account_transaction_notification
    CIF --> n_11_126_Check_client_eligibility_for_insurance
    Create_request_for_insurance_premium_payment -->|unnamed| Create_Premium_Payment_Channel
    n_11_122_Finalize_insurance_period -->|unnamed| Create_request_for_insurance_revenue_payment
    n_11_122_Finalize_insurance_period -->|unnamed| Calculate_Net_Premium_based_on_Revenue_Share
    n_11_122_Finalize_insurance_period -->|unnamed| Create_request_for_insurance_premium_payment
    n_11_772_Activate_insurance_on_Contract_event_notification -->|unnamed| Expected_date_of_Billing_period
    n_11_772_Activate_insurance_on_Contract_event_notification -.->|include| n_11_040_Activate_insurance_contract
    n_11_772_Activate_insurance_on_Contract_event_notification -->|unnamed| Generate_notification_about_insurance_change
    n_11_772_Activate_insurance_on_Contract_event_notification -.->|include| n_11_126_Check_client_eligibility_for_insurance
    n_11_126_Check_client_eligibility_for_insurance -->|unnamed| Generate_notification_about_insurance_change
    n_11_126_Check_client_eligibility_for_insurance -->|unnamed| DEL_Check_maximum_client_age_rule
```

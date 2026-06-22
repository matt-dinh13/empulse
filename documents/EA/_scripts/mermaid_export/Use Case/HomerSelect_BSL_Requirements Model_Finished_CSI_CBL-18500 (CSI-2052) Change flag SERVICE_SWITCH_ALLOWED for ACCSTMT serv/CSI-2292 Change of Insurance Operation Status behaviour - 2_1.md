# CSI-2292 Change of Insurance Operation Status behaviour - 2

```mermaid
graph TD
    CaBus_AM["CaBus-AM"]
    n_11_770_Activate_insurance_on_first_account_transaction_not["11.770 Activate insurance on first account transaction notification"]
    n_11_773_Process_account_EOM_billing_finished_notification["11.773 Process account EOM billing finished notification"]
    Create_LoanServiceRequest_for_Insurance_Operation_Status["Create LoanServiceRequest for Insurance Operation Status"]
    System_event["System event"]
    Generate_notification_about_insurance_change["Generate notification about insurance change"]
    n_11_772_Activate_insurance_on_Contract_event_notification["11.772 Activate insurance on Contract event notification"]
    n_11_126_Check_client_eligibility_for_insurance["11.126 Check client eligibility for insurance"]
    CaBus_AM -->|unnamed| n_11_773_Process_account_EOM_billing_finished_notification
    n_11_772_Activate_insurance_on_Contract_event_notification -->|unnamed| Create_LoanServiceRequest_for_Insurance_Operation_Status
    n_11_772_Activate_insurance_on_Contract_event_notification -->|unnamed| Generate_notification_about_insurance_change
    n_11_772_Activate_insurance_on_Contract_event_notification -->|unnamed| n_11_126_Check_client_eligibility_for_insurance
    n_11_126_Check_client_eligibility_for_insurance -->|unnamed| Create_LoanServiceRequest_for_Insurance_Operation_Status
    n_11_126_Check_client_eligibility_for_insurance -->|unnamed| Generate_notification_about_insurance_change
    n_11_770_Activate_insurance_on_first_account_transaction_not -->|unnamed| Generate_notification_about_insurance_change
    n_11_773_Process_account_EOM_billing_finished_notification -->|unnamed| n_11_126_Check_client_eligibility_for_insurance
    n_11_773_Process_account_EOM_billing_finished_notification -->|unnamed| Generate_notification_about_insurance_change
    n_11_770_Activate_insurance_on_first_account_transaction_not -->|unnamed| n_11_126_Check_client_eligibility_for_insurance
```

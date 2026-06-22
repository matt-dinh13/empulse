# IS-418 (CBL-2228) Changes for ID Payment SMS

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-418 (CBL-2228) Changes for ID Payment SMS
- **Diagram ID**: 105529
- **Elements**: 11
- **Connectors**: 11

```mermaid
graph TD
    Get_template_parameters_values["Get template parameters values"]
    n_03_702_Compose_and_send_notification_message["03.702 Compose and send notification message"]
    REQ_4_Change_localization_of_SMS_messages["REQ#4 Change localization of SMS messages"]
    diagram_DAAB0D6D_A2DF_4a6f_AB85_B24E284EC22F["$diagram://{DAAB0D6D-A2DF-4a6f-AB85-B24E284EC22F}"]
    REQ_3_Add_new_SMS_template_for_future_penalties["REQ#3 - Add new SMS template for future penalties"]
    el_1290959["Note"]
    MOD_03_701_Trigger_sending_SMS_to_client["{MOD}03.701 Trigger sending SMS to client"]
    REQ_1_Count_only_standard_installments_into_the_number_of_in["REQ#1 - Count only standard installments into the number of installments"]
    REQ_2_Use_first_name_instead_of_surname_in_salutation["REQ#2 - Use first name instead of surname in salutation"]
    CBL_2228_Changes_for_ID_Payment_SMS["CBL-2228 Changes for ID Payment SMS"]
    diagram_4538BCB5_A731_45df_84F9_D5D63F1EEE85["$diagram://{4538BCB5-A731-45df-84F9-D5D63F1EEE85}"]
    REQ_2_Use_first_name_instead_of_surname_in_salutation -->|unnamed| CBL_2228_Changes_for_ID_Payment_SMS
    REQ_1_Count_only_standard_installments_into_the_number_of_in -->|unnamed| CBL_2228_Changes_for_ID_Payment_SMS
    REQ_3_Add_new_SMS_template_for_future_penalties -->|unnamed| CBL_2228_Changes_for_ID_Payment_SMS
    diagram_4538BCB5_A731_45df_84F9_D5D63F1EEE85 -->|unnamed| CBL_2228_Changes_for_ID_Payment_SMS
    REQ_4_Change_localization_of_SMS_messages -->|unnamed| CBL_2228_Changes_for_ID_Payment_SMS
    diagram_DAAB0D6D_A2DF_4a6f_AB85_B24E284EC22F -->|unnamed| REQ_3_Add_new_SMS_template_for_future_penalties
    MOD_03_701_Trigger_sending_SMS_to_client -->|unnamed| REQ_3_Add_new_SMS_template_for_future_penalties
    MOD_03_701_Trigger_sending_SMS_to_client -->|unnamed| n_03_702_Compose_and_send_notification_message
    n_03_702_Compose_and_send_notification_message -->|unnamed| Get_template_parameters_values
    Get_template_parameters_values -->|unnamed| REQ_1_Count_only_standard_installments_into_the_number_of_in
    Get_template_parameters_values -->|unnamed| REQ_2_Use_first_name_instead_of_surname_in_salutation
```

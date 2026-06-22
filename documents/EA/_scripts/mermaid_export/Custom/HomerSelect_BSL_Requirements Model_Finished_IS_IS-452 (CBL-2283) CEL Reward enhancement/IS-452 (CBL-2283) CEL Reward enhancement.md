# IS-452 (CBL-2283) CEL Reward enhancement

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-452 (CBL-2283) CEL Reward enhancement
- **Diagram ID**: 105520
- **Elements**: 14
- **Connectors**: 14

```mermaid
graph TD
    Get_template_parameters_values_CELRewardMissedSE["Get template parameters values - CELRewardMissedSE"]
    MOD_Get_template_parameters_values_CELRewardSuccessSE["{MOD}Get template parameters values - CELRewardSuccessSE"]
    Get_template_parameters_values_IncomingPaymentPairingNotific["Get template parameters values - IncomingPaymentPairingNotificationSE"]
    MOD_03_701_Trigger_sending_SMS_to_client["{MOD}03.701 Trigger sending SMS to client"]
    MOD_08_601_Process_CEL_Reward["{MOD}08.601 Process CEL Reward"]
    n_08_602_Select_CEL_Rewards_contracts["08.602 Select CEL Rewards contracts"]
    GUI_changes_for_CELREW["GUI changes for CELREW"]
    Create_new_SMS_message_definitions_and_put_them_to_the_DB["Create new SMS message definitions and put them to the DB"]
    Create_and_integrate_new_fillers_for_CEL_rewards_in_Client_N["Create and integrate new fillers for CEL rewards in Client Notification functionality"]
    Modify_the_contract_selection_algorithm_for_CELREW_evaluatio["Modify the contract selection algorithm for CELREW evaluation"]
    Update_the_evaluation_of_CEL_reward_service["Update the evaluation of CEL reward service"]
    Enhance_generating_SMSs_by_SMS_notification_function["Enhance generating SMSs by 'SMS notification' function"]
    Enhance_the_CEL_Reward_service_behaviour["Enhance the CEL Reward service behaviour"]
    IS_452_CBL_2283_CEL_Reward_enhancement["IS-452 (CBL-2283) CEL Reward enhancement"]
    Enhance_generating_SMSs_by_SMS_notification_function -->|unnamed| IS_452_CBL_2283_CEL_Reward_enhancement
    Enhance_the_CEL_Reward_service_behaviour -->|unnamed| IS_452_CBL_2283_CEL_Reward_enhancement
    GUI_changes_for_CELREW -->|unnamed| Enhance_the_CEL_Reward_service_behaviour
    Modify_the_contract_selection_algorithm_for_CELREW_evaluatio -->|unnamed| Enhance_the_CEL_Reward_service_behaviour
    Update_the_evaluation_of_CEL_reward_service -->|unnamed| Enhance_the_CEL_Reward_service_behaviour
    Create_and_integrate_new_fillers_for_CEL_rewards_in_Client_N -->|unnamed| Enhance_generating_SMSs_by_SMS_notification_function
    Create_new_SMS_message_definitions_and_put_them_to_the_DB -->|unnamed| Enhance_generating_SMSs_by_SMS_notification_function
    MOD_03_701_Trigger_sending_SMS_to_client -->|unnamed| Create_new_SMS_message_definitions_and_put_them_to_the_DB
    MOD_Get_template_parameters_values_CELRewardSuccessSE -->|unnamed| Create_and_integrate_new_fillers_for_CEL_rewards_in_Client_N
    Get_template_parameters_values_CELRewardMissedSE -->|unnamed| Create_and_integrate_new_fillers_for_CEL_rewards_in_Client_N
    Get_template_parameters_values_IncomingPaymentPairingNotific -->|unnamed| Create_and_integrate_new_fillers_for_CEL_rewards_in_Client_N
    n_08_602_Select_CEL_Rewards_contracts -->|unnamed| Modify_the_contract_selection_algorithm_for_CELREW_evaluatio
    n_08_602_Select_CEL_Rewards_contracts -->|unnamed| MOD_08_601_Process_CEL_Reward
    MOD_08_601_Process_CEL_Reward -->|unnamed| Update_the_evaluation_of_CEL_reward_service
```

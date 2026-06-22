# SMS notification

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model
- **Diagram ID**: 163445
- **Elements**: 16
- **Connectors**: 14

```mermaid
graph LR
    Get_template_parameters_values_CELRewardMissedSE["Get template parameters values - CELRewardMissedSE"]
    MOD_Get_template_parameters_values_CELRewardSuccessSE["{MOD}Get template parameters values - CELRewardSuccessSE"]
    Get_template_parameters_values_IncomingPaymentPairingNotific["Get template parameters values - IncomingPaymentPairingNotificationSE"]
    Get_notification_messages_definitions["Get notification messages definitions"]
    Data_custom_formats["Data custom formats"]
    Get_template_parameters_values["Get template parameters values"]
    Get_template_body["Get template body"]
    Get_template_parameters["Get template parameters"]
    n_03_702_Compose_and_send_notification_message(("03.702 Compose and send notification message"))
    System_event[/"System event"/]
    Compose_SMS_message["Compose SMS message"]
    Get_contact_from_CIF["Get contact from CIF"]
    Message_Server[/"Message Server"/]
    CIF[/"CIF"/]
    MOD_03_701_Trigger_sending_SMS_to_client(("{MOD}03.701 Trigger sending SMS to client"))
    BSL["BSL"]
    Get_contact_from_CIF -->|unnamed| CIF
    n_03_702_Compose_and_send_notification_message -->|unnamed| Message_Server
    n_03_702_Compose_and_send_notification_message -->|unnamed| Get_contact_from_CIF
    n_03_702_Compose_and_send_notification_message -->|unnamed| Compose_SMS_message
    MOD_03_701_Trigger_sending_SMS_to_client -.->|include| n_03_702_Compose_and_send_notification_message
    n_03_702_Compose_and_send_notification_message -->|unnamed| Get_template_parameters
    n_03_702_Compose_and_send_notification_message -->|unnamed| Get_template_body
    Get_template_parameters_values_IncomingPaymentPairingNotific -->|unnamed| Get_template_parameters_values
    Get_template_parameters_values_CELRewardMissedSE -->|unnamed| Get_template_parameters_values
    MOD_Get_template_parameters_values_CELRewardSuccessSE -->|unnamed| Get_template_parameters_values
    n_03_702_Compose_and_send_notification_message -->|unnamed| Get_template_parameters_values
    Compose_SMS_message -->|unnamed| Data_custom_formats
    n_03_702_Compose_and_send_notification_message -->|unnamed| Get_notification_messages_definitions
    System_event --> MOD_03_701_Trigger_sending_SMS_to_client
```

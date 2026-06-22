# Client identification

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client identification/Use Case
- **Diagram ID**: 157640
- **Elements**: 11
- **Connectors**: 9

```mermaid
graph LR
    Party_notification_Party_notification["Party-notification : Party-notification"]
    MOD_06_051_Process_customers_notification_message(("{MOD}06.051 Process customers notification message"))
    BSL_to_CIF_mapping["BSL-to-CIF mapping"]
    n_01_009_Upload_file_to_document_archive(("01.009 Upload file to document archive"))
    Set_contract_status_to_canceled["Set contract status to canceled"]
    Set_contract_status_to_rejected["Set contract status to rejected"]
    BSL["BSL"]
    Time[/"Time"/]
    MOD_01_130_Process_application_sent_for_manual_identificatio(("{MOD}01.130 Process application sent for manual identification"))
    CIF[/"CIF"/]
    MOD_06_010_Identify_Client(("{MOD}06.010 Identify Client"))
    MOD_01_130_Process_application_sent_for_manual_identificatio --> Time
    MOD_06_051_Process_customers_notification_message -->|unnamed| Set_contract_status_to_rejected
    MOD_01_130_Process_application_sent_for_manual_identificatio -->|unnamed| Set_contract_status_to_canceled
    MOD_06_010_Identify_Client -->|unnamed| Set_contract_status_to_canceled
    MOD_06_010_Identify_Client -->|unnamed| n_01_009_Upload_file_to_document_archive
    MOD_06_010_Identify_Client -->|unnamed| BSL_to_CIF_mapping
    MOD_06_051_Process_customers_notification_message -->|unnamed| Party_notification_Party_notification
    CIF --> MOD_06_051_Process_customers_notification_message
    CIF --- MOD_06_010_Identify_Client
```

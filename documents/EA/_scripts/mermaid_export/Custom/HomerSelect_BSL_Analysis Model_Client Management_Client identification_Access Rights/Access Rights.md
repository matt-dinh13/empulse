# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client identification/Access Rights
- **Diagram ID**: 88697
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    MOD_06_051_Process_customers_notification_message["{MOD}06.051 Process customers notification message"]
    n_06_051_Process_customers_notification_message["06.051 Process customers notification message"]
    n_06_010_Identify_client["06.010 Identify client"]
    n_01_130_Process_application_sent_for_manual_identification["01.130 Process application sent for manual identification"]
    MOD_06_010_Identify_Client["{MOD}06.010 Identify Client"]
    MOD_01_130_Process_application_sent_for_manual_identificatio["{MOD}01.130 Process application sent for manual identification"]
    MOD_06_010_Identify_Client -->|unnamed| n_06_010_Identify_client
    MOD_06_051_Process_customers_notification_message -->|unnamed| n_06_051_Process_customers_notification_message
    MOD_01_130_Process_application_sent_for_manual_identificatio -->|unnamed| n_01_130_Process_application_sent_for_manual_identification
```

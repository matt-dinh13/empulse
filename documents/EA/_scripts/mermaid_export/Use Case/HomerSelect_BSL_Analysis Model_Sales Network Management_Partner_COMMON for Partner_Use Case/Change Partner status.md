# Change Partner status

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Use Case
- **Diagram ID**: 139392
- **Elements**: 14
- **Connectors**: 13

```mermaid
graph LR
    MOD_Algorithm_Set_partners_s_status_to_Closed["{MOD}Algorithm: Set partners's status to 'Closed'"]
    Algorithm_Set_partners_s_status_to_Blocked["Algorithm: Set partners's status to 'Blocked'"]
    Algorithm_Set_partners_s_status_to_Active["Algorithm: Set partners's status to 'Active'"]
    Algorithm_Set_payment_status_for_Salesroom_to_Disabled["Algorithm: Set payment status for Salesroom to Disabled"]
    Algorithm_Set_salesroom_s_status_to_Closed["Algorithm: Set salesroom's status to 'Closed'"]
    Algorithm_Set_payment_status_for_Partner_to_Allowed["Algorithm: Set payment status for Partner to Allowed"]
    Algorithm_Set_payment_status_for_Partner_to_Disabled["Algorithm: Set payment status for Partner to Disabled"]
    Algorithm_Set_salesroom_s_status_to_Blocked["Algorithm: Set salesroom's status to 'Blocked'"]
    User[/"User"/]
    n_09_040_Change_status_of_partner_manually(("09.040 Change status of partner manually"))
    n_09_040_Block_Partner_manually(("09.040 Block Partner manually"))
    n_09_040_Activate_Partner_manually(("09.040 Activate Partner manually"))
    n_09_040_Close_Partner_manually(("09.040 Close Partner manually"))
    Partner_activation_rules["Partner activation rules"]
    n_09_040_Activate_Partner_manually -->|unnamed| Partner_activation_rules
    n_09_040_Close_Partner_manually -->|unnamed| n_09_040_Change_status_of_partner_manually
    n_09_040_Block_Partner_manually -->|unnamed| n_09_040_Change_status_of_partner_manually
    n_09_040_Activate_Partner_manually -->|unnamed| n_09_040_Change_status_of_partner_manually
    Algorithm_Set_partners_s_status_to_Blocked -->|unnamed| Algorithm_Set_salesroom_s_status_to_Blocked
    MOD_Algorithm_Set_partners_s_status_to_Closed -->|unnamed| Algorithm_Set_payment_status_for_Partner_to_Disabled
    n_09_040_Activate_Partner_manually -->|unnamed| Algorithm_Set_payment_status_for_Partner_to_Allowed
    MOD_Algorithm_Set_partners_s_status_to_Closed -->|unnamed| Algorithm_Set_salesroom_s_status_to_Closed
    Algorithm_Set_salesroom_s_status_to_Closed -->|unnamed| Algorithm_Set_payment_status_for_Salesroom_to_Disabled
    n_09_040_Activate_Partner_manually -->|unnamed| Algorithm_Set_partners_s_status_to_Active
    n_09_040_Block_Partner_manually -->|unnamed| Algorithm_Set_partners_s_status_to_Blocked
    n_09_040_Close_Partner_manually -->|unnamed| MOD_Algorithm_Set_partners_s_status_to_Closed
    User --> n_09_040_Change_status_of_partner_manually
```

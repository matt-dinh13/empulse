# Partner - Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants
- **Diagram ID**: 104422
- **Elements**: 8
- **Connectors**: 1

```mermaid
graph TD
    MOD_Algorithm_Set_partners_s_status_to_Closed["{MOD}Algorithm: Set partners's status to 'Closed'"]
    Algorithm_Set_partners_s_status_to_Blocked["Algorithm: Set partners's status to 'Blocked'"]
    Algorithm_Set_partners_s_status_to_Active["Algorithm: Set partners's status to 'Active'"]
    Partner_activation_rules["Partner activation rules"]
    Partner_Risk_data["Partner Risk data"]
    Generating_partner_s_code["Generating partner’s code"]
    Algorithm_Set_payment_status_for_Partner_to_Disabled["Algorithm: Set payment status for Partner to Disabled"]
    Algorithm_Set_payment_status_for_Partner_to_Allowed["Algorithm: Set payment status for Partner to Allowed"]
    MOD_Algorithm_Set_partners_s_status_to_Closed -->|unnamed| Algorithm_Set_payment_status_for_Partner_to_Disabled
```

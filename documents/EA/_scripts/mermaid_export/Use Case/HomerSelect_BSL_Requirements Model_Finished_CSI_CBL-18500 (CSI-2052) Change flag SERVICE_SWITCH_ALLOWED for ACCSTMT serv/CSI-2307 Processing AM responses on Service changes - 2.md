# CSI-2307 Processing AM responses on Service changes - 2

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/CSI-2307 Processing AM responses on Service changes
- **Diagram ID**: 151088
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    n_11_147_Activate_insurance_on_contract(("11.147 Activate insurance on contract"))
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    n_11_770_Activate_insurance_on_first_account_transaction_not(("11.770 Activate insurance on first account transaction notification"))
    n_11_772_Activate_insurance_on_Contract_event_notification(("11.772 Activate insurance on Contract event notification"))
    n_11_772_Activate_insurance_on_Contract_event_notification -.->|include| n_11_040_Activate_insurance_contract
    n_11_770_Activate_insurance_on_first_account_transaction_not -.->|include| n_11_040_Activate_insurance_contract
    n_11_147_Activate_insurance_on_contract -.->|include| n_11_040_Activate_insurance_contract
```

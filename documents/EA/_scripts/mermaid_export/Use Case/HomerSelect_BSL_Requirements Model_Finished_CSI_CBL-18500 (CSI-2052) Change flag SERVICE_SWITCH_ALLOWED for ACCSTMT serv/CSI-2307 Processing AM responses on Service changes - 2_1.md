# CSI-2307 Processing AM responses on Service changes - 2

```mermaid
graph TD
    n_11_040_Activate_insurance_contract["11.040 Activate insurance contract"]
    n_11_770_Activate_insurance_on_first_account_transaction_not["11.770 Activate insurance on first account transaction notification"]
    n_11_772_Activate_insurance_on_Contract_event_notification["11.772 Activate insurance on Contract event notification"]
    n_11_147_Activate_insurance_on_contract["11.147 Activate insurance on contract"]
    n_11_772_Activate_insurance_on_Contract_event_notification -->|unnamed| n_11_040_Activate_insurance_contract
    n_11_770_Activate_insurance_on_first_account_transaction_not -->|unnamed| n_11_040_Activate_insurance_contract
    n_11_147_Activate_insurance_on_contract -->|unnamed| n_11_040_Activate_insurance_contract
```

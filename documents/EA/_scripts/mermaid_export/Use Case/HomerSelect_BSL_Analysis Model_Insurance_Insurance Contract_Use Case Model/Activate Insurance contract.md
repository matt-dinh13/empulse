# Activate Insurance contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Use Case Model
- **Diagram ID**: 164511
- **Elements**: 13
- **Connectors**: 11

```mermaid
graph LR
    n_11_772_Activate_insurance_on_Contract_event_notification(("11.772 Activate insurance on Contract event notification"))
    Insurance_based_on_EOM_message["Insurance based on EOM message"]
    Use_Case_Model_Processing_of_first_transaction_notification["Use Case Model :Processing of first transaction notification"]
    Determine_first_insurance_period["Determine first insurance period"]
    CaBus_AM[/"CaBus-AM"/]
    n_01_770_Process_account_transaction_notification(("01.770 Process account transaction notification"))
    Time[/"Time"/]
    MOD_01_274_Activate_disbursed_contracts(("{MOD}01.274 Activate disbursed contracts"))
    MOD_01_290_Activate_contract(("{MOD}01.290 Activate contract"))
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    n_11_020_Add_insurance_period(("11.020 Add insurance period"))
    Create_first_insurance_period_upon_activation["Create first insurance period upon activation"]
    Insurance_Contract_Management["Insurance Contract Management"]
    Create_first_insurance_period_upon_activation -->|unnamed| n_11_020_Add_insurance_period
    Create_first_insurance_period_upon_activation -->|unnamed| Determine_first_insurance_period
    MOD_01_290_Activate_contract -->|unnamed| Create_first_insurance_period_upon_activation
    MOD_01_290_Activate_contract -.->|include| n_11_040_Activate_insurance_contract
    MOD_01_274_Activate_disbursed_contracts -.->|include| MOD_01_290_Activate_contract
    n_01_770_Process_account_transaction_notification -.->|include| n_11_040_Activate_insurance_contract
    Use_Case_Model_Processing_of_first_transaction_notification -->|unnamed| n_01_770_Process_account_transaction_notification
    n_11_772_Activate_insurance_on_Contract_event_notification -.->|include| n_11_040_Activate_insurance_contract
    CaBus_AM --> MOD_01_290_Activate_contract
    CaBus_AM --> n_01_770_Process_account_transaction_notification
    Time --> MOD_01_274_Activate_disbursed_contracts
```

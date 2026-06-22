# Charging Penalty Over Limit

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Use Case
- **Diagram ID**: 159982
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph LR
    Fee_services_used_by_external_system_Collection["Fee services used by external system (Collection)"]
    Installment_Schedule_management["Installment Schedule management"]
    Calculate_Available_amount_in_Penalty_limit["Calculate Available amount in Penalty limit"]
    Evaluate_Period_for_Penalty_limit["Evaluate Period for Penalty limit"]
    n_04_150_Charge_Penalty_Registered_Over_Limit(("04.150 Charge Penalty Registered Over Limit"))
    MOD_03_091_Remove_installment_by_external_system(("{MOD}03.091 Remove installment by external system"))
    n_03_090_Remove_installment_manually(("03.090 Remove installment manually"))
    n_04_150_Charge_Penalty_Registered_Over_Limit -->|unnamed| Evaluate_Period_for_Penalty_limit
    n_04_150_Charge_Penalty_Registered_Over_Limit -->|unnamed| Calculate_Available_amount_in_Penalty_limit
    MOD_03_091_Remove_installment_by_external_system -.->|include| n_04_150_Charge_Penalty_Registered_Over_Limit
    n_03_090_Remove_installment_manually -.->|include| n_04_150_Charge_Penalty_Registered_Over_Limit
```

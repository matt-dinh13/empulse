# Generate outgoing payments for revolving transaction

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model
- **Diagram ID**: 164610
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph LR
    MOD_Saving_of_Payment_Channels["{MOD}Saving of Payment Channels"]
    MOD_05_091_Generate_outgoing_payment_insurance(("{MOD}05.091 Generate outgoing payment - insurance"))
    Use_Case_model_Revolving_Transaction_signature["Use Case model : Revolving Transaction signature"]
    Executed_from_other_system_use_cases["Executed from other system use cases"]
    Use_Case_model_Revolving_Transaction_signature -->|unnamed| MOD_05_091_Generate_outgoing_payment_insurance
    MOD_05_091_Generate_outgoing_payment_insurance -->|unnamed| MOD_Saving_of_Payment_Channels
```

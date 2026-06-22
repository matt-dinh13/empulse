# Cancel contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Use Case Model
- **Diagram ID**: 161504
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    Recalling_of_terminated_Installment_schedule["Recalling of terminated Installment schedule"]
    n_02_914_Set_Block_on_Customer_Marketing_Offers(("02.914 Set Block on Customer Marketing Offers"))
    Reactivate_bonus_services_on_contract["Reactivate bonus services on contract"]
    Set_contract_status_to_canceled["Set contract status to canceled"]
    n_01_326_Cancel_revolving_transactions_for_contract_cancella(("01.326 Cancel revolving transactions for contract cancellation"))
    n_01_474_Calculate_CEL_debt_info(("01.474 Calculate CEL debt info"))
    n_11_110_Cancel_insurance_contract(("11.110 Cancel insurance contract"))
    n_01_360_Cancel_contract(("01.360 Cancel contract"))
    MOD_05_240_Cancel_outgoing_payments(("{MOD}05.240 Cancel outgoing payments"))
    n_01_360_Cancel_contract -.->|include| MOD_05_240_Cancel_outgoing_payments
    n_01_360_Cancel_contract -.->|include| n_11_110_Cancel_insurance_contract
    n_01_360_Cancel_contract -.->|include| n_01_474_Calculate_CEL_debt_info
    n_01_360_Cancel_contract -.->|include| n_01_326_Cancel_revolving_transactions_for_contract_cancella
    n_01_360_Cancel_contract -->|only for application| Set_contract_status_to_canceled
    n_01_360_Cancel_contract -->|unnamed| Reactivate_bonus_services_on_contract
    n_01_360_Cancel_contract -->|unnamed| n_02_914_Set_Block_on_Customer_Marketing_Offers
    n_01_360_Cancel_contract -->|unnamed| Recalling_of_terminated_Installment_schedule
```

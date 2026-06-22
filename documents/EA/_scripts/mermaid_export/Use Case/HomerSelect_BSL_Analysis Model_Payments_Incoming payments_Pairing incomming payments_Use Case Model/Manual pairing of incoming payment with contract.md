# Manual pairing of incoming payment with contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model
- **Diagram ID**: 161907
- **Elements**: 8
- **Connectors**: 7

```mermaid
graph LR
    n_05_185_Prepare_payments_to_pairing(("05.185 Prepare payments to pairing"))
    Use_Case_Reflection_of_change_of_balance["Use Case : Reflection of change of balance"]
    n_05_030_Couple_incoming_payment_manually(("05.030 Couple incoming payment manually"))
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    Couple_incoming_payment_to_contract_Couple_incoming_payment_["Couple incoming payment to contract : Couple incoming payment to contract"]
    MOD_Contract_pairing_allowed["{MOD}Contract pairing allowed"]
    User[/"User"/]
    MOD_05_184_Reflect_change_of_balance(("{MOD}05.184 Reflect change of balance"))
    MOD_05_184_Reflect_change_of_balance -->|unnamed| Use_Case_Reflection_of_change_of_balance
    Couple_incoming_payment_to_contract_Couple_incoming_payment_ -->|unnamed| n_05_030_Couple_incoming_payment_manually
    n_05_030_Couple_incoming_payment_manually -.->|include| n_05_182_Pair_payment_with_contract
    n_05_030_Couple_incoming_payment_manually -.->|include| MOD_05_184_Reflect_change_of_balance
    n_05_030_Couple_incoming_payment_manually -->|unnamed| MOD_Contract_pairing_allowed
    n_05_030_Couple_incoming_payment_manually -.->|include| n_05_185_Prepare_payments_to_pairing
    User --- n_05_030_Couple_incoming_payment_manually
```

# Creating incoming payment

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Use Case Model
- **Diagram ID**: 162009
- **Elements**: 11
- **Connectors**: 6

```mermaid
graph LR
    Incoming_payment_module[/"Incoming payment module"/]
    Active_payment_already_exists["Active payment already exists"]
    Positive_amount["Positive amount"]
    n_05_185_Prepare_payments_to_pairing(("05.185 Prepare payments to pairing"))
    MOD_05_184_Reflect_change_of_balance(("{MOD}05.184 Reflect change of balance"))
    Process_create_incoming_payment_request(("Process create incoming payment request"))
    Incoming_payment_types_allowed_to_user_entering["Incoming payment types allowed to user entering"]
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    MOD_Contract_pairing_allowed["{MOD}Contract pairing allowed"]
    Check_if_Contract_exists["Check if Contract exists"]
    Algorithm_Find_contract_for_coupling["Algorithm: Find contract for coupling"]
    Process_create_incoming_payment_request -->|unnamed| Check_if_Contract_exists
    Process_create_incoming_payment_request -->|unnamed| MOD_Contract_pairing_allowed
    Process_create_incoming_payment_request -.->|include| n_05_182_Pair_payment_with_contract
    Process_create_incoming_payment_request -->|unnamed| Positive_amount
    Process_create_incoming_payment_request -->|unnamed| Active_payment_already_exists
    Incoming_payment_module -->|unnamed| Process_create_incoming_payment_request
```

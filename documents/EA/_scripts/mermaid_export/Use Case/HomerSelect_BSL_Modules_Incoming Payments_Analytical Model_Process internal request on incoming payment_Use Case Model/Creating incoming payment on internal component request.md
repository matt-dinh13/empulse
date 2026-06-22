# Creating incoming payment on internal component request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process internal request on incoming payment/Use Case Model
- **Diagram ID**: 143085
- **Elements**: 8
- **Connectors**: 7

```mermaid
graph LR
    UseCase_Model_Pair_payment_with_contract["UseCase Model : Pair payment with contract"]
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    MOD_CBL_4472_Contract_pairing_allowed["{MOD CBL-4472}Contract pairing allowed"]
    PaymentManagementWS_bez_zmen_PaymentManagementWS_for_local_s["PaymentManagementWS - bez zmen :PaymentManagementWS (for local systems)"]
    Create_Incoming_Payment_request_validation["Create Incoming Payment request validation"]
    Create_incoming_payment_rule["Create incoming payment rule"]
    MOD_05_380_Create_incoming_payment_on_local_request(("{MOD}05.380 Create incoming payment on local request"))
    System[/"System"/]
    MOD_05_380_Create_incoming_payment_on_local_request -->|unnamed| Create_incoming_payment_rule
    MOD_05_380_Create_incoming_payment_on_local_request -->|unnamed| Create_Incoming_Payment_request_validation
    MOD_05_380_Create_incoming_payment_on_local_request -->|unnamed| PaymentManagementWS_bez_zmen_PaymentManagementWS_for_local_s
    MOD_05_380_Create_incoming_payment_on_local_request -->|unnamed| MOD_CBL_4472_Contract_pairing_allowed
    UseCase_Model_Pair_payment_with_contract -->|unnamed| n_05_182_Pair_payment_with_contract
    MOD_05_380_Create_incoming_payment_on_local_request -.->|include| n_05_182_Pair_payment_with_contract
    System --> MOD_05_380_Create_incoming_payment_on_local_request
```

# Creation incoming payment on external request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process external request on incoming payment/Use Case Model
- **Diagram ID**: 161980
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    IncomingPaymentsWS_prejmenovano_z_PaymentsWS_IncomingPayment["IncomingPaymentsWS - prejmenovano z PaymentsWS : IncomingPaymentsWS"]
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    Create_incoming_payment_rule["Create incoming payment rule"]
    Active_payment_already_exists["Active payment already exists"]
    MOD_CBL_4472_Contract_pairing_allowed["{MOD CBL-4472}Contract pairing allowed"]
    Positive_amount["Positive amount"]
    Check_if_Contract_exists["Check if Contract exists"]
    n_05_361_Create_incoming_payment_on_external_request(("05.361 Create incoming payment on external request"))
    External_System[/"External System"/]
    IncomingPaymentsWS_prejmenovano_z_PaymentsWS_IncomingPayment -->|unnamed| n_05_361_Create_incoming_payment_on_external_request
    n_05_361_Create_incoming_payment_on_external_request -->|unnamed| Check_if_Contract_exists
    n_05_361_Create_incoming_payment_on_external_request -->|unnamed| Positive_amount
    n_05_361_Create_incoming_payment_on_external_request -->|unnamed| MOD_CBL_4472_Contract_pairing_allowed
    n_05_361_Create_incoming_payment_on_external_request -->|unnamed| Active_payment_already_exists
    n_05_361_Create_incoming_payment_on_external_request -->|unnamed| Create_incoming_payment_rule
    n_05_361_Create_incoming_payment_on_external_request -.->|include| n_05_182_Pair_payment_with_contract
    External_System --> n_05_361_Create_incoming_payment_on_external_request
```

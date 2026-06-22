# Recouple misposted payment on external request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process external request on incoming payment/Use Case Model
- **Diagram ID**: 161981
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    MOD_CBL_4472_Contract_pairing_allowed["{MOD CBL-4472}Contract pairing allowed"]
    n_05_362_Recouple_misposted_payment_on_external_request(("05.362 Recouple misposted payment on external request"))
    External_System[/"External System"/]
    n_05_362_Recouple_misposted_payment_on_external_request -->|unnamed| MOD_CBL_4472_Contract_pairing_allowed
    External_System --- n_05_362_Recouple_misposted_payment_on_external_request
```

# IncominPaymentEndpoint - RecouleMispostedPayment

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided REST API/IncomingPaymentEndpoint
- **Diagram ID**: 164103
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class n_05_362_Recouple_misposted_payment_on_external_request["05.362 Recouple misposted payment on external request"]
    class MOD_IncomingPaymentEndpoint["{MOD}IncomingPaymentEndpoint"]
    class RecoupleMispostedPaymentResponse["RecoupleMispostedPaymentResponse"]
    class RecoupleMispostedPaymentRequest["RecoupleMispostedPaymentRequest"]
    MOD_IncomingPaymentEndpoint ..> RecoupleMispostedPaymentRequest : unnamed
    MOD_IncomingPaymentEndpoint ..> RecoupleMispostedPaymentResponse : unnamed
    MOD_IncomingPaymentEndpoint --> n_05_362_Recouple_misposted_payment_on_external_request : unnamed
```

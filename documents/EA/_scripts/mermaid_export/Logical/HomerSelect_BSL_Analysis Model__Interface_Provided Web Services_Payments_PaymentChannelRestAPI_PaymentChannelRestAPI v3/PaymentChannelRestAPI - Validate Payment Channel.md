# PaymentChannelRestAPI - Validate Payment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3
- **Diagram ID**: 153955
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class n_05_338_Validate_Payment_Channel_via_REST_API["05.338 Validate Payment Channel via REST API"]
    class ValidatePaymentChannelResponse["ValidatePaymentChannelResponse"]
    class ValidatePaymentChannelRequest["ValidatePaymentChannelRequest"]
    class PaymentChannelRestAPI_V3["PaymentChannelRestAPI V3"]
    PaymentChannelRestAPI_V3 --> n_05_338_Validate_Payment_Channel_via_REST_API : unnamed
    PaymentChannelRestAPI_V3 ..> ValidatePaymentChannelRequest : unnamed
    PaymentChannelRestAPI_V3 ..> ValidatePaymentChannelResponse : unnamed
```

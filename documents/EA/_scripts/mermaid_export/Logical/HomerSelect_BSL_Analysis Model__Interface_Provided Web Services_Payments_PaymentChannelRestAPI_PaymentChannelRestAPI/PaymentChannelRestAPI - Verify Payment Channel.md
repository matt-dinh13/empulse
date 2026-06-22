# PaymentChannelRestAPI - Verify Payment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI
- **Diagram ID**: 153777
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class n_05_336_Verify_Payment_Channel_via_REST_API["05.336 Verify Payment Channel via REST API"]
    class ValidatePaymentChannelResponse["ValidatePaymentChannelResponse"]
    class ValidatePaymentChannelRequest["ValidatePaymentChannelRequest"]
    class PaymentChannelRestAPI["PaymentChannelRestAPI"]
    PaymentChannelRestAPI --> n_05_336_Verify_Payment_Channel_via_REST_API : unnamed
    PaymentChannelRestAPI ..> ValidatePaymentChannelRequest : unnamed
    PaymentChannelRestAPI ..> ValidatePaymentChannelResponse : unnamed
```

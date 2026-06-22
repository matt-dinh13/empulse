# PaymentChannelRestAPI - Update Payment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI
- **Diagram ID**: 153775
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class n_05_335_Update_Payment_channel_draft_via_REST_API["05.335 Update Payment channel draft via REST API"]
    class bankAccountData["bankAccountData"]
    class UpdatePaymentChannelResposne["UpdatePaymentChannelResposne"]
    class UpdatePaymentChannelRequest["UpdatePaymentChannelRequest"]
    class PaymentChannelRestAPI["PaymentChannelRestAPI"]
    PaymentChannelRestAPI --> n_05_335_Update_Payment_channel_draft_via_REST_API : unnamed
    PaymentChannelRestAPI ..> UpdatePaymentChannelRequest : unnamed
    PaymentChannelRestAPI ..> UpdatePaymentChannelResposne : unnamed
    UpdatePaymentChannelRequest ..> bankAccountData : unnamed
```

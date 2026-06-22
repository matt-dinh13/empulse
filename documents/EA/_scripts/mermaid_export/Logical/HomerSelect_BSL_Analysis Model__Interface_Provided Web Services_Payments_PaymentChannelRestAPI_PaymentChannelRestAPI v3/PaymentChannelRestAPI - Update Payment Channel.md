# PaymentChannelRestAPI - Update Payment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3
- **Diagram ID**: 153951
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class bankAccountData["bankAccountData"]
    class UpdatePaymentChannelResposne["UpdatePaymentChannelResposne"]
    class UpdatePaymentChannelRequest["UpdatePaymentChannelRequest"]
    class PaymentChannelRestAPI_V3["PaymentChannelRestAPI V3"]
    class n_05_335_Update_Payment_channel_draft_via_REST_API["05.335 Update Payment channel draft via REST API"]
    PaymentChannelRestAPI_V3 --> n_05_335_Update_Payment_channel_draft_via_REST_API : unnamed
    PaymentChannelRestAPI_V3 ..> UpdatePaymentChannelRequest : unnamed
    PaymentChannelRestAPI_V3 ..> UpdatePaymentChannelResposne : unnamed
    UpdatePaymentChannelRequest ..> bankAccountData : unnamed
```

# PaymentChannelRestAPI - Update Payment Channel

```mermaid
classDiagram
    class bankAccountData["bankAccountData"]
    class UpdatePaymentChannelResposne["UpdatePaymentChannelResposne"]
    class UpdatePaymentChannelRequest["UpdatePaymentChannelRequest"]
    class PaymentChannelRestAPI_V3["PaymentChannelRestAPI V3"]
    class n_05_335_Update_Payment_channel_draft_via_REST_API["05.335 Update Payment channel draft via REST API"]
    PaymentChannelRestAPI_V3 --> n_05_335_Update_Payment_channel_draft_via_REST_API : unnamed
    PaymentChannelRestAPI_V3 --> UpdatePaymentChannelRequest : unnamed
    PaymentChannelRestAPI_V3 --> UpdatePaymentChannelResposne : unnamed
    UpdatePaymentChannelRequest --> bankAccountData : unnamed
```

# PaymentChannelRestAPI - Update Payment Channel

```mermaid
classDiagram
    class n_05_335_Update_Payment_channel_draft_via_REST_API["05.335 Update Payment channel draft via REST API"]
    class bankAccountData["bankAccountData"]
    class UpdatePaymentChannelResposne["UpdatePaymentChannelResposne"]
    class UpdatePaymentChannelRequest["UpdatePaymentChannelRequest"]
    class PaymentChannelRestAPI["PaymentChannelRestAPI"]
    PaymentChannelRestAPI --> n_05_335_Update_Payment_channel_draft_via_REST_API : unnamed
    PaymentChannelRestAPI --> UpdatePaymentChannelRequest : unnamed
    PaymentChannelRestAPI --> UpdatePaymentChannelResposne : unnamed
    UpdatePaymentChannelRequest --> bankAccountData : unnamed
```

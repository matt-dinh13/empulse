# PaymentChannelRestAPI - Update Payment Channel or Draft

```mermaid
classDiagram
    class UpdatePaymentChannelOrDraftResponse["UpdatePaymentChannelOrDraftResponse"]
    class bankAccountData["bankAccountData"]
    class UpdatePaymentChannelOrDraftRequest["UpdatePaymentChannelOrDraftRequest"]
    class n_05_337_Update_Payment_Channel_or_Draft_via_REST_API["05.337 Update Payment Channel or Draft via REST API"]
    class PaymentChannelRestAPI_v4["PaymentChannelRestAPI v4"]
    PaymentChannelRestAPI_v4 --> UpdatePaymentChannelOrDraftResponse : External Reference
    PaymentChannelRestAPI_v4 --> UpdatePaymentChannelOrDraftRequest : External Reference
    PaymentChannelRestAPI_v4 --> n_05_337_Update_Payment_Channel_or_Draft_via_REST_API : unnamed
    UpdatePaymentChannelOrDraftRequest --> bankAccountData : unnamed
```

# PaymentChanenlRestAPI - Update Payment Channel or Draft

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3
- **Diagram ID**: 153954
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class n_05_337_Update_Payment_Channel_or_Draft_via_REST_API["05.337 Update Payment Channel or Draft via REST API"]
    class bankAccountData["bankAccountData"]
    class UpdatePaymentChannelOrDraftResponse["UpdatePaymentChannelOrDraftResponse"]
    class UpdatePaymentChannelOrDraftRequest["UpdatePaymentChannelOrDraftRequest"]
    class PaymentChannelRestAPI_V3["PaymentChannelRestAPI V3"]
    PaymentChannelRestAPI_V3 --> n_05_337_Update_Payment_Channel_or_Draft_via_REST_API : unnamed
    PaymentChannelRestAPI_V3 ..> UpdatePaymentChannelOrDraftResponse : unnamed
    PaymentChannelRestAPI_V3 ..> UpdatePaymentChannelOrDraftRequest : unnamed
    UpdatePaymentChannelOrDraftRequest ..> bankAccountData : unnamed
```

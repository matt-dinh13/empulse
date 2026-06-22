# PaymentChannelRestAPI - Create Payment Channel Draft

```mermaid
classDiagram
    class bankAccountData["bankAccountData"]
    class CreatePaymentChannelDraftResponse["CreatePaymentChannelDraftResponse"]
    class PaymentChannelRestAPI_V3["PaymentChannelRestAPI V3"]
    class CreatePaymentChannelDraftRequest["CreatePaymentChannelDraftRequest"]
    class ADD_05_333_Create_Payment_Channel_Draft_via_REST_API["{ADD}05.333 Create Payment Channel Draft via REST API"]
    CreatePaymentChannelDraftRequest --> bankAccountData : unnamed
    PaymentChannelRestAPI_V3 --> CreatePaymentChannelDraftResponse : unnamed
    PaymentChannelRestAPI_V3 --> ADD_05_333_Create_Payment_Channel_Draft_via_REST_API : unnamed
    PaymentChannelRestAPI_V3 --> CreatePaymentChannelDraftRequest : unnamed
```

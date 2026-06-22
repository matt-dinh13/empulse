# PaymentChannelRestAPI - Create Payment Channel Draft

```mermaid
classDiagram
    class bankAccountData["bankAccountData"]
    class PaymentChannelResultCode["PaymentChannelResultCode"]
    class CreatePaymentChannelDraftRequest["CreatePaymentChannelDraftRequest"]
    class ADD_05_333_Create_Payment_Channel_Draft_via_REST_API["{ADD}05.333 Create Payment Channel Draft via REST API"]
    class CretePaymentChannelDraftResponse["CretePaymentChannelDraftResponse"]
    class PaymentChannelRestAPI_v4["PaymentChannelRestAPI v4"]
    PaymentChannelRestAPI_v4 --> CreatePaymentChannelDraftRequest : unnamed
    PaymentChannelRestAPI_v4 --> ADD_05_333_Create_Payment_Channel_Draft_via_REST_API : unnamed
    PaymentChannelRestAPI_v4 --> CretePaymentChannelDraftResponse : unnamed
    CretePaymentChannelDraftResponse --> PaymentChannelResultCode : unnamed
    CreatePaymentChannelDraftRequest --> bankAccountData : unnamed
```

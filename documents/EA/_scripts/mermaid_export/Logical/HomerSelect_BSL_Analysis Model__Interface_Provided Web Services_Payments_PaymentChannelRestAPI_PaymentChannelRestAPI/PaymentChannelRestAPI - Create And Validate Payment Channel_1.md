# PaymentChannelRestAPI - Create And Validate Payment Channel

```mermaid
classDiagram
    class ADD_05_331_Create_And_Validate_Payment_Channel_via_REST_API["{ADD}05.331 Create And Validate Payment Channel via REST API"]
    class PaymentChannelResultCode["PaymentChannelResultCode"]
    class bankAccountData["bankAccountData"]
    class CreateAndValidatePaymentChannelResponse["CreateAndValidatePaymentChannelResponse"]
    class CreateAndValidatePaymentChanelRequest["CreateAndValidatePaymentChanelRequest"]
    class PaymentChannelRestAPI["PaymentChannelRestAPI"]
    PaymentChannelRestAPI --> CreateAndValidatePaymentChanelRequest : unnamed
    PaymentChannelRestAPI --> ADD_05_331_Create_And_Validate_Payment_Channel_via_REST_API : unnamed
    PaymentChannelRestAPI --> CreateAndValidatePaymentChannelResponse : unnamed
    CreateAndValidatePaymentChanelRequest --> bankAccountData : unnamed
    CreateAndValidatePaymentChannelResponse --> PaymentChannelResultCode : unnamed
```

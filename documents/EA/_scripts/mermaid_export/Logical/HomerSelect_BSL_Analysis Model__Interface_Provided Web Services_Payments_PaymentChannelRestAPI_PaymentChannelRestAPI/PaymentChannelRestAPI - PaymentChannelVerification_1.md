# PaymentChannelRestAPI - PaymentChannelVerification

```mermaid
classDiagram
    class PaymentChannelVerificationEntityDto["PaymentChannelVerificationEntityDto"]
    class PaymentChannelVerificationAttributes["PaymentChannelVerificationAttributes"]
    class ADD_05_334_Payment_Channel_Verification_via_REST_API["{ADD}05.334 Payment Channel Verification via REST API"]
    class PaymentChannelResultCode["PaymentChannelResultCode"]
    class PaymentChannelVerificationResponse["PaymentChannelVerificationResponse"]
    class VerifyPaymentChannelRequest["VerifyPaymentChannelRequest"]
    class PaymentChannelRestAPI["PaymentChannelRestAPI"]
    PaymentChannelRestAPI --> PaymentChannelVerificationResponse : unnamed
    PaymentChannelRestAPI --> VerifyPaymentChannelRequest : unnamed
    PaymentChannelRestAPI --> ADD_05_334_Payment_Channel_Verification_via_REST_API : unnamed
    VerifyPaymentChannelRequest --> PaymentChannelVerificationAttributes : unnamed
    PaymentChannelVerificationResponse --> PaymentChannelResultCode : unnamed
    VerifyPaymentChannelRequest --> PaymentChannelVerificationEntityDto : unnamed
```

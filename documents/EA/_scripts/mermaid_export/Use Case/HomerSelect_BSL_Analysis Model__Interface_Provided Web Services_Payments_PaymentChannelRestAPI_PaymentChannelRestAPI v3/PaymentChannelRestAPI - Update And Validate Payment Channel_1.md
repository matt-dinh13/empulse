# PaymentChannelRestAPI - Update And Validate Payment Channel

```mermaid
graph TD
    UpdateAndValidatePaymentChannelResponse["UpdateAndValidatePaymentChannelResponse"]
    UpdateAndValidatePaymentChannelRequest["UpdateAndValidatePaymentChannelRequest"]
    bankAccountData["bankAccountData"]
    PaymentChannelRestAPI_V3["PaymentChannelRestAPI V3"]
    ADD_05_332_Update_and_Validate_Payment_Channel_via_REST_API["{ADD}05.332 Update and Validate Payment Channel via REST API"]
    PaymentChannelRestAPI_V3 -->|unnamed| UpdateAndValidatePaymentChannelResponse
    PaymentChannelRestAPI_V3 -->|unnamed| ADD_05_332_Update_and_Validate_Payment_Channel_via_REST_API
    PaymentChannelRestAPI_V3 -->|unnamed| UpdateAndValidatePaymentChannelRequest
    UpdateAndValidatePaymentChannelRequest -->|unnamed| bankAccountData
```

# PaymentChannelRestAPI - Update And Validate Payment Channel

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3
- **Diagram ID**: 153949
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    UpdateAndValidatePaymentChannelResponse["UpdateAndValidatePaymentChannelResponse"]
    UpdateAndValidatePaymentChannelRequest["UpdateAndValidatePaymentChannelRequest"]
    bankAccountData["bankAccountData"]
    PaymentChannelRestAPI_V3["PaymentChannelRestAPI V3"]
    ADD_05_332_Update_and_Validate_Payment_Channel_via_REST_API(("{ADD}05.332 Update and Validate Payment Channel via REST API"))
    PaymentChannelRestAPI_V3 -->|unnamed| UpdateAndValidatePaymentChannelResponse
    PaymentChannelRestAPI_V3 -->|unnamed| ADD_05_332_Update_and_Validate_Payment_Channel_via_REST_API
    PaymentChannelRestAPI_V3 -->|unnamed| UpdateAndValidatePaymentChannelRequest
    UpdateAndValidatePaymentChannelRequest -->|unnamed| bankAccountData
```

# PaymentChannelRestAPI - Update and Validate Payment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4
- **Diagram ID**: 153971
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class UpdateAndValidatePaymentChannelResponse["UpdateAndValidatePaymentChannelResponse"]
    class bankAccountData["bankAccountData"]
    class UpdateAndValidatePaymentChannelRequest["UpdateAndValidatePaymentChannelRequest"]
    class ADD_05_332_Update_and_Validate_Payment_Channel_via_REST_API["{ADD}05.332 Update and Validate Payment Channel via REST API"]
    class PaymentChannelRestAPI_v4["PaymentChannelRestAPI v4"]
    PaymentChannelRestAPI_v4 ..> UpdateAndValidatePaymentChannelResponse : External Reference
    PaymentChannelRestAPI_v4 ..> UpdateAndValidatePaymentChannelRequest : External Reference
    PaymentChannelRestAPI_v4 --> ADD_05_332_Update_and_Validate_Payment_Channel_via_REST_API : unnamed
    UpdateAndValidatePaymentChannelRequest ..> bankAccountData : unnamed
```

# PaymentChannelWSV2 - Get Payment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV2
- **Diagram ID**: 125773
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class n_05_322_Get_payment_channel_on_external_request["05.322 Get payment channel on external request"]
    class ADD_PaymentChannelDto["{ADD}PaymentChannelDto"]
    class PaymentChannelResponseResult["PaymentChannelResponseResult"]
    class BankAccountDto["BankAccountDto"]
    class ADD_GetPaymentChannelResponse["{ADD}GetPaymentChannelResponse"]
    class ADD_GetPaymentChannelRequest["{ADD}GetPaymentChannelRequest"]
    class PaymentChannelWSV2["PaymentChannelWSV2"]
    PaymentChannelWSV2 ..> ADD_GetPaymentChannelResponse : unnamed
    PaymentChannelWSV2 ..> n_05_322_Get_payment_channel_on_external_request : unnamed
    PaymentChannelWSV2 ..> ADD_GetPaymentChannelRequest : unnamed
    ADD_GetPaymentChannelResponse ..> BankAccountDto : unnamed
    ADD_GetPaymentChannelResponse ..> ADD_PaymentChannelDto : unnamed
    ADD_GetPaymentChannelResponse ..> PaymentChannelResponseResult : unnamed
```

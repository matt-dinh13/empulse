# PaymentChannelWSV3 - Create Payment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3
- **Diagram ID**: 127865
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class MOD_05_320_Create_payment_channel_on_external_request["{MOD}05.320 Create payment channel on external request"]
    class PaymentChannelResponseResult["PaymentChannelResponseResult"]
    class ADD_CreatePaymentChannelResponse["{ADD}CreatePaymentChannelResponse"]
    class ADD_GeneralBankAccountDataDto["{ADD}GeneralBankAccountDataDto"]
    class ADD_PaymentPurposeTypeDto["{ADD}PaymentPurposeTypeDto"]
    class CreatePaymentChannelRequest["CreatePaymentChannelRequest"]
    class PaymentChannelWSV3["PaymentChannelWSV3"]
    PaymentChannelWSV3 ..> CreatePaymentChannelRequest : External Reference
    PaymentChannelWSV3 ..> ADD_CreatePaymentChannelResponse : unnamed
    PaymentChannelWSV3 ..> MOD_05_320_Create_payment_channel_on_external_request : unnamed
    ADD_CreatePaymentChannelResponse ..> PaymentChannelResponseResult : unnamed
    CreatePaymentChannelRequest ..> ADD_PaymentPurposeTypeDto : unnamed
    CreatePaymentChannelRequest ..> ADD_GeneralBankAccountDataDto : unnamed
```

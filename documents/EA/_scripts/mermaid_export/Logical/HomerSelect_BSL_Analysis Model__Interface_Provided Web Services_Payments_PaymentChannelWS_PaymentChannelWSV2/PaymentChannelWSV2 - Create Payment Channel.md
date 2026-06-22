# PaymentChannelWSV2 - Create Payment Channel

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV2
- **Diagram ID**: 125771
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class PaymentChannelResponseResult["PaymentChannelResponseResult"]
    class ADD_CreatePaymentChannelResponse["{ADD}CreatePaymentChannelResponse"]
    class ADD_GeneralBankAccountDataDto["{ADD}GeneralBankAccountDataDto"]
    class ADD_PaymentPurposeTypeDto["{ADD}PaymentPurposeTypeDto"]
    class ADD_CreatePaymentChannelRequest["{ADD}CreatePaymentChannelRequest"]
    class PaymentChannelWSV2["PaymentChannelWSV2"]
    PaymentChannelWSV2 ..> ADD_CreatePaymentChannelRequest : unnamed
    PaymentChannelWSV2 ..> ADD_CreatePaymentChannelResponse : unnamed
    ADD_CreatePaymentChannelRequest ..> ADD_PaymentPurposeTypeDto : unnamed
    ADD_CreatePaymentChannelRequest ..> ADD_GeneralBankAccountDataDto : unnamed
    ADD_CreatePaymentChannelResponse ..> PaymentChannelResponseResult : unnamed
```

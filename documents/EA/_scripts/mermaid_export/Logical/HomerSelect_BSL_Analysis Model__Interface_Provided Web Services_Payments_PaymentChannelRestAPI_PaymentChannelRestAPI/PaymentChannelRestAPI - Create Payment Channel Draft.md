# PaymentChannelRestAPI - Create Payment Channel Draft

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI
- **Diagram ID**: 153774
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_05_333_Create_Payment_Channel_Draft_via_REST_API["{ADD}05.333 Create Payment Channel Draft via REST API"]
    class PaymentChannelResultCode["PaymentChannelResultCode"]
    class bankAccountData["bankAccountData"]
    class CreatePaymentChannelDraftResponse["CreatePaymentChannelDraftResponse"]
    class CreatePaymentChannelDraftRequest["CreatePaymentChannelDraftRequest"]
    class PaymentChannelRestAPI["PaymentChannelRestAPI"]
    PaymentChannelRestAPI ..> ADD_05_333_Create_Payment_Channel_Draft_via_REST_API : unnamed
    PaymentChannelRestAPI ..> CreatePaymentChannelDraftRequest : unnamed
    PaymentChannelRestAPI ..> CreatePaymentChannelDraftResponse : unnamed
    CreatePaymentChannelDraftRequest ..> bankAccountData : unnamed
    CreatePaymentChannelDraftResponse ..> PaymentChannelResultCode : unnamed
```

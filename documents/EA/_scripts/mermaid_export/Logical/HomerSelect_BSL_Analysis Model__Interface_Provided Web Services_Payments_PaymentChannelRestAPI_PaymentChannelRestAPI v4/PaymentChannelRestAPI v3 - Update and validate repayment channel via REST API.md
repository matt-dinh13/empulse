# PaymentChannelRestAPI v3 - Update and validate repayment channel via REST API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4
- **Diagram ID**: 153974
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class UpdateAndValidateRepaymentChannelResponse["UpdateAndValidateRepaymentChannelResponse"]
    class UpdateAndValidateRepaymentChannelRequest["UpdateAndValidateRepaymentChannelRequest"]
    class PaymentChannelRestAPI_V3["PaymentChannelRestAPI V3"]
    class ADD_05_339_Update_and_validate_Repayment_Channel_via_REST_AP["{ADD}05.339 Update and validate Repayment Channel via REST API"]
    PaymentChannelRestAPI_V3 ..> UpdateAndValidateRepaymentChannelResponse : unnamed
    PaymentChannelRestAPI_V3 ..> UpdateAndValidateRepaymentChannelRequest : unnamed
    PaymentChannelRestAPI_V3 --> ADD_05_339_Update_and_validate_Repayment_Channel_via_REST_AP : unnamed
```

# OutgoingPaymentsWS - generateOutgoingPaymentOrder

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentsWS
- **Diagram ID**: 128367
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ADD_GeneralBankAccountDataDto["{ADD}GeneralBankAccountDataDto"]
    class OutgoingPaymentTypeDto["OutgoingPaymentTypeDto"]
    class GenerateOutgoingPaymentOrderResponseResultTypeDto["GenerateOutgoingPaymentOrderResponseResultTypeDto"]
    class n_05_112_Generate_payment_orders_on_external_request["05.112 Generate payment orders on external request"]
    class GenerateOutgoingPaymentOrderResponse["GenerateOutgoingPaymentOrderResponse"]
    class GenerateOutgoingPaymentOrderRequest["GenerateOutgoingPaymentOrderRequest"]
    class OutgoingPaymentsWS["OutgoingPaymentsWS"]
    OutgoingPaymentsWS ..> n_05_112_Generate_payment_orders_on_external_request : unnamed
    OutgoingPaymentsWS ..> GenerateOutgoingPaymentOrderResponse : unnamed
    OutgoingPaymentsWS ..> GenerateOutgoingPaymentOrderRequest : unnamed
    GenerateOutgoingPaymentOrderRequest ..> OutgoingPaymentTypeDto : unnamed
    GenerateOutgoingPaymentOrderRequest ..> ADD_GeneralBankAccountDataDto : unnamed
    GenerateOutgoingPaymentOrderResponse ..> GenerateOutgoingPaymentOrderResponseResultTypeDto : unnamed
```

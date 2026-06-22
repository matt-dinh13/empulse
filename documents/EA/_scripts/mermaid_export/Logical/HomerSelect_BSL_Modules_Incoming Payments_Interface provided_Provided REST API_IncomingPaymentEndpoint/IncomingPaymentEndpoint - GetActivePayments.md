# IncomingPaymentEndpoint - GetActivePayments

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided REST API/IncomingPaymentEndpoint
- **Diagram ID**: 164104
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class getActivePayments["getActivePayments"]
    class GetActivePaymentsResponse["GetActivePaymentsResponse"]
    class MoneyDto["MoneyDto"]
    class PaymentDto["PaymentDto"]
    class getActivePaymentsRequest["getActivePaymentsRequest"]
    class MOD_IncomingPaymentEndpoint["{MOD}IncomingPaymentEndpoint"]
    MOD_IncomingPaymentEndpoint ..> getActivePaymentsRequest : unnamed
    GetActivePaymentsResponse ..> PaymentDto : unnamed
    PaymentDto ..> MoneyDto : unnamed
    MOD_IncomingPaymentEndpoint ..> GetActivePaymentsResponse : unnamed
    MOD_IncomingPaymentEndpoint --> getActivePayments : unnamed
```

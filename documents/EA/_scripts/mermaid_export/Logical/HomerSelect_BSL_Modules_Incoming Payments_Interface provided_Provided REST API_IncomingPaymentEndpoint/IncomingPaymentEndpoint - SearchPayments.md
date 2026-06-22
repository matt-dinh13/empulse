# IncomingPaymentEndpoint - SearchPayments

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided REST API/IncomingPaymentEndpoint
- **Diagram ID**: 164105
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_searchPayments["{ADD}searchPayments"]
    class PaymentDto["PaymentDto"]
    class ADD_SearchPaymentsResponse["{ADD}SearchPaymentsResponse"]
    class ADD_SearchPaymentsRequestDTO["{ADD}SearchPaymentsRequestDTO"]
    class MOD_IncomingPaymentEndpoint["{MOD}IncomingPaymentEndpoint"]
    MOD_IncomingPaymentEndpoint ..> ADD_SearchPaymentsRequestDTO : unnamed
    MOD_IncomingPaymentEndpoint ..> ADD_SearchPaymentsResponse : unnamed
    ADD_SearchPaymentsResponse ..> PaymentDto : unnamed
    ADD_searchPayments <|.. MOD_IncomingPaymentEndpoint : unnamed
```

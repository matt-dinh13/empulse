# Account TransactionsWS - charge/cancel fee

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions
- **Diagram ID**: 149533
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class CancelAccountItemResponse["CancelAccountItemResponse"]
    class CancelAccountItemRequest["CancelAccountItemRequest"]
    class CancelTransactionResultCodeDto["CancelTransactionResultCodeDto"]
    class FeeDto["FeeDto"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class SourceSystemEnumDto["SourceSystemEnumDto"]
    class ChargeFeeStatusDto["ChargeFeeStatusDto"]
    class ChargeFeeResponse["ChargeFeeResponse"]
    class ChargeFeeRequest["ChargeFeeRequest"]
    class AccountTransactionWS["AccountTransactionWS"]
    AccountTransactionWS --> CancelAccountItemRequest : unnamed
    AccountTransactionWS ..> ChargeFeeResponse : unnamed
    AccountTransactionWS ..> ChargeFeeRequest : unnamed
    AccountTransactionWS --> CancelAccountItemResponse : unnamed
    ChargeFeeRequest ..> FeeDto : unnamed
    ChargeFeeResponse ..> ChargeFeeStatusDto : unnamed
    TransactionSourceIdDto ..> SourceSystemEnumDto : unnamed
    CancelAccountItemRequest ..> TransactionSourceIdDto : unnamed
    CancelAccountItemResponse ..> CancelTransactionResultCodeDto : unnamed
    FeeDto ..> TransactionSourceIdDto : unnamed
```

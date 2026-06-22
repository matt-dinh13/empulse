# Account TransactionsWS - usage on REL transaction confirmation and IP conversion

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions
- **Diagram ID**: 149535
- **Elements**: 10
- **Connectors**: 8

```mermaid
classDiagram
    class TransactionDto["TransactionDto"]
    class BaseTransactionDto["BaseTransactionDto"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class ConfirmTransactionResultCodeDto["ConfirmTransactionResultCodeDto"]
    class TransactionTypeVariantTypeDto["TransactionTypeVariantTypeDto"]
    class MOD_ConfirmationTxDto["{MOD}ConfirmationTxDto"]
    class ConfirmTransactionWithIPConversionResponse["ConfirmTransactionWithIPConversionResponse"]
    class ConfirmTransactionWithIPConversionRequest["ConfirmTransactionWithIPConversionRequest"]
    class AccountTransactionWS["AccountTransactionWS"]
    AccountTransactionWS --> ConfirmTransactionWithIPConversionRequest : unnamed
    AccountTransactionWS --> ConfirmTransactionWithIPConversionResponse : unnamed
    ConfirmTransactionWithIPConversionRequest ..> MOD_ConfirmationTxDto : unnamed
    ConfirmTransactionWithIPConversionResponse ..> ConfirmTransactionResultCodeDto : unnamed
    TransactionDto <|-- MOD_ConfirmationTxDto : unnamed
    MOD_ConfirmationTxDto ..> TransactionTypeVariantTypeDto : unnamed
    BaseTransactionDto <|-- TransactionDto : unnamed
    BaseTransactionDto ..> TransactionSourceIdDto : unnamed
```

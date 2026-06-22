# AccountTransactionWS - usage on REL transaction confirmation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions
- **Diagram ID**: 149529
- **Elements**: 14
- **Connectors**: 13

```mermaid
classDiagram
    class TransactionTypeVariantTypeDto["TransactionTypeVariantTypeDto"]
    class TransactionSubTypeDto["TransactionSubTypeDto"]
    class TerminalTypeDto["TerminalTypeDto"]
    class TerminalOwnershipDto["TerminalOwnershipDto"]
    class TerminalLocationTypeDto["TerminalLocationTypeDto"]
    class TxTerminalInfoDto["TxTerminalInfoDto"]
    class ConfirmTransactionResultCodeDto["ConfirmTransactionResultCodeDto"]
    class MOD_ConfirmationTxDto["{MOD}ConfirmationTxDto"]
    class TransactionDto["TransactionDto"]
    class BaseTransactionDto["BaseTransactionDto"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class ConfirmTransactionResponse["ConfirmTransactionResponse"]
    class ConfirmTransactionRequest["ConfirmTransactionRequest"]
    class AccountTransactionWS["AccountTransactionWS"]
    AccountTransactionWS ..> ConfirmTransactionResponse : unnamed
    AccountTransactionWS ..> ConfirmTransactionRequest : unnamed
    ConfirmTransactionRequest ..> MOD_ConfirmationTxDto : unnamed
    ConfirmTransactionResponse ..> ConfirmTransactionResultCodeDto : unnamed
    TransactionDto <|-- MOD_ConfirmationTxDto : unnamed
    MOD_ConfirmationTxDto ..> TransactionTypeVariantTypeDto : unnamed
    MOD_ConfirmationTxDto ..> TransactionSubTypeDto : unnamed
    TransactionDto ..> TxTerminalInfoDto : unnamed
    TxTerminalInfoDto ..> TerminalOwnershipDto : unnamed
    TxTerminalInfoDto ..> TerminalTypeDto : unnamed
    TxTerminalInfoDto ..> TerminalLocationTypeDto : unnamed
    BaseTransactionDto <|-- TransactionDto : unnamed
    BaseTransactionDto ..> TransactionSourceIdDto : unnamed
```

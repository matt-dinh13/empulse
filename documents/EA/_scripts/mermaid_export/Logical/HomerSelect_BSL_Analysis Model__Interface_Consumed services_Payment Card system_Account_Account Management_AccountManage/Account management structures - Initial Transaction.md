# Account management structures - Initial Transaction

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures
- **Diagram ID**: 158212
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class ConfirmationTxAndIPTransferDto["ConfirmationTxAndIPTransferDto"]
    class AuthorizationTxAndIPTransferDto["AuthorizationTxAndIPTransferDto"]
    class TransactionTypeDto["TransactionTypeDto"]
    class FeeDto["FeeDto"]
    class AuthorizationTxDto["AuthorizationTxDto"]
    class TransactionSubTypeDto["TransactionSubTypeDto"]
    class SourceSystemEnumDto["SourceSystemEnumDto"]
    class MOD_ConfirmationTxDto["{MOD}ConfirmationTxDto"]
    class TransactionDto["TransactionDto"]
    class BaseTransactionDto["BaseTransactionDto"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    TransactionSourceIdDto ..> SourceSystemEnumDto : unnamed
    BaseTransactionDto ..> TransactionTypeDto : unnamed
    BaseTransactionDto ..> TransactionSourceIdDto : unnamed
    BaseTransactionDto <|-- TransactionDto : unnamed
    TransactionDto <|-- MOD_ConfirmationTxDto : unnamed
    MOD_ConfirmationTxDto ..> TransactionSubTypeDto : unnamed
    TransactionDto <|-- AuthorizationTxDto : unnamed
    FeeDto ..> TransactionSourceIdDto : unnamed
    AuthorizationTxAndIPTransferDto ..> AuthorizationTxDto : unnamed
    ConfirmationTxAndIPTransferDto ..> MOD_ConfirmationTxDto : unnamed
```

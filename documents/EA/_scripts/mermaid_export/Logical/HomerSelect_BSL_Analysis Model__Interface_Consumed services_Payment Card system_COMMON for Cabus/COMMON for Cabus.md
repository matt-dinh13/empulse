# COMMON for Cabus

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/COMMON for Cabus
- **Diagram ID**: 139540
- **Elements**: 15
- **Connectors**: 6

```mermaid
classDiagram
    class RoundingType["RoundingType"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class TransactionSourceCodeType["TransactionSourceCodeType"]
    class SourceSystemEnumDto["SourceSystemEnumDto"]
    class TransactionSubTypeDto["TransactionSubTypeDto"]
    class TransactionTypeDto["TransactionTypeDto"]
    class TerminalTypeDto["TerminalTypeDto"]
    class StaticDataReferenceDto["StaticDataReferenceDto"]
    class PropertySearchDto["PropertySearchDto"]
    class PropertyDto["PropertyDto"]
    class PositiveMoneyDto["PositiveMoneyDto"]
    class MoneyDto["MoneyDto"]
    class CurrencyCodeType["CurrencyCodeType"]
    class ErrorDto["ErrorDto"]
    class ErrorTypeDto["ErrorTypeDto"]
    ErrorDto <|-- ErrorTypeDto : unnamed
    PositiveMoneyDto ..> CurrencyCodeType : unnamed
    MoneyDto ..> CurrencyCodeType : unnamed
    MoneyDto <|-- PositiveMoneyDto : unnamed
    TransactionSourceIdDto ..> SourceSystemEnumDto : unnamed
    TransactionSourceIdDto --> TransactionSourceCodeType : unnamed
```

# Debt Catalog Types

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Debt Catalog Management/Types
- **Diagram ID**: 111507
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class UpdateAccountDebtInfoResponse["UpdateAccountDebtInfoResponse"]
    class UpdateAccountDebtInfoRequest["UpdateAccountDebtInfoRequest"]
    class AccountDebtInfoDto["AccountDebtInfoDto"]
    class MoneyDto["MoneyDto"]
    AccountDebtInfoDto ..> MoneyDto : unnamed
    UpdateAccountDebtInfoRequest ..> AccountDebtInfoDto : unnamed
```

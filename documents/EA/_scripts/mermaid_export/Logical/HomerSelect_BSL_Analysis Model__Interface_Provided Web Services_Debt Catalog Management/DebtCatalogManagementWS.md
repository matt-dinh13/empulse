# DebtCatalogManagementWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Debt Catalog Management
- **Diagram ID**: 45906
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class MoneyDto["MoneyDto"]
    class AccountDebtInfoDto["AccountDebtInfoDto"]
    class UpdateAccountDebtInfoResponse["UpdateAccountDebtInfoResponse"]
    class UpdateAccountDebtInfoRequest["UpdateAccountDebtInfoRequest"]
    class DebtCatalogManagementWS["DebtCatalogManagementWS"]
    DebtCatalogManagementWS ..> UpdateAccountDebtInfoRequest : unnamed
    DebtCatalogManagementWS ..> UpdateAccountDebtInfoResponse : unnamed
    UpdateAccountDebtInfoRequest ..> AccountDebtInfoDto : unnamed
    AccountDebtInfoDto ..> MoneyDto : unnamed
```

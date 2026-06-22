# GetOnlineDebtResponse - Mapping to DebtCatalog

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/OnlineDebt
- **Diagram ID**: 155682
- **Elements**: 4
- **Connectors**: 25

```mermaid
classDiagram
    class OnlineDebt_OnlineDebt["OnlineDebt : OnlineDebt"]
    class GetOnlineDebtResponse["GetOnlineDebtResponse"]
    class Debt_Catalogue["Debt Catalogue"]
    class DebtCatalogDto["DebtCatalogDto"]
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto --> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    OnlineDebt_OnlineDebt --> GetOnlineDebtResponse : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    GetOnlineDebtResponse ..> DebtCatalogDto : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto --> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto ..> Debt_Catalogue : unnamed
    DebtCatalogDto --> Debt_Catalogue : unnamed
```

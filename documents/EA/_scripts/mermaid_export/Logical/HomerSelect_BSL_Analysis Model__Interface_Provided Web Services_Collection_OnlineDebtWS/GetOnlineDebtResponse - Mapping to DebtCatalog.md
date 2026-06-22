# GetOnlineDebtResponse - Mapping to DebtCatalog

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/OnlineDebtWS
- **Diagram ID**: 134852
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Debt_Catalogue["Debt Catalogue"]
    class OnlineDebtWS_OnlineDebtWS["OnlineDebtWS : OnlineDebtWS"]
    class GetOnlineDebtResponse["GetOnlineDebtResponse"]
    class DebtCatalogDto["DebtCatalogDto"]
    OnlineDebtWS_OnlineDebtWS --> GetOnlineDebtResponse : unnamed
    GetOnlineDebtResponse ..> DebtCatalogDto : unnamed
```

# GetDebtCataloguesInPeriodPerEndOfDay

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/GetDebtCataloguesInPeriodPerEndOfDay
- **Diagram ID**: 155680
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Calculate_base_per_day["Calculate base per day"]
    class getDebtBaseResponse["getDebtBaseResponse"]
    class getDebtBaseRequest["getDebtBaseRequest"]
    class GetDebtCataloguesInPeriodPerEndOfDay["GetDebtCataloguesInPeriodPerEndOfDay"]
    GetDebtCataloguesInPeriodPerEndOfDay ..> getDebtBaseResponse : unnamed
    GetDebtCataloguesInPeriodPerEndOfDay ..> getDebtBaseRequest : unnamed
```

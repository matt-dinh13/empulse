# DebtCatalogueDetail

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/DebtCatalogueDetail
- **Diagram ID**: 155679
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class excludedFeeOverDueDebt["excludedFeeOverDueDebt"]
    class debtCatalogueFullDto["debtCatalogueFullDto"]
    class fullDebtCatalogueResponse["fullDebtCatalogueResponse"]
    class fullDebtCatalogueRequest["fullDebtCatalogueRequest"]
    class additionalProp["additionalProp"]
    class getDebtCataloguesResponse["getDebtCataloguesResponse"]
    class getDebtCataloguesRequest["getDebtCataloguesRequest"]
    class getDebtCatalogueResponse["getDebtCatalogueResponse"]
    class getDebtCatalogueRequest["getDebtCatalogueRequest"]
    class GetDebtCatalogueDetail["GetDebtCatalogueDetail"]
    debtCatalogueFullDto ..> excludedFeeOverDueDebt : unnamed
    fullDebtCatalogueResponse --> debtCatalogueFullDto : unnamed
    GetDebtCatalogueDetail ..> fullDebtCatalogueResponse : unnamed
    GetDebtCatalogueDetail ..> fullDebtCatalogueRequest : unnamed
    getDebtCataloguesResponse --> additionalProp : unnamed
    GetDebtCatalogueDetail ..> getDebtCataloguesResponse : unnamed
    GetDebtCatalogueDetail ..> getDebtCataloguesRequest : unnamed
    GetDebtCatalogueDetail ..> getDebtCatalogueResponse : unnamed
    GetDebtCatalogueDetail ..> getDebtCatalogueRequest : unnamed
```

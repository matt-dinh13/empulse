# FinancingSchemeValues

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/COMMON for Financing Scheme
- **Diagram ID**: 124686
- **Elements**: 7
- **Connectors**: 2

```mermaid
classDiagram
    class MOD_ValidationCodeFinancingSchemeValues["{MOD}ValidationCodeFinancingSchemeValues"]
    class FinancingSchemeVariantCriterion["FinancingSchemeVariantCriterion"]
    class GetFinancingScheme_GetFinancingScheme["GetFinancingScheme : GetFinancingScheme"]
    class UpdateFinancingScheme_UpdateFinancingScheme["UpdateFinancingScheme : UpdateFinancingScheme"]
    class CreateFinancingScheme_CreateFinancingScheme["CreateFinancingScheme : CreateFinancingScheme"]
    class FinancingSchemeValues["FinancingSchemeValues"]
    class MOD_FinancingSchemeVariant["{MOD}FinancingSchemeVariant"]
    FinancingSchemeValues ..> MOD_FinancingSchemeVariant : unnamed
    MOD_FinancingSchemeVariant ..> FinancingSchemeVariantCriterion : unnamed
```

# FinancingSchemeDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes
- **Diagram ID**: 159439
- **Elements**: 10
- **Connectors**: 8

```mermaid
classDiagram
    class Sales_Descriptions_SalesDescriptionDto["Sales Descriptions : SalesDescriptionDto"]
    class SalesDescriptionDto["SalesDescriptionDto"]
    class Input["Input"]
    class FinancingSchemeInputDto["FinancingSchemeInputDto"]
    class Version_Status["Version Status"]
    class Financing_Scheme_Variant_Criterion_Type["Financing Scheme Variant Criterion Type"]
    class Financing_Schemes_Financing_Schemes["Financing Schemes : Financing Schemes"]
    class Financing_Scheme_Variant_Type["Financing Scheme Variant Type"]
    class FinancigSchemeVariantDto["FinancigSchemeVariantDto"]
    class MOD_FinancingSchemeDto["{MOD}FinancingSchemeDto"]
    MOD_FinancingSchemeDto ..> SalesDescriptionDto : unnamed
    Input ..> FinancigSchemeVariantDto : unnamed
    MOD_FinancingSchemeDto ..> FinancigSchemeVariantDto : unnamed
    FinancigSchemeVariantDto ..> Financing_Scheme_Variant_Type : unnamed
    FinancigSchemeVariantDto ..> Financing_Scheme_Variant_Criterion_Type : unnamed
    FinancingSchemeInputDto ..> Version_Status : unnamed
    MOD_FinancingSchemeDto ..> Version_Status : unnamed
    FinancingSchemeInputDto ..> Input : unnamed
```

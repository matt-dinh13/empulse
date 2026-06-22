# Financing Schemes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes
- **Diagram ID**: 159438
- **Elements**: 15
- **Connectors**: 14

```mermaid
classDiagram
    class ActivationInputDto["ActivationInputDto"]
    class ADD_financing_scheme_activations["{ADD}financing-scheme-activations"]
    class VersionsDto["VersionsDto"]
    class financing_scheme_versions["financing-scheme-versions"]
    class MOD_Financing_scheme_Dependencies["{MOD}Financing scheme Dependencies"]
    class FinancingSchemeInputDto["FinancingSchemeInputDto"]
    class ValidationError["ValidationError"]
    class FinancingSchemeResponse["FinancingSchemeResponse"]
    class Financing_Schemes_FinancingSchemeDto["Financing Schemes : FinancingSchemeDto"]
    class MOD_FinancingSchemeDto["{MOD}FinancingSchemeDto"]
    class Version_Status["Version Status"]
    class FinancingSchemeSearchParametersDto["FinancingSchemeSearchParametersDto"]
    class financing_schemes["financing-schemes"]
    class Product_Catalog_REST_API_Product_Catalog_REST_API["Product Catalog REST API : Product Catalog REST API"]
    class Product_catalog_API["Product catalog API"]
    ADD_financing_scheme_activations ..> FinancingSchemeResponse : unnamed
    financing_scheme_versions ..> VersionsDto : unnamed
    financing_schemes ..> MOD_Financing_scheme_Dependencies : unnamed
    financing_schemes ..> FinancingSchemeInputDto : unnamed
    ADD_financing_scheme_activations ..> ActivationInputDto : unnamed
    financing_schemes ..> FinancingSchemeResponse : unnamed
    financing_schemes ..> MOD_FinancingSchemeDto : unnamed
    FinancingSchemeResponse ..> MOD_FinancingSchemeDto : unnamed
    FinancingSchemeSearchParametersDto ..> Version_Status : unnamed
    financing_schemes ..> FinancingSchemeSearchParametersDto : unnamed
    FinancingSchemeResponse ..> ValidationError : unnamed
    Product_catalog_API ..> financing_scheme_versions : /financing-scheme-versions
    Product_catalog_API ..> financing_schemes : /financing-schemes
    Product_catalog_API ..> ADD_financing_scheme_activations : /financing-scheme-activations
```

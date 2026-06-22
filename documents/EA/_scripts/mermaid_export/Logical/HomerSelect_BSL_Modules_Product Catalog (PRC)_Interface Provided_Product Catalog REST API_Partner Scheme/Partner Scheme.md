# Partner Scheme

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Partner Scheme
- **Diagram ID**: 161250
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class PartnerSchemeDto["PartnerSchemeDto"]
    class ValidationErrorDto["ValidationErrorDto"]
    class PartnerSchemeResponse["PartnerSchemeResponse"]
    class PartnerSchemeSearchParametersDto["PartnerSchemeSearchParametersDto"]
    class partner_schemes["partner-schemes"]
    class Product_catalog_API["Product catalog API"]
    PartnerSchemeResponse ..> PartnerSchemeDto : unnamed
    PartnerSchemeResponse ..> ValidationErrorDto : unnamed
    partner_schemes ..> PartnerSchemeResponse : unnamed
    partner_schemes ..> PartnerSchemeSearchParametersDto : unnamed
    Product_catalog_API ..> partner_schemes : /partner-schemes
```

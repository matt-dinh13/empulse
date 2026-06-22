# Partner Scheme API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Partner Scheme
- **Diagram ID**: 161251
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Product_catalog_API["Product catalog API"]
    class partner_schemes["partner-schemes"]
    class GET_partner_scheme_search["GET partner scheme search"]
    GET_partner_scheme_search <|.. partner_schemes : unnamed
    Product_catalog_API ..> partner_schemes : /partner-schemes
```

# RELIP Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services/RELIP
- **Diagram ID**: 125515
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class ADD_Money["{ADD}Money"]
    class ServiceRELIPVariantTermData["ServiceRELIPVariantTermData"]
    class ServiceRELIPVariantData["ServiceRELIPVariantData"]
    class RELIPData["RELIPData"]
    ServiceRELIPVariantTermData <|.. ServiceRELIPVariantData : unnamed
    ServiceRELIPVariantData <|.. RELIPData : unnamed
```

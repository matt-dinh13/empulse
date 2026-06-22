# Bundles API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles
- **Diagram ID**: 160832
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_PUT_bundle["{ADD}PUT bundle"]
    class ADD_POST_bundle["{ADD}POST bundle"]
    class ADD_POST_bundle_search["{ADD}POST bundle search"]
    class ADD_GET_bundle_by_code["{ADD}GET bundle by code"]
    class Product_catalog_API["Product catalog API"]
    class ADD_bundles["{ADD}bundles"]
    ADD_GET_bundle_by_code <|.. ADD_bundles : unnamed
    ADD_POST_bundle_search <|.. ADD_bundles : unnamed
    ADD_POST_bundle <|.. ADD_bundles : unnamed
    ADD_PUT_bundle <|.. ADD_bundles : unnamed
    Product_catalog_API ..> ADD_bundles : /bundles
```

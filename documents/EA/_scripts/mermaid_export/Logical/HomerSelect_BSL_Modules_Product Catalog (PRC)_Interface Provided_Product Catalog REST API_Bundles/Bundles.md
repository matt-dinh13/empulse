# Bundles

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles
- **Diagram ID**: 160828
- **Elements**: 14
- **Connectors**: 9

```mermaid
classDiagram
    class ADD_search["{ADD}search"]
    class Product_Catalog_REST_API_Product_Catalog_REST_API["Product Catalog REST API : Product Catalog REST API"]
    class COMMON_for_Product_catalog_REST_API_COMMON_for_Product_catal["COMMON for Product catalog REST API : COMMON for Product catalog REST API"]
    class Bundles_BundleSearchParametersDto["Bundles : BundleSearchParametersDto"]
    class Bundles_BundleDto["Bundles : BundleDto"]
    class Bundles_BundleInputDto["Bundles : BundleInputDto"]
    class ADD_BundleInputDto["{ADD}BundleInputDto"]
    class ADD_BundleSearchParametersDto["{ADD}BundleSearchParametersDto"]
    class Paging["Paging"]
    class ADD_BundleDto["{ADD}BundleDto"]
    class ValidationErrorDto["ValidationErrorDto"]
    class ADD_BundleResponse["{ADD}BundleResponse"]
    class ADD_bundles["{ADD}bundles"]
    class Product_catalog_API["Product catalog API"]
    ADD_bundles ..> ADD_search : /search
    ADD_bundles ..> ADD_BundleResponse : unnamed
    ADD_search ..> ADD_BundleResponse : unnamed
    ADD_BundleResponse ..> ValidationErrorDto : unnamed
    ADD_BundleResponse ..> ADD_BundleDto : unnamed
    ADD_search ..> Paging : unnamed
    ADD_search ..> ADD_BundleSearchParametersDto : unnamed
    ADD_bundles ..> ADD_BundleInputDto : unnamed
    Product_catalog_API ..> ADD_bundles : /bundles
```

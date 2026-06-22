# Service to Product profile

```mermaid
classDiagram
    class ADD_ServiceToProductProfilesDto["{ADD} ServiceToProductProfilesDto"]
    class ADD_ServiceToProductProfilesResponse["{ADD} ServiceToProductProfilesResponse"]
    class ValidationErrorDto["ValidationErrorDto"]
    class ADD_service_to_product_profiles["{ADD} service-to-product-profiles"]
    class Product_catalog_API["Product catalog API"]
    ADD_ServiceToProductProfilesResponse --> ValidationErrorDto : unnamed
    ADD_service_to_product_profiles --> ADD_ServiceToProductProfilesResponse : unnamed
    ADD_service_to_product_profiles --> ADD_ServiceToProductProfilesDto : unnamed
    ADD_ServiceToProductProfilesResponse --> ADD_ServiceToProductProfilesDto : unnamed
    Product_catalog_API --> ADD_service_to_product_profiles : /service-to-product-profiles
```

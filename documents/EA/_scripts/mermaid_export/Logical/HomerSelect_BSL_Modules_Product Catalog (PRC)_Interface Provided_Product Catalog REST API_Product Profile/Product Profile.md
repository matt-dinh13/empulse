# Product Profile

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile
- **Diagram ID**: 147521
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class ProductProfileResponse["ProductProfileResponse"]
    class ValidationErrorDto["ValidationErrorDto"]
    class InitialTransactionTypeDto["InitialTransactionTypeDto"]
    class ProductTypeDto["ProductTypeDto"]
    class productProfileSearchParametersDto["productProfileSearchParametersDto"]
    class ProductProfileInputDto["ProductProfileInputDto"]
    class ProductProfileDto["ProductProfileDto"]
    class Product_Profile_ProductProfileDto["Product Profile : ProductProfileDto"]
    class Dependencies["Dependencies"]
    class product_profiles["product-profiles"]
    class Product_catalog_API["Product catalog API"]
    product_profiles ..> Dependencies : unnamed
    ProductProfileResponse ..> ProductProfileDto : unnamed
    product_profiles ..> ProductProfileDto : unnamed
    product_profiles ..> ProductProfileInputDto : unnamed
    product_profiles ..> productProfileSearchParametersDto : unnamed
    productProfileSearchParametersDto ..> ProductTypeDto : unnamed
    productProfileSearchParametersDto ..> InitialTransactionTypeDto : unnamed
    ProductProfileResponse ..> ValidationErrorDto : unnamed
    product_profiles ..> ProductProfileResponse : unnamed
    Product_catalog_API ..> product_profiles : /product-profiles
```

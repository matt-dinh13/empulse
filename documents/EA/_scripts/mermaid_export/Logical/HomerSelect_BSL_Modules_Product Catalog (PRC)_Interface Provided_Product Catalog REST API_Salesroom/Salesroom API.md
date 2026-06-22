# Salesroom API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom
- **Diagram ID**: 149790
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class DELETE_salesrooms_sales_packages["DELETE salesrooms sales packages"]
    class POST_salesrooms_sales_packages["POST salesrooms sales packages"]
    class DELETE_salesrooms_products["DELETE salesrooms products"]
    class POST_salesrooms_products["POST salesrooms products"]
    class GET_salesrooms["GET salesrooms"]
    class sales_packages["sales-packages"]
    class products["products"]
    class salesrooms["salesrooms"]
    class Product_catalog_API["Product catalog API"]
    salesrooms ..> products : /{codes}/products
    salesrooms ..> sales_packages : /{codes}/sales-packages
    GET_salesrooms <|.. salesrooms : unnamed
    POST_salesrooms_products <|.. products : unnamed
    DELETE_salesrooms_products <|.. products : unnamed
    POST_salesrooms_sales_packages <|.. sales_packages : unnamed
    DELETE_salesrooms_sales_packages <|.. sales_packages : unnamed
    Product_catalog_API ..> salesrooms : /salesrooms
```

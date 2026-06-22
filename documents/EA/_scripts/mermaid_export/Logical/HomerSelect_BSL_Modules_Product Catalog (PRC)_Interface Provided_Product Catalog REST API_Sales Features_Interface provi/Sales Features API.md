# Sales Features API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Interface provided
- **Diagram ID**: 148879
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class POST_marketing_offer_availability["POST marketing offer availability"]
    class GET_data_for_product_calculator["GET data for product calculator"]
    class marketing_offer_availability["marketing-offer-availability"]
    class sales_features["sales-features"]
    class Product_catalog_API["Product catalog API"]
    sales_features ..> GET_data_for_product_calculator : unnamed
    marketing_offer_availability ..> POST_marketing_offer_availability : unnamed
    Product_catalog_API ..> sales_features : /data-fro-product-calculator
    Product_catalog_API ..> marketing_offer_availability : /marketing-offer-availability
```

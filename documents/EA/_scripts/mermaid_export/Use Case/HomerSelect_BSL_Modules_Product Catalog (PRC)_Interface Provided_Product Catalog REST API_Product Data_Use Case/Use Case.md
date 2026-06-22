# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Data/Use Case
- **Diagram ID**: 160609
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    GET_product_data_validation["GET product-data - validation"]
    External_Component[/"External Component"/]
    GET_product_data(("GET product-data"))
    GET_product_data -->|unnamed| GET_product_data_validation
    External_Component --- GET_product_data
```

# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom/Use Case
- **Diagram ID**: 160598
- **Elements**: 8
- **Connectors**: 9

```mermaid
graph LR
    Wildcard_search["Wildcard search"]
    External_Component[/"External Component"/]
    MOD_SalesroomItemDto_validation["{MOD}SalesroomItemDto - validation"]
    DELETE_salesrooms_sales_packages(("DELETE salesrooms sales packages"))
    DELETE_salesrooms_products(("DELETE salesrooms products"))
    POST_salesrooms_sales_packages(("POST salesrooms sales packages"))
    POST_salesrooms_products(("POST salesrooms products"))
    GET_salesrooms(("GET salesrooms"))
    DELETE_salesrooms_products -->|unnamed| MOD_SalesroomItemDto_validation
    POST_salesrooms_products -->|unnamed| MOD_SalesroomItemDto_validation
    POST_salesrooms_sales_packages -->|unnamed| MOD_SalesroomItemDto_validation
    GET_salesrooms -->|unnamed| Wildcard_search
    External_Component --- GET_salesrooms
    External_Component --- DELETE_salesrooms_sales_packages
    External_Component --- POST_salesrooms_products
    External_Component --- POST_salesrooms_sales_packages
    External_Component --- DELETE_salesrooms_products
```

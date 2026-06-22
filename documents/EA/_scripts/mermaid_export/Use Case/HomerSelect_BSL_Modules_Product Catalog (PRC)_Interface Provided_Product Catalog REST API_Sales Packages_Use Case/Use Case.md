# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages/Use Case
- **Diagram ID**: 160591
- **Elements**: 10
- **Connectors**: 10

```mermaid
graph LR
    Wildcard_search["Wildcard search"]
    SalesPackageItem_validation["SalesPackageItem - validation"]
    Sales_package_validation["Sales package - validation"]
    External_Component[/"External Component"/]
    POST_sales_package_items(("POST sales package items"))
    GET_sales_package_items(("GET sales package items"))
    DELETE_sales_package_items(("DELETE sales package items"))
    PUT_sales_package(("PUT sales package"))
    POST_sales_package(("POST sales package"))
    GET_sales_package(("GET sales package"))
    PUT_sales_package -->|unnamed| Sales_package_validation
    POST_sales_package -->|unnamed| Sales_package_validation
    POST_sales_package_items -->|unnamed| SalesPackageItem_validation
    GET_sales_package -->|unnamed| Wildcard_search
    External_Component --- POST_sales_package_items
    External_Component --- DELETE_sales_package_items
    External_Component --- GET_sales_package_items
    External_Component --- GET_sales_package
    External_Component --- PUT_sales_package
    External_Component --- POST_sales_package
```

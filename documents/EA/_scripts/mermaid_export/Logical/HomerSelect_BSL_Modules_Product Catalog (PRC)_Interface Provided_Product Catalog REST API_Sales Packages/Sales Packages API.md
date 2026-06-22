# Sales Packages API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages
- **Diagram ID**: 139121
- **Elements**: 10
- **Connectors**: 8

```mermaid
classDiagram
    class diagram_2CF9BE72_EB06_44d2_9DA4_5A428ACD654D["$diagram://{2CF9BE72-EB06-44d2-9DA4-5A428ACD654D}"]
    class POST_sales_package_items["POST sales package items"]
    class DELETE_sales_package_items["DELETE sales package items"]
    class GET_sales_package_items["GET sales package items"]
    class PUT_sales_package["PUT sales package"]
    class POST_sales_package["POST sales package"]
    class GET_sales_package["GET sales package"]
    class sales_packages_items["sales-packages/items"]
    class sales_packages["sales-packages"]
    class Product_catalog_API["Product catalog API"]
    GET_sales_package <|.. sales_packages : unnamed
    POST_sales_package <|.. sales_packages : unnamed
    PUT_sales_package <|.. sales_packages : unnamed
    GET_sales_package_items <|.. sales_packages_items : unnamed
    DELETE_sales_package_items <|.. sales_packages_items : unnamed
    POST_sales_package_items <|.. sales_packages_items : unnamed
    Product_catalog_API ..> sales_packages : /sales-packages
    Product_catalog_API ..> sales_packages_items : /sales-packeges/items
```

# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages/Access Rights
- **Diagram ID**: 133495
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph TD
    DELETE_sales_package_items["DELETE sales package items"]
    PUT_sales_package["PUT sales package"]
    POST_sales_package_items["POST sales package items"]
    POST_sales_package["POST sales package"]
    GET_sales_package_items["GET sales package items"]
    GET_sales_package["GET sales package"]
    n_09_302_Get_Sales_Package["09.302 Get Sales Package"]
    n_09_301_Set_Sales_Package["09.301 Set Sales Package"]
    GET_sales_package_items -->|unnamed| n_09_302_Get_Sales_Package
    PUT_sales_package -->|unnamed| n_09_301_Set_Sales_Package
    POST_sales_package -->|unnamed| n_09_301_Set_Sales_Package
    DELETE_sales_package_items -->|unnamed| n_09_301_Set_Sales_Package
    POST_sales_package_items -->|unnamed| n_09_301_Set_Sales_Package
    GET_sales_package -->|unnamed| n_09_302_Get_Sales_Package
```

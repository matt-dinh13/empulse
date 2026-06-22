# Assign Product Sales Area

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Sales Area Assignment/Use Case
- **Diagram ID**: 162493
- **Elements**: 5
- **Connectors**: 5

```mermaid
graph LR
    User[/"User"/]
    DEL_02_641_Assign_sales_areas_to_product(("{DEL}02.641 Assign sales areas to product"))
    User_Interface_Sales_Area_Assign["User Interface : Sales Area-Assign"]
    User_Interface_Tab_Sales_Areas["User Interface : Tab Sales Areas"]
    DEL_02_070_Show_product_version_detail(("{DEL}02.070 Show product version detail"))
    User_Interface_Tab_Sales_Areas -->|unnamed| DEL_02_070_Show_product_version_detail
    DEL_02_641_Assign_sales_areas_to_product -->|unnamed| User_Interface_Tab_Sales_Areas
    DEL_02_641_Assign_sales_areas_to_product -->|unnamed| User_Interface_Sales_Area_Assign
    User --- DEL_02_641_Assign_sales_areas_to_product
    User --- DEL_02_070_Show_product_version_detail
```

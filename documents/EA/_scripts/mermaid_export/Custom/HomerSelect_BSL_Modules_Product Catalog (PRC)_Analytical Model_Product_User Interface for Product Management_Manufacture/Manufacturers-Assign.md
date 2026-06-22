# Manufacturers-Assign

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Manufacturer Management and Assignment/User Interface
- **Diagram ID**: 119180
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph TD
    Common_product_properties_header["Common product properties header"]
    Select_all["Select all"]
    Deselect_all["Deselect all"]
    Assign_Manufacturers["Assign Manufacturers"]
    Manufacturers_Tab_Manufacturers["Manufacturers :Tab Manufacturers"]
    DEL_02_610_Assign_manufacturers_to_product["{DEL}02.610 Assign manufacturers to product"]
    Cancel["Cancel"]
    OK["OK"]
    Assign_manufacturers["Assign manufacturers"]
    Assign_manufacturers -->|unnamed| DEL_02_610_Assign_manufacturers_to_product
    Cancel -->|unnamed| Manufacturers_Tab_Manufacturers
    OK -->|unnamed| Manufacturers_Tab_Manufacturers
```

# Commodities-Assign

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Commodities Assignment/User Interface
- **Diagram ID**: 141940
- **Elements**: 11
- **Connectors**: 3

```mermaid
graph TD
    ADD_Filter_model_by_assigned_manufacturer["{ADD}Filter model by assigned manufacturer"]
    Common_product_properties_header["Common product properties header"]
    Select_all["Select all"]
    Deselect_all["Deselect all"]
    MOD_Assign_Commodities["{MOD}Assign Commodities"]
    OK["OK"]
    Cancel["Cancel"]
    Commodities_Tab_Commodities["Commodities :Tab Commodities"]
    DEL_02_606_Assign_commodities_to_product["{DEL}02.606 Assign commodities to product"]
    Commodity_category_filter["Commodity category filter"]
    Assign_commodities_for_product["Assign commodities for product"]
    Assign_commodities_for_product -->|unnamed| DEL_02_606_Assign_commodities_to_product
    OK -->|unnamed| Commodities_Tab_Commodities
    Cancel -->|unnamed| Commodities_Tab_Commodities
```

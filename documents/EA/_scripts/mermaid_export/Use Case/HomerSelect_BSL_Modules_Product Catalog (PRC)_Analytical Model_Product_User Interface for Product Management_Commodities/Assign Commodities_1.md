# Assign Commodities

```mermaid
graph TD
    User["User"]
    Commodities_Commodities_Set["Commodities : Commodities - Set"]
    Commodities_Tab_Commodities["Commodities :Tab Commodities"]
    DEL_02_606_Assign_commodities_to_product["{DEL}02.606 Assign commodities to product"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    Commodities_Tab_Commodities -->|unnamed| DEL_02_606_Assign_commodities_to_product
    DEL_02_606_Assign_commodities_to_product -->|unnamed| Commodities_Commodities_Set
    User -->|unnamed| DEL_02_070_Show_product_version_detail
    User -->|unnamed| DEL_02_606_Assign_commodities_to_product
    DEL_02_070_Show_product_version_detail -->|unnamed| Commodities_Tab_Commodities
```

# Tab Commodities

```mermaid
graph TD
    DEL_02_606_Assign_commodities_to_product["{DEL}02.606 Assign commodities to product"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    Commodities_Commodities_Assign["Commodities :Commodities-Assign"]
    Assign_commodities["Assign commodities"]
    MOD_Commodities["{MOD}Commodities"]
    Commodities["Commodities"]
    Assign_commodities -->|unnamed| Commodities_Commodities_Assign
    Commodities -->|unnamed| DEL_02_070_Show_product_version_detail
    Assign_commodities -->|unnamed| DEL_02_606_Assign_commodities_to_product
```

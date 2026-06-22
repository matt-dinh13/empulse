# Tariff Root URL

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/User Interface
- **Diagram ID**: 159453
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph TD
    Tariff_detail["Tariff detail"]
    DEL_04_070_Show_Tariff_version_detail["{DEL}04.070 Show Tariff version detail"]
    DEL_04_070_Show_Tariff_version_detail["{DEL}04.070 Show Tariff version detail"]
    Product_Catalog_URL["Product Catalog URL"]
    Tariff_detail -->|unnamed| DEL_04_070_Show_Tariff_version_detail
    Product_Catalog_URL -->|unnamed| DEL_04_070_Show_Tariff_version_detail
    Product_Catalog_URL -->|unnamed| Tariff_detail
    DEL_04_070_Show_Tariff_version_detail -->|unnamed| DEL_04_070_Show_Tariff_version_detail
```

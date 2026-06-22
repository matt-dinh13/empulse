# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import/Use Case
- **Diagram ID**: 156718
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    External_Component[/"External Component"/]
    ADD_Import_product_catalog_settings(("{ADD}Import product catalog settings"))
    ADD_Export_product_catalog_settings(("{ADD}Export product catalog settings"))
    External_Component --- ADD_Export_product_catalog_settings
    External_Component --- ADD_Import_product_catalog_settings
```

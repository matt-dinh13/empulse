# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Calculation Data/Use Case
- **Diagram ID**: 160597
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    External_Component[/"External Component"/]
    MOD_Product_Calculation_Data_validation["{MOD}Product Calculation Data - validation"]
    POST_product_calculation_data(("POST product-calculation-data"))
    POST_product_calculation_data -->|unnamed| MOD_Product_Calculation_Data_validation
    External_Component --- POST_product_calculation_data
```

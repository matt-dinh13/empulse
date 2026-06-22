# Calculate AIR

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/AIR manual calculation/User Interface
- **Diagram ID**: 106515
- **Elements**: 10
- **Connectors**: 1

```mermaid
graph TD
    Effective_Interest_Rate["Effective Interest Rate"]
    OK["OK"]
    ADD_AIR_calculation_from_flat_rate["{ADD}AIR calculation from flat rate"]
    Credit_amount_maximal["Credit amount maximal"]
    Credit_amount_minimal["Credit amount minimal"]
    Cancel["Cancel"]
    ADD_Calculate["{ADD}Calculate"]
    Flat_rate["Flat rate"]
    Terms["Terms"]
    ADD_PCG_1246_Calculate_AIR["{ADD PCG-1246}Calculate AIR"]
    ADD_Calculate -->|unnamed| ADD_AIR_calculation_from_flat_rate
```

# Deducting interest overcharge while shortening first interest period

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Installment Schedule
- **Diagram ID**: 147419
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    Deduct_interest_overcharge_example["Deduct interest overcharge example"]
    Recalculate_Presented_Interest_rates_on_financial_parameters["Recalculate Presented Interest rates on financial parameters change"]
    MOD_03_037_Deduct_interest_overcharge_while_shortening_first(("{MOD}03.037 Deduct interest overcharge while shortening first interest period"))
    Deduct_interest_overcharge_example -->|unnamed| MOD_03_037_Deduct_interest_overcharge_while_shortening_first
    MOD_03_037_Deduct_interest_overcharge_while_shortening_first -->|unnamed| Recalculate_Presented_Interest_rates_on_financial_parameters
```

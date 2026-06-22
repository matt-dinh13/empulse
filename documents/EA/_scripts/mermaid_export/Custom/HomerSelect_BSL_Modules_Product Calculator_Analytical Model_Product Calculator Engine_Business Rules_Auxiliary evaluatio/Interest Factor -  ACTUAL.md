# Interest Factor -  ACTUAL

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation
- **Diagram ID**: 157761
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    Factor_30_360["Factor 30_360"]
    MOD_Factor_ACT_ACT["{MOD}Factor ACT_ACT"]
    Factor_ACT_360["Factor ACT_360"]
    Factor_ACT_365F["Factor ACT_365F"]
    Interest_factor_ACT["Interest factor ACT"]
    Interest_factor_ACT -->|unnamed| Factor_ACT_365F
    Interest_factor_ACT -->|unnamed| Factor_ACT_360
    Interest_factor_ACT -->|unnamed| MOD_Factor_ACT_ACT
    Interest_factor_ACT -->|unnamed| Factor_30_360
```

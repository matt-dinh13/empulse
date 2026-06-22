# Invalidate cross-sell limit

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 2SP/UseCase Model
- **Diagram ID**: 157370
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    Cross_sel_Limit_Deactivation["Cross-sel Limit Deactivation"]
    MOD_01_089_Invalidate_cross_sell_limits(("{MOD}01.089 Invalidate cross-sell limits"))
    Time[/"Time"/]
    MOD_01_089_Invalidate_cross_sell_limits -->|unnamed| Cross_sel_Limit_Deactivation
    Time --- MOD_01_089_Invalidate_cross_sell_limits
```

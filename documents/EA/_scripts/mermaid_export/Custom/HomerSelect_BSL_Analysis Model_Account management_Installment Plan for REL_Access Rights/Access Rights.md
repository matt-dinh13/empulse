# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Account management/Installment Plan for REL/Access Rights
- **Diagram ID**: 127297
- **Elements**: 11
- **Connectors**: 6

```mermaid
graph TD
    ADD_12_620_Show_installment_plan_for_REL_overrule["{ADD}12.620 Show installment plan for REL - overrule"]
    n_12_628_Print_installment_plan_overview_for_REL["12.628 Print installment plan overview for REL"]
    ADD_12_628_Print_installment_plan_overview_for_REL["{ADD}12.628 Print installment plan overview for REL"]
    n_12_626_Cancel_installment_plan_in_cooling_off_period["12.626 Cancel installment plan in cooling-off period"]
    n_12_624_Cancel_installment_plan["12.624 Cancel installment plan"]
    n_12_622_Transfer_installment_plan_back_request["12.622 Transfer installment plan back request"]
    n_12_620_Show_installment_plan_for_REL["12.620 Show installment plan for REL"]
    n_12_626_Cancel_installment_plan_in_cooling_off_period["12.626 Cancel installment plan in cooling-off period"]
    n_12_624_Cancel_installment_plan["12.624 Cancel installment plan"]
    n_12_622_Transfer_installment_plan_back_request["12.622 Transfer installment plan back request"]
    n_12_620_Show_installment_plan_for_REL["12.620 Show installment plan for REL"]
    n_12_622_Transfer_installment_plan_back_request -->|unnamed| n_12_622_Transfer_installment_plan_back_request
    n_12_628_Print_installment_plan_overview_for_REL -->|unnamed| ADD_12_628_Print_installment_plan_overview_for_REL
    n_12_620_Show_installment_plan_for_REL -->|unnamed| n_12_620_Show_installment_plan_for_REL
    n_12_620_Show_installment_plan_for_REL -->|unnamed| ADD_12_620_Show_installment_plan_for_REL_overrule
    n_12_624_Cancel_installment_plan -->|unnamed| n_12_624_Cancel_installment_plan
    n_12_626_Cancel_installment_plan_in_cooling_off_period -->|unnamed| n_12_626_Cancel_installment_plan_in_cooling_off_period
```

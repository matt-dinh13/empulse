# CBL-16723 (CLM-4695) Adjust modal window X-sell offer recalculation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16723 (CLM-4695) Adjust modal window X-sell offer recalculation
- **Diagram ID**: 145188
- **Elements**: 6
- **Connectors**: 1

```mermaid
classDiagram
    class DEL_Salary_Payment_Method["{DEL}Salary Payment Method"]
    class MOD_Economical_Status["{MOD}Economical Status"]
    class n_01_137_Recalculate_party_s_marketing_offer["01.137 Recalculate party's marketing offer"]
    class CLM_4695_Adjust_modal_window_X_sell_offer_recalculation["CLM-4695 Adjust modal window X-sell offer recalculation"]
    class n_01_143_Recalculate_client_s_x_sell_offer["01.143 Recalculate client's x-sell offer"]
    class Offer_recalculation_modal_window["Offer recalculation modal window"]
    n_01_143_Recalculate_client_s_x_sell_offer --> n_01_137_Recalculate_party_s_marketing_offer : unnamed
```

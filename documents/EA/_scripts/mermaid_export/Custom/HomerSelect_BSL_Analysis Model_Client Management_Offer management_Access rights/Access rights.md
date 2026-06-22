# Access rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Offer management/Access rights
- **Diagram ID**: 150605
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    ADD_01_137_Recalculate_party_s_marketing_offer_CLM["{ADD}01.137 Recalculate party's marketing offer [CLM]"]
    ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM["{ADD}01.143 Recalculate clients's x-sell offer [CLM]"]
    n_01_143_Recalculate_client_s_x_sell_offer["01.143 Recalculate client's x-sell offer"]
    n_01_137_Recalculate_party_s_marketing_offer["01.137 Recalculate party's marketing offer"]
    ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM -->|unnamed| ADD_01_137_Recalculate_party_s_marketing_offer_CLM
    ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM -->|unnamed| n_01_143_Recalculate_client_s_x_sell_offer
    ADD_01_137_Recalculate_party_s_marketing_offer_CLM -->|unnamed| n_01_137_Recalculate_party_s_marketing_offer
```

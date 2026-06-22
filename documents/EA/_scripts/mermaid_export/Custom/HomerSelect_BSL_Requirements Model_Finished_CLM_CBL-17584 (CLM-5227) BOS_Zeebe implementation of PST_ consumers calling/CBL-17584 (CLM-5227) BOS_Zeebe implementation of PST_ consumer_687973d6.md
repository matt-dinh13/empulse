# CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1
- **Diagram ID**: 150664
- **Elements**: 14
- **Connectors**: 8

```mermaid
graph TD
    X_sell_offer_recalculation["X-sell offer recalculation"]
    Cancel["Cancel"]
    ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM["{ADD}01.143 Recalculate clients's x-sell offer [CLM]"]
    ADD_01_137_Recalculate_party_s_marketing_offer_CLM["{ADD}01.137 Recalculate party's marketing offer [CLM]"]
    Recalculate["Recalculate"]
    Offer_management_Offer_management["Offer management : Offer management"]
    Start_Workflow_Start_Workflow["Start Workflow : Start Workflow"]
    n_01_137_Recalculate_party_s_marketing_offer["01.137 Recalculate party's marketing offer"]
    n_01_143_Recalculate_client_s_x_sell_offer["01.143 Recalculate client's x-sell offer"]
    MOD_CLM_feature_flags["{MOD}CLM feature flags"]
    n_01_143_Recalculate_client_s_x_sell_offer["01.143 Recalculate client's x-sell offer"]
    CBL_17584_CLM_5227_BOS_Zeebe_implementation_of_PST_consumers["CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1"]
    n_01_137_Recalculate_party_s_marketing_offer["01.137 Recalculate party's marketing offer"]
    LOR_use_cases_to_be_mirrored_by_those_of_CLM["LOR use cases - to be mirrored by those of CLM"]
    n_01_143_Recalculate_client_s_x_sell_offer -->|unnamed| n_01_137_Recalculate_party_s_marketing_offer
    n_01_143_Recalculate_client_s_x_sell_offer -->|unnamed| n_01_143_Recalculate_client_s_x_sell_offer
    ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM -->|unnamed| ADD_01_137_Recalculate_party_s_marketing_offer_CLM
    ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM -->|unnamed| n_01_143_Recalculate_client_s_x_sell_offer
    ADD_01_137_Recalculate_party_s_marketing_offer_CLM -->|unnamed| n_01_137_Recalculate_party_s_marketing_offer
    Recalculate -->|unnamed| n_01_143_Recalculate_client_s_x_sell_offer
    Recalculate -->|unnamed| ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM
    n_01_137_Recalculate_party_s_marketing_offer -->|unnamed| n_01_137_Recalculate_party_s_marketing_offer
```

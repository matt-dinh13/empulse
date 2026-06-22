# Customer offers - UseCase Model

```mermaid
graph TD
    Tab_Customer_Offers_v2_Customer_offers_tab_v2["Tab Customer Offers v2 : Customer offers tab v2"]
    Zeebe_WF_engine_for_service_orchestration["Zeebe (WF engine for μ-service orchestration)"]
    Party_Scoring_Tool_PST["Party Scoring Tool (PST)"]
    ADD_01_137_Recalculate_party_s_marketing_offer_CLM["{ADD}01.137 Recalculate party's marketing offer [CLM]"]
    User["User"]
    Show_tab_Customer_offers["Show tab Customer offers"]
    n_06_032_Submit_response_on_customer_offer["06.032 Submit response on customer offer"]
    ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM["{ADD}01.143 Recalculate clients's x-sell offer [CLM]"]
    Tab_Customer_Offers_v2_Customer_offers_tab_v2 -->|unnamed| n_06_032_Submit_response_on_customer_offer
    Tab_Customer_Offers_v2_Customer_offers_tab_v2 -->|unnamed| Show_tab_Customer_offers
    Tab_Customer_Offers_v2_Customer_offers_tab_v2 -->|unnamed| ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM
    ADD_01_137_Recalculate_party_s_marketing_offer_CLM -->|unnamed| Zeebe_WF_engine_for_service_orchestration
    ADD_01_137_Recalculate_party_s_marketing_offer_CLM -->|unnamed| Party_Scoring_Tool_PST
    ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM -->|unnamed| ADD_01_137_Recalculate_party_s_marketing_offer_CLM
    User -->|unnamed| n_06_032_Submit_response_on_customer_offer
    User -->|unnamed| Show_tab_Customer_offers
    User -->|unnamed| ADD_01_143_Recalculate_clients_s_x_sell_offer_CLM
```

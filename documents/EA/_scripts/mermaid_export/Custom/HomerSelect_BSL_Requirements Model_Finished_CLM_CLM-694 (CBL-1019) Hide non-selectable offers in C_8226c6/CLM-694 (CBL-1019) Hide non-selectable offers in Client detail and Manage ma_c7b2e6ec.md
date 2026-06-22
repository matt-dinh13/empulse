# CLM-694 (CBL-1019) Hide non-selectable offers in Client detail and Manage market offers screen

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-694 (CBL-1019) Hide non-selectable offers in Client detail and Manage market offers screen
- **Diagram ID**: 103387
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    MOD_06_030_Show_Client_Data["{MOD}06.030 Show Client Data"]
    CLM_694_Hide_non_selectable_offers_in_Client_detail_and_Mana["CLM-694 Hide non-selectable offers in Client detail and Manage mkt.offers screen"]
    Client_detail_Client_detail["Client detail : Client detail"]
    REQ_1_System_will_not_display_unavailable_marketing_offers_o["REQ#1 - System will not display unavailable marketing offers on Product Marketing Offers grid in Client detail screen."]
    REQ_1_System_will_not_display_unavailable_marketing_offers_o -->|unnamed| CLM_694_Hide_non_selectable_offers_in_Client_detail_and_Mana
    Client_detail_Client_detail -->|unnamed| REQ_1_System_will_not_display_unavailable_marketing_offers_o
```

# CBL-11677 (CLM-3730) - Client center - Menu

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11677/CLM-3730 - Client center - Menu
- **Diagram ID**: 156163
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph TD
    CLM_3730_Client_center_Menu["CLM-3730 - Client center - Menu"]
    MOD_06_030_Show_Client_Data["{MOD}06.030 Show Client Data"]
    Search_Clients["Search Clients"]
    MOD_06_040_Search_Clients["{MOD}06.040 Search Clients"]
    ADD_BSL_home["{ADD}BSL home"]
    ADD_Search_clients["{ADD}Search clients"]
    BSL["BSL"]
    Top_menu["Top menu"]
    ADD_BSL_home -->|unnamed| BSL
    ADD_Search_clients -->|unnamed| MOD_06_040_Search_Clients
    ADD_Search_clients -->|unnamed| Search_Clients
```

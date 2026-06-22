# CBL-6566 (CLM-2222) Mystery Shopper search restriction for unauthorized user

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6566 (CLM-2222) Mystery Shopper search restriction for unauthorized user
- **Diagram ID**: 119610
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    MOD_06_040_Search_Clients["{MOD}06.040 Search Clients"]
    ADD_06_030_Show_client_data_hidden_contracts["{ADD}06.030 Show client data (hidden contracts)"]
    Client_detail_List_of_contracts_Default["Client detail : List of contracts - Default"]
    MOD_06_030_Show_Client_Data["{MOD}06.030 Show Client Data"]
    REQ_1_update_Client_detail_List_of_contracts_screen_and_hide["REQ#1 - update Client detail - List of contracts screen and hide contracts with HiddenStatus if user do not have specific right"]
    MOD_06_030_Show_Client_Data -->|unnamed| ADD_06_030_Show_client_data_hidden_contracts
```

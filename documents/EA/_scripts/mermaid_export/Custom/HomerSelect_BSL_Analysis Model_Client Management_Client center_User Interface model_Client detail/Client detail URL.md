# Client detail URL

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail
- **Diagram ID**: 144626
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph TD
    n_06_030_Show_client_data["06.030 Show client data"]
    Client_data["Client data"]
    MOD_06_030_Show_Client_Data["{MOD}06.030 Show Client Data"]
    Client_Detail_URL["Client Detail URL"]
    Client_Detail_URL -->|unnamed| MOD_06_030_Show_Client_Data
    Client_data -->|unnamed| MOD_06_030_Show_Client_Data
    Client_Detail_URL -->|unnamed| Client_data
    MOD_06_030_Show_Client_Data -->|unnamed| n_06_030_Show_client_data
```

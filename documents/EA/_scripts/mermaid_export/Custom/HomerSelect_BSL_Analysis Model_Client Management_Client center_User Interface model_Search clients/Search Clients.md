# Search Clients

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Search clients
- **Diagram ID**: 125473
- **Elements**: 13
- **Connectors**: 2

```mermaid
graph TD
    Search_criteria_IN["Search criteria - IN"]
    Main_menu["Main menu"]
    Search_criteria_Default["Search criteria - Default"]
    Search_criteria_KZ["Search criteria - KZ"]
    List_of_clients_VN["List of clients - VN"]
    List_of_clients_KZ["List of clients - KZ"]
    List_of_clients_Default["List of clients - Default"]
    el_1500022["Text"]
    el_1500016["Text"]
    MOD_06_040_Search_Clients["{MOD}06.040 Search Clients"]
    Reset["Reset"]
    Search["Search"]
    Search_Clients["Search Clients"]
    Main_menu -->|unnamed| Search_Clients
    Search_Clients -->|unnamed| MOD_06_040_Search_Clients
```

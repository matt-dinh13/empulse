# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/Access Rights
- **Diagram ID**: 156133
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph TD
    ADD_06_030_Show_client_data_display_Parent_name["{ADD}06.030 Show client data (display Parent name)"]
    ADD_06_030_Show_client_data_display_Gender["{ADD}06.030 Show client data (display Gender)"]
    ADD_06_030_Show_client_data_display_Date_of_birth["{ADD}06.030 Show client data (display Date of birth)"]
    ADD_06_040_Search_clients_by_Name_and_Date_of_birth["{ADD}06.040 Search clients by Name and Date of birth"]
    n_06_040_Search_clients["06.040 Search clients"]
    MOD_06_040_Search_Clients["{MOD}06.040 Search Clients"]
    MOD_06_040_Search_Clients -->|unnamed| ADD_06_030_Show_client_data_display_Date_of_birth
    MOD_06_040_Search_Clients -->|unnamed| ADD_06_030_Show_client_data_display_Parent_name
    MOD_06_040_Search_Clients -->|unnamed| ADD_06_030_Show_client_data_display_Gender
    MOD_06_040_Search_Clients -->|unnamed| n_06_040_Search_clients
    MOD_06_040_Search_Clients -->|unnamed| ADD_06_040_Search_clients_by_Name_and_Date_of_birth
```

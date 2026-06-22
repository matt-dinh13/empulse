# Client Search

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/UseCase Model
- **Diagram ID**: 160878
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    User[/"User"/]
    MOD_Mask_client_data["{MOD}Mask client data"]
    Get_alias_number_instead_of_original_for_Unique_Id_document["Get alias number instead of original for Unique Id document"]
    Search_clients_Search_Clients["Search clients : Search Clients"]
    MOD_06_040_Search_Clients(("{MOD}06.040 Search Clients"))
    Search_clients_Search_Clients -->|unnamed| MOD_06_040_Search_Clients
    MOD_06_040_Search_Clients -->|unnamed| Get_alias_number_instead_of_original_for_Unique_Id_document
    MOD_06_040_Search_Clients -->|unnamed| MOD_Mask_client_data
    User --- MOD_06_040_Search_Clients
```

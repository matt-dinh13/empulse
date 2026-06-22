# Card detail - Use case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/Use case
- **Diagram ID**: 138402
- **Elements**: 10
- **Connectors**: 8

```mermaid
graph LR
    Getting_POS_delivery_address["Getting POS delivery address"]
    Getting_client_s_delivery_address["Getting client's delivery address"]
    Get_client_current_contacts_from_CIF["Get client current contacts from CIF"]
    Use_case_Card_operations_Use_case["Use case : Card operations - Use case"]
    CaBus_CMS[/"CaBus-CMS"/]
    Card_Management_Card_management_Interface_diagram["Card Management : Card management - Interface diagram"]
    User_interface_Card_detail_User_interface["User interface : Card detail - User interface"]
    User[/"User"/]
    n_12_501_Show_card_detail(("12.501 Show card detail"))
    BSL["BSL"]
    n_12_501_Show_card_detail -->|unnamed| Get_client_current_contacts_from_CIF
    n_12_501_Show_card_detail --- CaBus_CMS
    n_12_501_Show_card_detail -->|unnamed| Getting_client_s_delivery_address
    n_12_501_Show_card_detail -->|unnamed| Getting_POS_delivery_address
    User_interface_Card_detail_User_interface -->|unnamed| n_12_501_Show_card_detail
    Card_Management_Card_management_Interface_diagram -->|unnamed| n_12_501_Show_card_detail
    Use_case_Card_operations_Use_case -->|unnamed| BSL
    User --- n_12_501_Show_card_detail
```

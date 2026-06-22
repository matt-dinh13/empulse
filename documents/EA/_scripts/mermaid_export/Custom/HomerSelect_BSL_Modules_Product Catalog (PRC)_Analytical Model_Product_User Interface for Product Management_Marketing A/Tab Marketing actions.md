# Tab Marketing actions

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Marketing Action Management and Assignment/User Interface
- **Diagram ID**: 71290
- **Elements**: 9
- **Connectors**: 5

```mermaid
graph TD
    Marketing_Actions["Marketing Actions"]
    User_Interface_Marketing_actions_Assign["User Interface : Marketing actions-Assign"]
    User_Interface_Manage_Marketing_actions["User Interface : Manage Marketing actions"]
    DEL_02_608_Assign_marketing_action_to_product["{DEL}02.608 Assign marketing action to product"]
    DEL_02_622_Manage_marketing_actions["{DEL}02.622 Manage marketing actions"]
    Manage_marketing_actions["Manage marketing actions"]
    Assign_marketing_actions["Assign marketing actions"]
    Marketing_actions["Marketing actions"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    Marketing_actions -->|unnamed| DEL_02_070_Show_product_version_detail
    Manage_marketing_actions -->|unnamed| DEL_02_622_Manage_marketing_actions
    Assign_marketing_actions -->|unnamed| DEL_02_608_Assign_marketing_action_to_product
    Manage_marketing_actions -->|unnamed| User_Interface_Manage_Marketing_actions
    Assign_marketing_actions -->|unnamed| User_Interface_Marketing_actions_Assign
```

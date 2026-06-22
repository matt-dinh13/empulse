# Manage and Assign Marketing actions

```mermaid
graph TD
    User["User"]
    User_Interface_Marketing_actions_Assign["User Interface : Marketing actions-Assign"]
    User_Interface_Tab_Marketing_actions["User Interface : Tab Marketing actions"]
    User_Interface_Manage_Marketing_actions["User Interface : Manage Marketing actions"]
    DEL_02_608_Assign_marketing_action_to_product["{DEL}02.608 Assign marketing action to product"]
    DEL_02_622_Manage_marketing_actions["{DEL}02.622 Manage marketing actions"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    User_Interface_Tab_Marketing_actions -->|unnamed| DEL_02_622_Manage_marketing_actions
    User_Interface_Tab_Marketing_actions -->|unnamed| DEL_02_608_Assign_marketing_action_to_product
    DEL_02_622_Manage_marketing_actions -->|unnamed| User_Interface_Manage_Marketing_actions
    DEL_02_608_Assign_marketing_action_to_product -->|unnamed| User_Interface_Marketing_actions_Assign
    User -->|unnamed| DEL_02_622_Manage_marketing_actions
    User -->|unnamed| DEL_02_070_Show_product_version_detail
    User -->|unnamed| DEL_02_608_Assign_marketing_action_to_product
    DEL_02_070_Show_product_version_detail -->|unnamed| User_Interface_Tab_Marketing_actions
```

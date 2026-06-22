# Marketing actions-Assign

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Marketing Action Management and Assignment/User Interface
- **Diagram ID**: 71289
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph TD
    Common_product_properties_header["Common product properties header"]
    Select_all["Select all"]
    Assign_Marketing_Actions["Assign Marketing Actions"]
    User_Interface_Tab_Marketing_actions["User Interface : Tab Marketing actions"]
    DEL_02_608_Assign_marketing_action_to_product["{DEL}02.608 Assign marketing action to product"]
    Deselect_all["Deselect all"]
    Cancel["Cancel"]
    OK["OK"]
    Assign_marketing_actions["Assign marketing actions"]
    Assign_marketing_actions -->|unnamed| DEL_02_608_Assign_marketing_action_to_product
    Cancel -->|unnamed| User_Interface_Tab_Marketing_actions
    OK -->|unnamed| User_Interface_Tab_Marketing_actions
```

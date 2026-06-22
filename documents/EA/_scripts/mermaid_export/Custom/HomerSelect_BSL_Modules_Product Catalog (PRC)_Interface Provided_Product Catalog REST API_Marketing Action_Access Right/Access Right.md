# Access Right

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Marketing Action/Access Right
- **Diagram ID**: 133838
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    n_02_622_Manage_marketing_actions["02.622 Manage marketing actions"]
    n_02_070_Show_product_version_detail["02.070 Show product version detail"]
    PUT_manufacturers["PUT manufacturers"]
    POST_marketing_action["POST marketing action"]
    GET_marketing_actions["GET marketing-actions"]
    GET_marketing_actions -->|unnamed| n_02_070_Show_product_version_detail
    PUT_manufacturers -->|unnamed| n_02_622_Manage_marketing_actions
    POST_marketing_action -->|unnamed| n_02_622_Manage_marketing_actions
```

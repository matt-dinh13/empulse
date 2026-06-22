# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Access Rights
- **Diagram ID**: 153056
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    PUT_service["PUT service"]
    POST_new_service["POST new service"]
    POST_copy_service["POST copy service"]
    GET_service_by_search["GET service by search"]
    GET_service_by_code["GET service by code"]
    n_02_671_View_service_setting["02.671 View service setting"]
    n_02_672_Manage_service_setting["02.672  Manage service setting"]
    PUT_service -->|unnamed| n_02_672_Manage_service_setting
    GET_service_by_search -->|unnamed| n_02_671_View_service_setting
    GET_service_by_code -->|unnamed| n_02_671_View_service_setting
    POST_copy_service -->|unnamed| n_02_672_Manage_service_setting
    POST_new_service -->|unnamed| n_02_672_Manage_service_setting
```

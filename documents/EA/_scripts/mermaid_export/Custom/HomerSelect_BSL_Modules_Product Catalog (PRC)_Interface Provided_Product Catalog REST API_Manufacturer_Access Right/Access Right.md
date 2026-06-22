# Access Right

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Manufacturer/Access Right
- **Diagram ID**: 133830
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    PUT_manufacturers["PUT manufacturers"]
    POST_manufacturers["POST manufacturers"]
    GET_manufacturers["GET manufacturers"]
    n_02_621_Manage_manufacturers["02.621 Manage manufacturers"]
    n_02_610_Assign_manufacturers_to_product["02.610 Assign manufacturers to product"]
    GET_manufacturers -->|unnamed| n_02_610_Assign_manufacturers_to_product
    PUT_manufacturers -->|unnamed| n_02_621_Manage_manufacturers
    POST_manufacturers -->|unnamed| n_02_621_Manage_manufacturers
```

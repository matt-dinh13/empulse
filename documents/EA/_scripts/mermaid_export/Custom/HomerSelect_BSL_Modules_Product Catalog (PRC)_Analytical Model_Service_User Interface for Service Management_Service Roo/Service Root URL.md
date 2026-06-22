# Service Root URL

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/User Interface Model
- **Diagram ID**: 163154
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph TD
    DEL_08_160_Show_Service_version_detail["{DEL}08.160 Show Service version detail"]
    DEL_08_160_Show_Service_version_detail["{DEL}08.160 Show Service version detail"]
    Service["Service"]
    Product_Catalog_URL["Product Catalog URL"]
    Product_Catalog_URL -->|unnamed| Service
    Service -->|unnamed| DEL_08_160_Show_Service_version_detail
    Product_Catalog_URL -->|unnamed| DEL_08_160_Show_Service_version_detail
    DEL_08_160_Show_Service_version_detail -->|unnamed| DEL_08_160_Show_Service_version_detail
```

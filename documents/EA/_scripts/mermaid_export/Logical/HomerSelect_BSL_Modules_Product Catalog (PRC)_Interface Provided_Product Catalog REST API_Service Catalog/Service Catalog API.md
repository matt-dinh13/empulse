# Service Catalog API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog
- **Diagram ID**: 161063
- **Elements**: 9
- **Connectors**: 6

```mermaid
classDiagram
    class Product_Catalog_REST_API_Product_Catalog_REST_API["Product Catalog REST API : Product Catalog REST API"]
    class Service_Catalog_Service_Catalog["Service Catalog : Service Catalog"]
    class PUT_service["PUT service"]
    class POST_new_service["POST new service"]
    class GET_service_by_search["GET service by search"]
    class GET_service_by_code["GET service by code"]
    class POST_copy_service["POST copy service"]
    class Product_catalog_API["Product catalog API"]
    class sc_services["sc-services"]
    POST_copy_service <|.. sc_services : unnamed
    GET_service_by_code <|.. sc_services : unnamed
    sc_services ..> GET_service_by_search : unnamed
    POST_new_service <|.. sc_services : unnamed
    PUT_service <|.. sc_services : unnamed
    Product_catalog_API ..> sc_services : /sc-services
```

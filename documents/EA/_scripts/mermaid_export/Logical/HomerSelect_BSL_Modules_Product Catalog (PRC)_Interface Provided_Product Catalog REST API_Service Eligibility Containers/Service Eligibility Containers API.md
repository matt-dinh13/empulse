# Service Eligibility Containers API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Eligibility Containers
- **Diagram ID**: 139126
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class DELETE_service_eligibility_containers["DELETE service-eligibility-containers"]
    class PUT_service_eligibility_containers["PUT service-eligibility-containers"]
    class POST_service_eligibility_containers["POST service-eligibility-containers"]
    class GET_service_eligibility_caontainers["GET service-eligibility-caontainers"]
    class service_eligibility_containers["service-eligibility-containers"]
    class Product_catalog_API["Product catalog API"]
    service_eligibility_containers ..> GET_service_eligibility_caontainers : unnamed
    service_eligibility_containers ..> POST_service_eligibility_containers : unnamed
    service_eligibility_containers ..> PUT_service_eligibility_containers : unnamed
    service_eligibility_containers ..> DELETE_service_eligibility_containers : unnamed
    Product_catalog_API ..> service_eligibility_containers : /service-eligibility-containers
```

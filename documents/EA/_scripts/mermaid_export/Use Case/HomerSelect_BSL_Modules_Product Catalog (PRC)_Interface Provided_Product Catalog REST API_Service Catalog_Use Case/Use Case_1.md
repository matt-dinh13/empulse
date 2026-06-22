# Use Case

```mermaid
graph TD
    ADD_Service_code["{ADD}Service code"]
    External_Component["External Component"]
    PUT_service["PUT service"]
    POST_copy_service["POST copy service"]
    MOD_Service_Catalog_Service_validation["{MOD}Service Catalog Service - validation"]
    POST_new_service["POST new service"]
    GET_service_by_search["GET service by search"]
    GET_service_by_code["GET service by code"]
    PUT_service -->|unnamed| MOD_Service_Catalog_Service_validation
    POST_new_service -->|unnamed| MOD_Service_Catalog_Service_validation
    POST_copy_service -->|unnamed| ADD_Service_code
    POST_new_service -->|unnamed| ADD_Service_code
    External_Component -->|unnamed| PUT_service
    External_Component -->|unnamed| POST_new_service
    External_Component -->|unnamed| POST_copy_service
    External_Component -->|unnamed| GET_service_by_code
    External_Component -->|unnamed| GET_service_by_search
```

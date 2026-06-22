# Access Rights

```mermaid
graph TD
    PUT_service_eligibility_containers["PUT service-eligibility-containers"]
    POST_service_eligibility_containers["POST service-eligibility-containers"]
    DELETE_service_eligibility_containers["DELETE service-eligibility-containers"]
    GET_service_eligibility_caontainers["GET service-eligibility-caontainers"]
    n_08_378_Find_service_eligibility_containers["08.378 Find service eligibility containers"]
    n_08_376_Create_service_eligibility_container["08.376 Create service eligibility container"]
    n_08_370_Deactivate_service_eligibility_container["08.370 Deactivate service eligibility container"]
    n_08_372_Update_service_eligibility_container["08.372 Update service eligibility container"]
    PUT_service_eligibility_containers -->|unnamed| n_08_372_Update_service_eligibility_container
    GET_service_eligibility_caontainers -->|unnamed| n_08_378_Find_service_eligibility_containers
    POST_service_eligibility_containers -->|unnamed| n_08_376_Create_service_eligibility_container
    DELETE_service_eligibility_containers -->|unnamed| n_08_370_Deactivate_service_eligibility_container
```

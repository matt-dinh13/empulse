# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Eligibility Containers/Use Case
- **Diagram ID**: 160588
- **Elements**: 6
- **Connectors**: 6

```mermaid
graph LR
    ServiceEligibilityContainer_validation["ServiceEligibilityContainer - validation"]
    DELETE_service_eligibility_containers(("DELETE service-eligibility-containers"))
    PUT_service_eligibility_containers(("PUT service-eligibility-containers"))
    POST_service_eligibility_containers(("POST service-eligibility-containers"))
    External_Component[/"External Component"/]
    GET_service_eligibility_caontainers(("GET service-eligibility-caontainers"))
    POST_service_eligibility_containers -->|unnamed| ServiceEligibilityContainer_validation
    PUT_service_eligibility_containers -->|unnamed| ServiceEligibilityContainer_validation
    External_Component --- GET_service_eligibility_caontainers
    External_Component --- PUT_service_eligibility_containers
    External_Component --- POST_service_eligibility_containers
    External_Component --- DELETE_service_eligibility_containers
```

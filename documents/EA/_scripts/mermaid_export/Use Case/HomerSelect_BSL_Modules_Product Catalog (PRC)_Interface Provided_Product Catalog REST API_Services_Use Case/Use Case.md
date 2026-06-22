# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Use Case
- **Diagram ID**: 162983
- **Elements**: 20
- **Connectors**: 25

```mermaid
graph LR
    ADD_User_check_for_activation["{ADD}User check for activation"]
    ADD_Get_sales_description_for_versioned_entity["{ADD}Get sales description for versioned entity"]
    Wildcard_search["Wildcard search"]
    MOD_PCG_5122_Service_offer_validation["{MOD PCG-5122}
Service offer - validation"]
    Get_Salesroom_Sales_Items["Get Salesroom Sales Items"]
    Check_Service_Availability_on_Salesroom["Check Service Availability on Salesroom"]
    MOD_POST_service_offers(("{MOD} POST service-offers"))
    MOD_PUT_service_activations(("{MOD}PUT service activations"))
    External_Component[/"External Component"/]
    MOD_Service_relations_validation["{MOD}Service relations - validation"]
    Service_validation["Service - validation"]
    PUT_service_relations(("PUT service-relations"))
    GET_service_relations(("GET service-relations"))
    MOD_Service_activation_validation_rules["{MOD}Service activation validation rules"]
    Version_number["Version number"]
    MOD_PUT_services(("{MOD}PUT services"))
    MOD_POST_services(("{MOD}POST services"))
    GET_service_versions(("GET service-versions"))
    MOD_GET_services(("{MOD}GET services"))
    DELETE_services(("DELETE services"))
    MOD_PUT_service_activations -->|unnamed| Service_validation
    MOD_PUT_service_activations -->|unnamed| ADD_User_check_for_activation
    MOD_POST_services -->|unnamed| ADD_User_check_for_activation
    MOD_GET_services -->|unnamed| ADD_Get_sales_description_for_versioned_entity
    MOD_GET_services -->|unnamed| Wildcard_search
    MOD_POST_service_offers -->|unnamed| MOD_PCG_5122_Service_offer_validation
    Check_Service_Availability_on_Salesroom -->|unnamed| Get_Salesroom_Sales_Items
    MOD_POST_service_offers -->|unnamed| Check_Service_Availability_on_Salesroom
    PUT_service_relations -->|unnamed| MOD_Service_relations_validation
    MOD_PUT_services -->|unnamed| ADD_User_check_for_activation
    MOD_POST_services -->|unnamed| Service_validation
    MOD_PUT_services -->|unnamed| MOD_Service_activation_validation_rules
    MOD_POST_services -->|unnamed| MOD_Service_activation_validation_rules
    MOD_PUT_services -->|unnamed| Version_number
    MOD_POST_services -->|unnamed| Version_number
    MOD_PUT_services -->|unnamed| Service_validation
    External_Component --- GET_service_relations
    External_Component --- MOD_PUT_service_activations
    External_Component --- MOD_POST_services
    External_Component --- PUT_service_relations
    External_Component --- GET_service_versions
    External_Component --- DELETE_services
    External_Component --- MOD_GET_services
    External_Component --- MOD_PUT_services
    External_Component --- MOD_POST_service_offers
```

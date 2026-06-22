# PCG-5343 Display vas add on offers based on specific product type (CBL-29025)

```mermaid
graph TD
    ADD_Remove_Service_Relation_to_Product_Profile["{ADD}Remove Service Relation to Product Profile"]
    ADD_Add_Service_Relation_to_Product_Profile["{ADD}Add Service Relation to Product Profile"]
    User_Interface_ADD_TAB_Service_to_Product_Profile_Relations["User Interface : {ADD} TAB Service to Product Profile Relations"]
    ADD_ServiceToProductProfilesResponse["{ADD} ServiceToProductProfilesResponse"]
    ADD_ServiceToProductProfilesDto["{ADD} ServiceToProductProfilesDto"]
    ADD_service_to_product_profiles["{ADD} service-to-product-profiles"]
    ADD_ServiceToProductProfilesDto_validation_rules["{ADD} ServiceToProductProfilesDto - validation rules"]
    ADD_POST_service_to_product_profiles["{ADD} POST service-to-product-profiles"]
    ADD_GET_service_to_product_profiles["{ADD} GET service-to-product-profiles"]
    ADD_DELETE_service_to_product_profiles["{ADD} DELETE service-to-product-profiles"]
    User_Interface["User Interface"]
    Logical_Data_Model["Logical Data Model"]
    User_Interface_Model_Show_Service["User Interface Model : Show Service"]
    Service_to_Product_profile["Service to Product profile"]
    Business_Requirement["Business Requirement"]
    Services_Service_API["Services : Service API"]
    MOD_ServiceOfferParametersDto["{MOD}ServiceOfferParametersDto"]
    service_offers["service-offers"]
    diagram_C1073248_FAF6_40ce_9FB9_1B99B0462B8F["$diagram://{C1073248-FAF6-40ce-9FB9-1B99B0462B8F}"]
    Product_catalog_API["Product catalog API"]
    MOD_POST_service_offers["{MOD} POST service-offers"]
    ADD_Service_to_Product_Profile_Relation["{ADD} Service to Product Profile Relation"]
    ADD_service_to_product_profiles -->|unnamed| ADD_DELETE_service_to_product_profiles
    ADD_service_to_product_profiles -->|unnamed| ADD_GET_service_to_product_profiles
    ADD_service_to_product_profiles -->|unnamed| ADD_POST_service_to_product_profiles
    ADD_POST_service_to_product_profiles -->|unnamed| ADD_ServiceToProductProfilesDto_validation_rules
    ADD_DELETE_service_to_product_profiles -->|unnamed| ADD_ServiceToProductProfilesDto_validation_rules
    ADD_service_to_product_profiles -->|unnamed| ADD_ServiceToProductProfilesDto
    ADD_ServiceToProductProfilesResponse -->|unnamed| ADD_ServiceToProductProfilesDto
    ADD_service_to_product_profiles -->|unnamed| ADD_ServiceToProductProfilesResponse
    service_offers -->|unnamed| MOD_ServiceOfferParametersDto
    service_offers -->|unnamed| MOD_POST_service_offers
    Product_catalog_API -->|/service-offers| service_offers
```

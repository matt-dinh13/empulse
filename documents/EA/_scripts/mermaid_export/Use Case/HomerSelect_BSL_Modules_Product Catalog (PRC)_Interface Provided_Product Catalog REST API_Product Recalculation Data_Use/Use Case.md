# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Recalculation Data/Use Case
- **Diagram ID**: 160589
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph LR
    Product_recalculation_services_validation["Product recalculation services - validation"]
    Service_limit_check["Service limit check"]
    Check_Service_Availability_on_Salesroom["Check Service Availability on Salesroom"]
    Service_qualification_criteria_check["Service qualification criteria check"]
    POST_product_recalculation_data_service(("POST product recalculation data - service"))
    External_Component[/"External Component"/]
    POST_product_recalculation_data_service -->|unnamed| Service_qualification_criteria_check
    POST_product_recalculation_data_service -->|unnamed| Check_Service_Availability_on_Salesroom
    POST_product_recalculation_data_service -->|unnamed| Service_limit_check
    POST_product_recalculation_data_service -->|unnamed| Product_recalculation_services_validation
    External_Component --- POST_product_recalculation_data_service
```

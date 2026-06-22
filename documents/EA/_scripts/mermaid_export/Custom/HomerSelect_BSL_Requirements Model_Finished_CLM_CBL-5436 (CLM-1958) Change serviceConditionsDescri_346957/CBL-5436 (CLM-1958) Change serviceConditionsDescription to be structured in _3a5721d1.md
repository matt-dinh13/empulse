# CBL-5436 (CLM-1958) Change serviceConditionsDescription to be structured in REST contract-service

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5436 (CLM-1958) Change serviceConditionsDescription to be structured in REST contract-service
- **Diagram ID**: 116594
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Use_Case_Status_of_Grace_Period["Use Case : Status of Grace Period"]
    Use_Case_Status_of_Gift_payment["Use Case : Status of Gift payment"]
    REQ_1_Structured_description_for_GRPER_service_in_REST_contr["REQ#1 - Structured description for GRPER service in REST contract/service"]
    Contract_Services_Contract_Services_GET_contract_services["Contract Services : Contract Services - GET contract services"]
    REQ_1_Structured_description_for_GRPER_service_in_REST_contr -->|unnamed| Use_Case_Status_of_Grace_Period
    REQ_1_Structured_description_for_GRPER_service_in_REST_contr -->|unnamed| Use_Case_Status_of_Gift_payment
    Contract_Services_Contract_Services_GET_contract_services -->|unnamed| REQ_1_Structured_description_for_GRPER_service_in_REST_contr
```

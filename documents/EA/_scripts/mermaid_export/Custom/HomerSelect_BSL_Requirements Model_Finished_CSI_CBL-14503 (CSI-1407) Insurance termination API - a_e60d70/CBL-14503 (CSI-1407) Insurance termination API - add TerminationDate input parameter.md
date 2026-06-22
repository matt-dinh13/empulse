# CBL-14503 (CSI-1407) Insurance termination API - add TerminationDate input parameter

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-14503 (CSI-1407) Insurance termination API - add TerminationDate input parameter
- **Diagram ID**: 141837
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    n_08_454_Terminate_contract_insurance_service["08.454 Terminate contract insurance service"]
    v1_0_Contract_Insurance_Services_PUT_Contract_Insurance_Serv["v1.0 : Contract Insurance Services - PUT: Contract Insurance Service Terminate"]
    n_08_454_Terminate_contract_insurance_service["08.454 Terminate contract insurance service"]
    ADD_08_454_Terminate_contract_insurance_service_with_defined["{ADD}08.454 Terminate contract insurance service with defined termination date"]
    REQ_1_Update_of_UC08_454_Terminate_contract_insurance_servic["REQ#1 - Update of UC08.454 Terminate contract insurance service"]
    n_08_454_Terminate_contract_insurance_service -->|unnamed| n_08_454_Terminate_contract_insurance_service
    n_08_454_Terminate_contract_insurance_service -->|unnamed| ADD_08_454_Terminate_contract_insurance_service_with_defined
```

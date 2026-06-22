# CBL-5433 (CLM-1961) Stop charging premium insurance for Paid-off/Written-off REL contracts

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5433 (CLM-1961) Stop charging premium insurance for Paid-off/Written-off REL contracts
- **Diagram ID**: 119099
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Use_Case_Model_Insurance_Service_Offers_Use_Case_Model["Use Case Model : Insurance Service Offers - Use Case Model"]
    Use_Case_Model_Adding_Insurance_Service_on_REL_contract["Use Case Model : Adding Insurance Service on REL contract"]
    REQ_1_Prevent_adding_insurance_for_contracts_in_disallowed_s["REQ #1 - Prevent adding insurance for contracts in disallowed statuses"]
    Use_Case_Model_Insurance_on_REL_Contract_management["Use Case Model : Insurance on REL Contract management"]
    REQ_1_Prevent_adding_insurance_for_contracts_in_disallowed_s -->|unnamed| Use_Case_Model_Insurance_on_REL_Contract_management
    Use_Case_Model_Insurance_Service_Offers_Use_Case_Model -->|unnamed| REQ_1_Prevent_adding_insurance_for_contracts_in_disallowed_s
    Use_Case_Model_Adding_Insurance_Service_on_REL_contract -->|unnamed| REQ_1_Prevent_adding_insurance_for_contracts_in_disallowed_s
```

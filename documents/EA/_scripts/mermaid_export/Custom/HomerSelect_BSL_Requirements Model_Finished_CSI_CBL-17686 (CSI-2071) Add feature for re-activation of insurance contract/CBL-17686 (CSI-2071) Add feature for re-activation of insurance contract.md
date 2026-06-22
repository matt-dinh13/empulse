# CBL-17686 (CSI-2071) Add feature for re-activation of insurance contract

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17686 (CSI-2071) Add feature for re-activation of insurance contract
- **Diagram ID**: 148013
- **Elements**: 9
- **Connectors**: 2

```mermaid
graph TD
    Logical_Data_Model_Insurance_Contract["Logical Data Model : Insurance Contract"]
    Logical_Data_Model_Contract_Service["Logical Data Model : Contract Service"]
    MOD_System_event_processing_setting["{MOD}System event processing setting"]
    Logical_data_model_Business_event_Logical_data_model["Logical data model : Business event - Logical data model"]
    REQ_1_New_API_for_insurance_reactivation["REQ#1 - New API for insurance reactivation"]
    ADD_Check_conditions_to_insurance_reactivation["{ADD}Check conditions to insurance reactivation"]
    v3_Contract_Insurance_Services_POST_Contract_Insurance_Servi["v3 : Contract Insurance Services - POST: Contract Insurance Service Reactivate v3"]
    n_08_455_Reactivate_contract_insurance_service["08.455 Reactivate contract insurance service"]
    n_08_455_Reactivate_contract_insurance_service["08.455 Reactivate contract insurance service"]
    n_08_455_Reactivate_contract_insurance_service -->|unnamed| ADD_Check_conditions_to_insurance_reactivation
    n_08_455_Reactivate_contract_insurance_service -->|unnamed| n_08_455_Reactivate_contract_insurance_service
```

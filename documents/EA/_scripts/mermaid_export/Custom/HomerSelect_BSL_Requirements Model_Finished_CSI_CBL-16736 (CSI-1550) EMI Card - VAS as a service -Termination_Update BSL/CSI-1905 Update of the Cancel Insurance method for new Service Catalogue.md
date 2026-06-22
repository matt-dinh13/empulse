# CSI-1905 Update of the Cancel Insurance method for new Service Catalogue

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods/CSI-1905 Update of the Cancel Insurance method for new Service Catalogue
- **Diagram ID**: 146213
- **Elements**: 9
- **Connectors**: 6

```mermaid
graph TD
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    v3_Contract_Insurance_Services_PUT_Contract_Insurance_Servic["v3 : Contract Insurance Services - PUT: Contract Insurance Service Cancel v3"]
    Cancel_insurance_method_update_UI_and_API["Cancel insurance method update (UI and API)"]
    Insurance_service_setting_mapping["Insurance service setting mapping"]
    MOD_Check_conditions_to_insurance_cancellation["{MOD}Check conditions to insurance cancellation"]
    n_08_451_Get_Contract_insurance_Cancel_preview_service["08.451 Get Contract insurance Cancel preview service"]
    n_08_452_Cancel_contract_insurance_service["08.452 Cancel contract insurance service"]
    MOD_11_111_Cancel_insurance_contract_manually["{MOD}11.111 Cancel insurance contract manually"]
    MOD_Check_conditions_to_insurance_cancellation -->|unnamed| Insurance_service_setting_mapping
    MOD_Check_conditions_to_insurance_cancellation -->|unnamed| Get_Service_definition_from_New_Service_Catalogue
    MOD_Check_conditions_to_insurance_cancellation -->|unnamed| Get_Service_definition_from_Services
    n_08_451_Get_Contract_insurance_Cancel_preview_service -->|unnamed| MOD_Check_conditions_to_insurance_cancellation
    n_08_452_Cancel_contract_insurance_service -->|unnamed| MOD_Check_conditions_to_insurance_cancellation
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| MOD_Check_conditions_to_insurance_cancellation
```

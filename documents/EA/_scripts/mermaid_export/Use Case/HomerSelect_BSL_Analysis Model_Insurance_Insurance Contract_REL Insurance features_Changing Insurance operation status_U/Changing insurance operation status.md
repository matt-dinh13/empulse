# Changing insurance operation status

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Use Case Model
- **Diagram ID**: 162064
- **Elements**: 13
- **Connectors**: 12

```mermaid
graph LR
    v2_Insurance_Contract_Deactivate_Insurance_v2["v2 : Insurance Contract - Deactivate Insurance v2"]
    v2_Insurance_Contract_Activate_Insurance_v2["v2 : Insurance Contract - Activate Insurance v2"]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    Determine_first_Insurance_Period_based_on_Insurance_paramete["Determine first Insurance Period based on Insurance parameters"]
    Allowed_contract_statuses_for_insurance_activation["Allowed contract statuses for insurance activation"]
    External_system[/"External system"/]
    n_11_149_Deactivate_insurance_on_contract(("11.149 Deactivate insurance on contract"))
    n_11_147_Activate_insurance_on_contract(("11.147 Activate insurance on contract"))
    CIF[/"CIF"/]
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    n_11_126_Check_client_eligibility_for_insurance(("11.126 Check client eligibility for insurance"))
    Generate_notification_about_insurance_change["Generate notification about insurance change"]
    n_11_149_Deactivate_insurance_on_contract -->|unnamed| Generate_notification_about_insurance_change
    n_11_147_Activate_insurance_on_contract -->|unnamed| Generate_notification_about_insurance_change
    n_11_147_Activate_insurance_on_contract -->|unnamed| n_11_126_Check_client_eligibility_for_insurance
    n_11_147_Activate_insurance_on_contract -.->|include| n_11_040_Activate_insurance_contract
    v2_Insurance_Contract_Activate_Insurance_v2 -->|unnamed| n_11_147_Activate_insurance_on_contract
    v2_Insurance_Contract_Deactivate_Insurance_v2 -->|unnamed| n_11_149_Deactivate_insurance_on_contract
    n_11_147_Activate_insurance_on_contract -->|unnamed| Allowed_contract_statuses_for_insurance_activation
    n_11_147_Activate_insurance_on_contract -->|unnamed| Determine_first_Insurance_Period_based_on_Insurance_paramete
    n_11_147_Activate_insurance_on_contract -->|unnamed| Get_Service_definition_from_New_Service_Catalogue
    n_11_147_Activate_insurance_on_contract -->|unnamed| Get_Service_definition_from_Services
    CIF --> n_11_126_Check_client_eligibility_for_insurance
    n_11_126_Check_client_eligibility_for_insurance -->|unnamed| Generate_notification_about_insurance_change
```

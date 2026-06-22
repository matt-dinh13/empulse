# CSI-2918 VAS Deal activation method

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-2918 VAS Deal activation method
- **Diagram ID**: 154450
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    Deals_v1_Activate_Deal["Deals_v1 : Activate Deal"]
    n_11_040_Activate_Deal_VAS(("11.040 Activate Deal (VAS)"))
    External_system[/"External system"/]
    Insurance_service_setting_mapping["Insurance service setting mapping"]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    n_11_020_Create_deal_period(("11.020 Create deal period"))
    Check_INSR_Insurance_Program_eligibility["Check INSR Insurance Program eligibility"]
    Get_Expected_date_of_Billing_period["Get Expected date of Billing period"]
    n_11_040_Activate_Deal_VAS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue
    n_11_040_Activate_Deal_VAS -->|unnamed| Check_INSR_Insurance_Program_eligibility
    n_11_040_Activate_Deal_VAS -.->|include| n_11_020_Create_deal_period
    n_11_040_Activate_Deal_VAS -->|unnamed| Get_Expected_date_of_Billing_period
    n_11_040_Activate_Deal_VAS -->|unnamed| Get_Service_definition_from_Services
    External_system --- n_11_040_Activate_Deal_VAS
    Deals_v1_Activate_Deal -->|unnamed| n_11_040_Activate_Deal_VAS
```

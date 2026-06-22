# CSI-2936 VAS Deal deactivation method

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-2936 VAS Deal deactivation method
- **Diagram ID**: 154697
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph LR
    Deals_v1_Deactivate_Deal["Deals_v1 : Deactivate Deal"]
    ADD_11_050_Deactivate_Deal_VAS(("{ADD}11.050 Deactivate Deal (VAS)"))
    External_system[/"External system"/]
    Insurance_service_setting_mapping["Insurance service setting mapping"]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    External_system --- ADD_11_050_Deactivate_Deal_VAS
    ADD_11_050_Deactivate_Deal_VAS -->|unnamed| Insurance_service_setting_mapping
    ADD_11_050_Deactivate_Deal_VAS -->|unnamed| Get_Service_definition_from_New_Service_Catalogue
    ADD_11_050_Deactivate_Deal_VAS -->|unnamed| Get_Service_definition_from_Services
    Deals_v1_Deactivate_Deal -->|unnamed| ADD_11_050_Deactivate_Deal_VAS
```

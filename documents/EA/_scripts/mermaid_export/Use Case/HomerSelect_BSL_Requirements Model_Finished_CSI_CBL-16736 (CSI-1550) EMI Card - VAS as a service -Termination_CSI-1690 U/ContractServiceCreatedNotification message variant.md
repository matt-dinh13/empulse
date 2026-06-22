# ContractServiceCreatedNotification message variant

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1690 Use ContractServiceNotification message variants for notifications
- **Diagram ID**: 145020
- **Elements**: 9
- **Connectors**: 10

```mermaid
graph LR
    n_11_147_Activate_insurance_on_contract(("11.147 Activate insurance on contract"))
    User[/"User"/]
    External_system[/"External system"/]
    MOD_01_774_Create_Contract_Service(("{MOD}01.774 Create Contract Service"))
    MOD_08_346_Add_Insurance_service_on_Contract_common(("{MOD}08.346 Add Insurance service on Contract common"))
    MOD_08_347_Add_Insurance_service_on_Contract_service(("{MOD}08.347 Add Insurance service on Contract service"))
    n_08_345_Add_Insurance_on_Contract(("08.345 Add Insurance on Contract"))
    unnamed["unnamed"]
    n_08_080_Add_new_available_Service_on_Contract(("08.080 Add new available Service on Contract"))
    unnamed -->|unnamed| MOD_01_774_Create_Contract_Service
    unnamed -->|unnamed| MOD_08_346_Add_Insurance_service_on_Contract_common
    unnamed -->|unnamed| n_08_080_Add_new_available_Service_on_Contract
    MOD_01_774_Create_Contract_Service --- External_system
    External_system --> MOD_08_347_Add_Insurance_service_on_Contract_service
    User --> n_08_345_Add_Insurance_on_Contract
    MOD_08_347_Add_Insurance_service_on_Contract_service -.->|include| MOD_08_346_Add_Insurance_service_on_Contract_common
    n_08_345_Add_Insurance_on_Contract -.->|include| MOD_08_346_Add_Insurance_service_on_Contract_common
    MOD_08_346_Add_Insurance_service_on_Contract_common -.->|include| n_11_147_Activate_insurance_on_contract
    User --> n_08_080_Add_new_available_Service_on_Contract
```

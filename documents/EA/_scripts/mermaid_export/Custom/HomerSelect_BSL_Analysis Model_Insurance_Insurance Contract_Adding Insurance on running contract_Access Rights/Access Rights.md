# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Access Rights
- **Diagram ID**: 155645
- **Elements**: 11
- **Connectors**: 8

```mermaid
graph TD
    ADD_08_349_Get_Insurance_offer_preview_overrule["{ADD}08.349 Get Insurance offer preview - overrule"]
    ADD_08_350_Accept_Contract_Insurance_Service["{ADD}08.350 Accept Contract Insurance Service"]
    MOD_08_350_Accept_Contract_Insurance_Service["{MOD}08.350 Accept Contract Insurance Service"]
    ADD_08_349_Get_Insurance_offer_preview["{ADD}08.349 Get Insurance offer preview"]
    MOD_08_349_Generate_Insurance_offer_preview["{MOD}08.349 Generate Insurance offer preview"]
    n_08_347_Add_Insurance_service_on_Contract_service["08.347 Add Insurance service on Contract service"]
    n_08_346_Add_Insurance_service_on_Contract_common["08.346 Add Insurance service on Contract common"]
    n_08_345_Add_Insurance_on_Contract["08.345 Add Insurance on Contract"]
    MOD_08_346_Add_Insurance_service_on_Contract_common["{MOD}08.346 Add Insurance service on Contract common"]
    MOD_08_347_Add_Insurance_service_on_Contract_service["{MOD}08.347 Add Insurance service on Contract service"]
    n_08_345_Add_Insurance_on_Contract["08.345 Add Insurance on Contract"]
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| MOD_08_346_Add_Insurance_service_on_Contract_common
    MOD_08_347_Add_Insurance_service_on_Contract_service -->|unnamed| n_08_347_Add_Insurance_service_on_Contract_service
    MOD_08_346_Add_Insurance_service_on_Contract_common -->|unnamed| n_08_346_Add_Insurance_service_on_Contract_common
    n_08_345_Add_Insurance_on_Contract -->|unnamed| MOD_08_346_Add_Insurance_service_on_Contract_common
    MOD_08_350_Accept_Contract_Insurance_Service -->|unnamed| ADD_08_350_Accept_Contract_Insurance_Service
    n_08_345_Add_Insurance_on_Contract -->|unnamed| n_08_345_Add_Insurance_on_Contract
    MOD_08_349_Generate_Insurance_offer_preview -->|unnamed| ADD_08_349_Get_Insurance_offer_preview_overrule
    MOD_08_349_Generate_Insurance_offer_preview -->|unnamed| ADD_08_349_Get_Insurance_offer_preview
```

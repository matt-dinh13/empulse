# Contract - Service tab - Cancel service action

```mermaid
graph TD
    MOD_08_095_Cancel_contract_service_manually["{MOD}08.095 Cancel contract service manually"]
    Add_available_services["Add available services"]
    Contract_detail_main_screen["Contract detail main screen"]
    Services["Services"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    Tab_Services["Tab Services"]
    Contract_detail_main_screen -->|unnamed| Tab_Services
    Services -->|unnamed| MOD_08_095_Cancel_contract_service_manually
    Tab_Services -->|unnamed| MOD_01_210_Show_contract_detail
```

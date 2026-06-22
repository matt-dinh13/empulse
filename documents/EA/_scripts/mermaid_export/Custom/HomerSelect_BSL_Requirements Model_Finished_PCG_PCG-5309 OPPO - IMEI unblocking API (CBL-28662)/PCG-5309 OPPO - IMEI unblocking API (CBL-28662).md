# PCG-5309 OPPO - IMEI unblocking API (CBL-28662)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5309 OPPO - IMEI unblocking API (CBL-28662)
- **Diagram ID**: 162153
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    Business_Rules_Business_Rules["Business Rules : Business Rules"]
    ADD_Get_contract_data["{ADD}Get contract data "]
    Requirement_OPPO_Commodity_cancellation["Requirement - OPPO - Commodity cancellation"]
    ADD_Process_contract_supplement_cancelation_notification["{ADD}Process contract supplement cancelation notification"]
    MOD_Process_contract_supplement_creation_notification["{MOD}Process contract supplement creation notification"]
    ADD_Get_contract_data -->|unnamed| ADD_Process_contract_supplement_cancelation_notification
```

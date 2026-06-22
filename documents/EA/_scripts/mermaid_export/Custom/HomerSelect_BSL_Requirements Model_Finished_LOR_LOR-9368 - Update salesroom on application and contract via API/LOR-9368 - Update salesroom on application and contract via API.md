# LOR-9368 - Update salesroom on application and contract via API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9368 - Update salesroom on application and contract via API
- **Diagram ID**: 151711
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    LOR_9385_Save_salesroom_from_EvaluateApplicationRequest_into["LOR-9385 - Save salesroom from EvaluateApplicationRequest into applicable business events"]
    LOR_9371_Update_salesroom_on_application_and_contract_via_AP["LOR-9371 - Update salesroom on application and contract via API"]
    LOR_9368_Update_salesroom_on_application_and_contract_via_AP["LOR-9368 - Update salesroom on application and contract via API"]
    LOR_9371_Update_salesroom_on_application_and_contract_via_AP -->|unnamed| LOR_9368_Update_salesroom_on_application_and_contract_via_AP
    LOR_9385_Save_salesroom_from_EvaluateApplicationRequest_into -->|unnamed| LOR_9368_Update_salesroom_on_application_and_contract_via_AP
```

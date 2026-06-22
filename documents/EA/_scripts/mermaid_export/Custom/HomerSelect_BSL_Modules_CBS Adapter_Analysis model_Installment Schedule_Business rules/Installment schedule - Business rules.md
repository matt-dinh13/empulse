# Installment schedule - Business rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Business rules
- **Diagram ID**: 99016
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Filter_instalment_messages["Filter instalment messages"]
    Get_OBS_contract_identification["Get OBS contract identification"]
    Processing_InstalmentMessageDto["Processing InstalmentMessageDto"]
    Processing_CELInstallmentScheduleRequest["Processing CELInstallmentScheduleRequest"]
    Processing_CELInstallmentScheduleRequest -->|unnamed| Get_OBS_contract_identification
    Processing_InstalmentMessageDto -->|unnamed| Get_OBS_contract_identification
    Processing_InstalmentMessageDto -->|unnamed| Filter_instalment_messages
```

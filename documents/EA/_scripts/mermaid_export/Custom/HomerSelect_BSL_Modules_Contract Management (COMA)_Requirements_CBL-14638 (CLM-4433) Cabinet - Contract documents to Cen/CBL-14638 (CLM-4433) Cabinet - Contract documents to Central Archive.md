# CBL-14638 (CLM-4433) Cabinet - Contract documents to Central Archive

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-14638 (CLM-4433) Cabinet - Contract documents to Central Archive
- **Diagram ID**: 156101
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    ContractChangedEvent_ContractChangedEvent["ContractChangedEvent : ContractChangedEvent"]
    Kafka_Kafka["Kafka : Kafka"]
    CLM_4529_Start_contract_archivation["CLM-4529 Start contract archivation"]
    ContractChangedEvent_ContractChangedEvent -->|unnamed| CLM_4529_Start_contract_archivation
    Kafka_Kafka -->|unnamed| CLM_4529_Start_contract_archivation
```

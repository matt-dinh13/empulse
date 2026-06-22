# Communication system events

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Use case model/Communication system events
- **Diagram ID**: 141884
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    CommunicationRecordChangedEvent_CommunicationRecordChangedEv["CommunicationRecordChangedEvent : CommunicationRecordChangedEvent"]
    MOD_CommunicationRecordChangedSE["{MOD}CommunicationRecordChangedSE"]
    MOD_Process_CommunicationRecordChangedSE(("{MOD}Process CommunicationRecordChangedSE"))
    MOD_Process_CommunicationRecordChangedSE -->|unnamed| CommunicationRecordChangedEvent_CommunicationRecordChangedEv
    MOD_CommunicationRecordChangedSE -->|unnamed| MOD_Process_CommunicationRecordChangedSE
```

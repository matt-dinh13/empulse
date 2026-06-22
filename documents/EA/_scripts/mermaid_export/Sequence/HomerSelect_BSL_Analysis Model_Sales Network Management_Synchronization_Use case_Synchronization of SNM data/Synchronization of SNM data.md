# Synchronization of SNM data

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Use case/Synchronization of SNM data
- **Diagram ID**: 161256
- **Elements**: 4
- **Connectors**: 8

```mermaid
sequenceDiagram
    participant SNM as SNM
    participant HomeSIS as HomeSIS
    participant Time as Time
    participant Kafka as Kafka
    SNM->>+SNM: Update SNM data
    SNM->>+SNM: Process notification
    HomeSIS->>+SNM: Result
    SNM->>+SNM: Update SNM notif queue
    SNM->>+HomeSIS: ProvideSNMDataWS
    Time->>+SNM: Synchronize SN object - job
    Kafka->>+SNM: Notification
    HomeSIS->>+Kafka: Notification
```

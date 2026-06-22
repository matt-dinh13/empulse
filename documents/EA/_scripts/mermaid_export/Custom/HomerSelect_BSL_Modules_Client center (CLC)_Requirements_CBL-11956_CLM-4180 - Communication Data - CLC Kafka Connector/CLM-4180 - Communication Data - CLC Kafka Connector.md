# CLM-4180 - Communication Data - CLC Kafka Connector

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11956/CLM-4180 - Communication Data - CLC Kafka Connector
- **Diagram ID**: 156166
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    CommunicationRecordChangedEvent_CommunicationRecordChangedEv["CommunicationRecordChangedEvent : CommunicationRecordChangedEvent"]
    Time["Time"]
    ADD_Consume_outbox_communication_event["{ADD}Consume outbox communication event"]
    CommunicationRecordChangedEvent_CommunicationRecordChangedEv -->|unnamed| ADD_Consume_outbox_communication_event
    Time -->|unnamed| ADD_Consume_outbox_communication_event
```

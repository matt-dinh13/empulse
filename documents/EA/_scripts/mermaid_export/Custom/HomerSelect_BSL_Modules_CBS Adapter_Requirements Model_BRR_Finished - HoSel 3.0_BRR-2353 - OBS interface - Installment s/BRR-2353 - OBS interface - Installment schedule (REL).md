# BRR-2353 - OBS interface - Installment schedule (REL)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2353 - OBS interface - Installment schedule (REL)
- **Diagram ID**: 63294
- **Elements**: 5
- **Connectors**: 5

```mermaid
graph TD
    Processing_MessageEnvelopeDto["Processing MessageEnvelopeDto
"]
    JMS_messages_REL_Installment_schedule_JMS_messages["JMS messages : REL Installment schedule - JMS messages"]
    Communication_tables_REL_Installment_schedule_Communication_["Communication tables : REL Installment schedule - Communication tables"]
    Processing_InstalmentMessageDto["Processing InstalmentMessageDto"]
    REQ_1_Message_INSTALMENT125["REQ#1 Message INSTALMENT125"]
    Communication_tables_REL_Installment_schedule_Communication_ -->|unnamed| REQ_1_Message_INSTALMENT125
    JMS_messages_REL_Installment_schedule_JMS_messages -->|unnamed| REQ_1_Message_INSTALMENT125
    Processing_MessageEnvelopeDto -->|unnamed| Processing_InstalmentMessageDto
    Processing_MessageEnvelopeDto -->|unnamed| REQ_1_Message_INSTALMENT125
    Processing_InstalmentMessageDto -->|unnamed| REQ_1_Message_INSTALMENT125
```

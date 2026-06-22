# BRR-2358 - OBS interface - Incoming payments (REL)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2358 - OBS interface - Incoming payments (REL)
- **Diagram ID**: 63295
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Processing_PaidInstalmentMessageDto["Processing PaidInstalmentMessageDto"]
    Communication_tables_REL_Payment_Pairing_Communication_table["Communication tables : REL Payment Pairing - Communication tables"]
    JMS_messages_REL_Payment_Pairing_JMS_messages["JMS messages : REL Payment Pairing - JMS messages"]
    REQ_1_INSTALPAY126["REQ#1 INSTALPAY126"]
    REQ_1_INSTALPAY126 -->|unnamed| JMS_messages_REL_Payment_Pairing_JMS_messages
    Communication_tables_REL_Payment_Pairing_Communication_table -->|unnamed| REQ_1_INSTALPAY126
    Processing_PaidInstalmentMessageDto -->|unnamed| REQ_1_INSTALPAY126
```

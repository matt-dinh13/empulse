# Daily ISIR generating for BOOK NG

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model
- **Diagram ID**: 164464
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    Installment_schedule_Generated_JMS_messages_Installment_Sche["Installment schedule : Generated JMS messages - Installment Schedule Info Request"]
    ADD_Generate_data_for_transaction_messages["{ADD}Generate data for transaction messages"]
    ADD_BOOK_NG_Transaction_messages_job["{ADD}BOOK NG Transaction messages job"]
    Time[/"Time"/]
    ADD_03_011_Generate_daily_transaction_messages_for_BOOK_NG(("{ADD}03.011 Generate daily transaction messages for BOOK NG"))
    ADD_03_011_Generate_daily_transaction_messages_for_BOOK_NG -->|unnamed| ADD_Generate_data_for_transaction_messages
    ADD_03_011_Generate_daily_transaction_messages_for_BOOK_NG -->|unnamed| ADD_BOOK_NG_Transaction_messages_job
    Installment_schedule_Generated_JMS_messages_Installment_Sche -->|unnamed| ADD_03_011_Generate_daily_transaction_messages_for_BOOK_NG
    Time --- ADD_03_011_Generate_daily_transaction_messages_for_BOOK_NG
```

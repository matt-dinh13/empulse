# BRR-2203 - OBS interface - Transactions on contracts (CEL)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2203 - OBS interface - Transactions on contracts (CEL)
- **Diagram ID**: 63288
- **Elements**: 7
- **Connectors**: 9

```mermaid
graph TD
    Processing_CELPrincipalAccountTransaction["Processing CELPrincipalAccountTransaction"]
    Processing_CELInsuranceAccountTransaction["Processing CELInsuranceAccountTransaction"]
    Processing_CELFeeAccountTransaction["Processing CELFeeAccountTransaction"]
    Processing_CELAccountTransactionsRequest["Processing CELAccountTransactionsRequest"]
    Communication_tables_Account_Transactions_Communication_tabl["Communication tables : Account Transactions - Communication tables"]
    JMS_messages_Account_Transactions_JMS_messages["JMS messages : Account Transactions - JMS messages"]
    REQ_1_Messages_TRANSAC150_and_ACCOPER156["REQ#1 Messages TRANSAC150 and ACCOPER156 "]
    REQ_1_Messages_TRANSAC150_and_ACCOPER156 -->|unnamed| Communication_tables_Account_Transactions_Communication_tabl
    REQ_1_Messages_TRANSAC150_and_ACCOPER156 -->|unnamed| JMS_messages_Account_Transactions_JMS_messages
    Processing_CELAccountTransactionsRequest -->|unnamed| Processing_CELPrincipalAccountTransaction
    Processing_CELPrincipalAccountTransaction -->|unnamed| REQ_1_Messages_TRANSAC150_and_ACCOPER156
    Processing_CELAccountTransactionsRequest -->|unnamed| Processing_CELInsuranceAccountTransaction
    Processing_CELAccountTransactionsRequest -->|unnamed| Processing_CELFeeAccountTransaction
    Processing_CELAccountTransactionsRequest -->|unnamed| REQ_1_Messages_TRANSAC150_and_ACCOPER156
    Processing_CELFeeAccountTransaction -->|unnamed| REQ_1_Messages_TRANSAC150_and_ACCOPER156
    Processing_CELInsuranceAccountTransaction -->|unnamed| REQ_1_Messages_TRANSAC150_and_ACCOPER156
```

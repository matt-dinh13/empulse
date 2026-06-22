# Process TransactionMessageDto 

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Use case Model
- **Diagram ID**: 142888
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph LR
    CaBus_AM[/"CaBus-AM"/]
    Generate_outgoing_payment_for_repeated_disbursement["Generate outgoing payment for repeated disbursement"]
    MOD_Saving_of_Payment_Channels["{MOD}Saving of Payment Channels"]
    REL_Account_transactions_Consumed_JMS_messages_REL_Account_t["REL Account transactions : Consumed JMS messages - REL Account transactions"]
    BSL[/"BSL"/]
    n_05_700_Process_TransactionMessageDto(("05.700 Process TransactionMessageDto "))
    MOD_05_240_Cancel_outgoing_payments(("{MOD}05.240 Cancel outgoing payments"))
    n_05_700_Process_TransactionMessageDto -.->|include| MOD_05_240_Cancel_outgoing_payments
    n_05_700_Process_TransactionMessageDto -->|unnamed| REL_Account_transactions_Consumed_JMS_messages_REL_Account_t
    n_05_700_Process_TransactionMessageDto -->|unnamed| MOD_Saving_of_Payment_Channels
    n_05_700_Process_TransactionMessageDto -->|unnamed| Generate_outgoing_payment_for_repeated_disbursement
    BSL --> n_05_700_Process_TransactionMessageDto
    CaBus_AM --> n_05_700_Process_TransactionMessageDto
```

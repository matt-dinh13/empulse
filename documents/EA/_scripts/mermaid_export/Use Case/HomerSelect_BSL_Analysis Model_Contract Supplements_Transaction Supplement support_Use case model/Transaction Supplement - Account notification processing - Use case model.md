# Transaction Supplement - Account notification processing - Use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model
- **Diagram ID**: 164670
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    ADD_13_128_Process_transaction_confirmation_response(("{ADD}13.128 Process transaction confirmation response"))
    Change_status_of_Contract_Supplement["Change status of Contract Supplement"]
    CaBus_AM[/"CaBus-AM"/]
    n_13_300_Process_AM_EventInfo_notification(("13.300 Process AM EventInfo notification"))
    n_13_300_Process_AM_EventInfo_notification -->|unnamed| Change_status_of_Contract_Supplement
    CaBus_AM --> n_13_300_Process_AM_EventInfo_notification
    ADD_13_128_Process_transaction_confirmation_response --- CaBus_AM
```

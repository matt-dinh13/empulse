# Processing disbursement confirmation message

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Use Case Model
- **Diagram ID**: 164109
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph LR
    External_system[/"External system"/]
    Outgoing_Payments_Disbursement_result_messages["Outgoing Payments :Disbursement result messages"]
    CaBus_AM[/"CaBus-AM"/]
    OutgoingPayments_Disbursement_confirmation_request["OutgoingPayments :Disbursement confirmation request"]
    Core_Banking_System[/"Core Banking System"/]
    MOD_05_350_Process_disbursement_confirmation_message(("{MOD}05.350 Process disbursement confirmation message"))
    OutgoingPayments_Disbursement_confirmation_request -->|unnamed| MOD_05_350_Process_disbursement_confirmation_message
    MOD_05_350_Process_disbursement_confirmation_message -->|unnamed| Outgoing_Payments_Disbursement_result_messages
    External_system --> MOD_05_350_Process_disbursement_confirmation_message
    Core_Banking_System --> MOD_05_350_Process_disbursement_confirmation_message
    CaBus_AM --> MOD_05_350_Process_disbursement_confirmation_message
```

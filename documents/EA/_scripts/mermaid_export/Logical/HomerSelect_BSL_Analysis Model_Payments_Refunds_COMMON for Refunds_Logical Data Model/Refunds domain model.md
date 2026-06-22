# Refunds domain model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/COMMON for Refunds/Logical Data Model
- **Diagram ID**: 162953
- **Elements**: 15
- **Connectors**: 17

```mermaid
classDiagram
    class Bank_Branch["Bank Branch"]
    class Request_bank_account["Request bank account"]
    class Verification_Status["Verification Status"]
    class Refund_disbursement_method_change_request["Refund disbursement method change request"]
    class RefundSourceSystemType["RefundSourceSystemType"]
    class Legend["Legend"]
    class MOD_Contract["{MOD}Contract"]
    class Refund_Type["Refund Type"]
    class Refund_Recipient_Type["Refund Recipient Type"]
    class Refund_Status_Type["Refund Status Type"]
    class Refund_Status_Transition["Refund Status Transition"]
    class Refund_Order["Refund Order"]
    class Refund_Item["Refund Item"]
    class Incoming_Payment["Incoming Payment"]
    class Outgoing_Payment["Outgoing Payment"]
    Refund_Item ..> MOD_Contract : unnamed
    Refund_disbursement_method_change_request --> MOD_Contract : unnamed
    Refund_disbursement_method_change_request --> Verification_Status : unnamed
    Refund_disbursement_method_change_request ..> Request_bank_account : unnamed
    Refund_Status_Transition --> Refund_Status_Type : unnamed
    Refund_Item o-- Refund_Status_Transition : unnamed
    Refund_Order --> Outgoing_Payment : unnamed
    Refund_Item --> Refund_Recipient_Type : unnamed
    Request_bank_account ..> Bank_Branch : unnamed
    Refund_Order o-- Refund_Item : unnamed
    Refund_Item --> Incoming_Payment : unnamed
    Refund_Item ..> Refund_Status_Type : unnamed
    Refund_Item ..> RefundSourceSystemType : unnamed
    Outgoing_Payment --> Outgoing_Payment : unnamed
    Refund_Item --> Refund_Type : unnamed
    Incoming_Payment --> Incoming_Payment : Original payment ID
    Incoming_Payment --> Incoming_Payment : Parent Payment ID
```

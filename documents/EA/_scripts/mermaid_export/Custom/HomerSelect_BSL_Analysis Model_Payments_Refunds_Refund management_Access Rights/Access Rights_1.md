# Access Rights

```mermaid
graph TD
    MOD_05_097_Generate_outgoing_payment_for_refund["{MOD}05.097 Generate outgoing payment for refund"]
    n_05_097_Generate_outgoing_payment_for_refund["05.097 Generate outgoing payment for refund"]
    n_05_516_Cancel_unpaid_outgoing_payment_for_refund["05.516 Cancel unpaid outgoing payment for refund"]
    n_05_515_Generate_outgoing_payment_for_refund_items["05.515 Generate outgoing payment for refund items"]
    n_05_513_Process_outgoing_payment_for_refund_items["05.513 Process outgoing payment for refund items"]
    n_05_512_Show_contract_refund_items["05.512 Show contract refund items"]
    n_05_514_Cancel_refund_item["05.514 Cancel refund item"]
    n_05_511_Browse_refund_items["05.511 Browse refund items"]
    n_05_516_Cancel_unpaid_outgoing_payment_for_refund["05.516 Cancel unpaid outgoing payment for refund"]
    n_05_515_Generate_outgoing_payment_for_refund_items["05.515 Generate outgoing payment for refund items"]
    n_05_513_Process_outgoing_payment_for_refund_items["05.513 Process outgoing payment for refund items"]
    n_05_512_Show_contract_refund_items["05.512 Show contract refund items"]
    n_05_514_Cancel_refund_item["05.514 Cancel refund item"]
    n_05_511_Browse_refund_items["05.511 Browse refund items"]
    n_05_514_Cancel_refund_item -->|unnamed| n_05_514_Cancel_refund_item
    MOD_05_097_Generate_outgoing_payment_for_refund -->|unnamed| n_05_097_Generate_outgoing_payment_for_refund
    n_05_515_Generate_outgoing_payment_for_refund_items -->|unnamed| MOD_05_097_Generate_outgoing_payment_for_refund
    n_05_515_Generate_outgoing_payment_for_refund_items -->|unnamed| n_05_515_Generate_outgoing_payment_for_refund_items
    n_05_516_Cancel_unpaid_outgoing_payment_for_refund -->|unnamed| n_05_516_Cancel_unpaid_outgoing_payment_for_refund
    n_05_512_Show_contract_refund_items -->|unnamed| n_05_512_Show_contract_refund_items
    n_05_513_Process_outgoing_payment_for_refund_items -->|unnamed| n_05_513_Process_outgoing_payment_for_refund_items
    n_05_511_Browse_refund_items -->|unnamed| n_05_511_Browse_refund_items
```

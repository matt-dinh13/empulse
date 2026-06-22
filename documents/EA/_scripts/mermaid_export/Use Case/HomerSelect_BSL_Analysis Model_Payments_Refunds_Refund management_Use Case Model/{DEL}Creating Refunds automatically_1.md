# {DEL}Creating Refunds automatically

```mermaid
graph TD
    BSL["BSL"]
    MOD_05_097_Generate_outgoing_payment_for_refund["{MOD}05.097 Generate outgoing payment for refund"]
    n_05_182_Pair_payment_with_contract["05.182 Pair payment with contract"]
    MOD_05_180_Perform_coupling_payments_with_instalments["{MOD}05.180 Perform coupling payments with instalments"]
    MOD_05_200_Perform_decoupling["{MOD}05.200 Perform decoupling"]
    ALG_Divide_incoming_payment["ALG_Divide incoming payment"]
    n_05_045_Cancel_incoming_payment["05.045 Cancel incoming payment"]
    DEL_05_500_Create_refund_automatically["{DEL} 05.500 Create refund automatically"]
    Create_refund_order_rule["Create refund order rule"]
    Get_recipient_bank_account_for_refunds_IN["Get recipient bank account for refunds - IN"]
    Get_recipient_bank_account_for_refunds["Get recipient bank account for refunds"]
    MOD_Create_refund_item_rule["{MOD}Create refund item rule"]
    DEL_05_500_Create_refund_automatically -->|unnamed| n_05_045_Cancel_incoming_payment
    DEL_05_500_Create_refund_automatically -->|unnamed| ALG_Divide_incoming_payment
    n_05_045_Cancel_incoming_payment -->|unnamed| MOD_05_200_Perform_decoupling
    MOD_05_180_Perform_coupling_payments_with_instalments -->|unnamed| MOD_05_200_Perform_decoupling
    DEL_05_500_Create_refund_automatically -->|unnamed| MOD_05_180_Perform_coupling_payments_with_instalments
    DEL_05_500_Create_refund_automatically -->|unnamed| n_05_182_Pair_payment_with_contract
    DEL_05_500_Create_refund_automatically -->|unnamed| MOD_05_097_Generate_outgoing_payment_for_refund
    BSL -->|unnamed| DEL_05_500_Create_refund_automatically
    Get_recipient_bank_account_for_refunds_IN -->|unnamed| Get_recipient_bank_account_for_refunds
```

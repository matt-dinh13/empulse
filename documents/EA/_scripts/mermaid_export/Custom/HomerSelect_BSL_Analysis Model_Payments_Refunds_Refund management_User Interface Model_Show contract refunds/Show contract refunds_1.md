# Show contract refunds

```mermaid
graph TD
    ADD_Created_By["{ADD}Created By"]
    ADD_Fee_amount["{ADD}Fee amount"]
    ADD_Verification_status["{ADD}Verification status"]
    No["No"]
    Yes["Yes"]
    Do_you_really_want_to_cancel_selected_refund_item["Do you really want to cancel selected refund item?"]
    Cancel_refund_item["Cancel refund item"]
    n_05_514_Cancel_refund_item["05.514 Cancel refund item"]
    Process_outgoing_payment_for_refund_items["Process outgoing payment for refund items"]
    Incoming_payment_detail["Incoming payment detail"]
    Process_outgoing_payment_for_refund_items["Process outgoing payment for refund items"]
    n_05_513_Process_outgoing_payment_for_refund_items["05.513 Process outgoing payment for refund items"]
    Browse_refund_items["Browse refund items"]
    n_01_663_Edit_refunds_disbursement_channel["01.663 Edit refunds disbursement channel"]
    Contract_refunds["Contract refunds"]
    Last_changed_on["Last changed on"]
    Last_changed_by["Last changed by"]
    Payment_channel["Payment channel"]
    n_05_512_Show_contract_refund_items["05.512 Show contract refund items"]
    Process_outgoing_payment["Process outgoing payment"]
    Edit_disbursement_method["Edit disbursement method"]
    Show_contract_refunds_buttons["Show contract refunds buttons"]
    Remaining["Remaining"]
    Already_refunded["Already refunded"]
    Total_to_refund["Total to refund"]
    Client_full_name["Client full name"]
    Contract_number["Contract number"]
    Show_contract_refund_items["Show contract refund items"]
    n_05_050_Show_incoming_payment_detail["05.050 Show incoming payment detail"]
    Browse_refund_items -->|unnamed| Show_contract_refund_items
    Show_contract_refund_items -->|unnamed| n_05_512_Show_contract_refund_items
    Edit_disbursement_method -->|unnamed| n_01_663_Edit_refunds_disbursement_channel
    Process_outgoing_payment -->|unnamed| n_05_513_Process_outgoing_payment_for_refund_items
    Contract_refunds -->|unnamed| n_05_513_Process_outgoing_payment_for_refund_items
    Process_outgoing_payment -->|unnamed| Process_outgoing_payment_for_refund_items
    Contract_refunds -->|unnamed| Incoming_payment_detail
    Contract_refunds -->|unnamed| Process_outgoing_payment_for_refund_items
    Contract_refunds -->|unnamed| n_05_514_Cancel_refund_item
    Contract_refunds -->|unnamed| Cancel_refund_item
```

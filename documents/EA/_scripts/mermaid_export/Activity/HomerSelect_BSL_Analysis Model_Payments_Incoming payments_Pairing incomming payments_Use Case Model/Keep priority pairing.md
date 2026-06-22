# Keep priority pairing

- **Diagram Type**: Activity
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model
- **Diagram ID**: 161904
- **Elements**: 28
- **Connectors**: 35

```mermaid
flowchart TD
    Call_Pair_Installment_Part_alternate_with_parameter_settled_["Call Pair Installment Part alternate with parameter: settled amount = MONEY"]
    All_incoming_payments_are_paired_with_the_contract_installme(( ))
    Call_Pair_Installment_Part_alternate_with_parameter_settled_["Call Pair Installment Part alternate with parameter: settled amount"]
    Get_all_unpaid_Installment_Parts_of_the_contract_and_sorts_t["Get all unpaid Installment Parts of the contract and sorts them to pairing "]
    Installment_Parts_collection["Installment Parts collection"]
    Find_all_active_installment_parts["Find all active installment parts"]
    Does_an_unpaired_partially_paired_installment_part_exist_bef{"Does an unpaired/partially paired installment part exist before the first paired installment?"}
    Payment_to_Pairing_collection["Payment to Pairing collection"]
    node_1854311["Text"]
    Does_an_installment_exist{"Does an installment exist?"}
    Does_an_unpaired_payment_exist{"Does an unpaired payment exist?"}
    node_1854312["Text"]
    Create_overpayment_by_03_080_Add_installment["Create overpayment by 03.080 Add installment"]
    Is_MONEY_0_no_next_installment_parts_to_pair{"Is MONEY › 0 ? (no next installment parts to pair) "}
    Set_MONEY_MONEY_settled_amount["Set MONEY = MONEY – settled amount"]
    Compute_settled_amount_of_Installment_Part_as_settled_amount["Compute settled amount of Installment Part as settled amount = MIN (money, InstallmentPart.Amount – InstallmentPart.AmountPaid)."]
    For_each_not_fully_paired_Installment_Part_in_the_Installmen["For each not fully paired Installment Part in the Installment Parts To Pairing where currency is same as payment currency"]
    node_1854300["Note"]
    Set_MONEY_the_incoming_payment_amount["Set MONEY = the incoming payment amount"]
    For_each_payment_to_be_recoupled_taken_from_the_oldest_one["For each payment to be recoupled taken from the oldest one"]
    node_1854308["Text"]
    node_1854315["Text"]
    Find_all_active_payments_related_to_the_provided_contract["Find all active payments related to the provided contract"]
    Sort_payments_to_be_recoupled_by_deposit_date_ascendantly["Sort payments to be recoupled by deposit date ascendantly"]
    Get_all_active_not_paired_or_partially_paired_payments_relat["Get all active not paired, or partially paired payments related to the provided contract"]
    Are_the_payments_paired_chronologically{"Are the payments paired chronologically?"}
    n_05_200_Perform_decoupling_not_chronologically_paired_payme["05.200 Perform decoupling not chronologically paired payments "]
    Pairing_start(( ))
    Does_an_unpaired_partially_paired_installment_part_exist_bef -->|YES| n_05_200_Perform_decoupling_not_chronologically_paired_payme
    Does_an_unpaired_payment_exist -->|NO| All_incoming_payments_are_paired_with_the_contract_installme
    Does_an_unpaired_payment_exist -->|YES| For_each_payment_to_be_recoupled_taken_from_the_oldest_one
    Does_an_installment_exist -->|NO| Create_overpayment_by_03_080_Add_installment
    Does_an_installment_exist -->|YES| For_each_not_fully_paired_Installment_Part_in_the_Installmen
    node_1854311 -->|unnamed| For_each_payment_to_be_recoupled_taken_from_the_oldest_one
    Payment_to_Pairing_collection -->|create| Get_all_active_not_paired_or_partially_paired_payments_relat
    Call_Pair_Installment_Part_alternate_with_parameter_settled_ -->|unnamed| Does_an_unpaired_payment_exist
    Payment_to_Pairing_collection -->|sort| Sort_payments_to_be_recoupled_by_deposit_date_ascendantly
    Is_MONEY_0_no_next_installment_parts_to_pair -->|YES| Does_an_installment_exist
    Does_an_unpaired_partially_paired_installment_part_exist_bef -->|NO| Get_all_active_not_paired_or_partially_paired_payments_relat
    Find_all_active_installment_parts -->|unnamed| Does_an_unpaired_partially_paired_installment_part_exist_bef
    Installment_Parts_collection -->|take the first| For_each_not_fully_paired_Installment_Part_in_the_Installmen
    Installment_Parts_collection -->|create + sort| Get_all_unpaid_Installment_Parts_of_the_contract_and_sorts_t
    Get_all_unpaid_Installment_Parts_of_the_contract_and_sorts_t -->|unnamed| Set_MONEY_the_incoming_payment_amount
    Call_Pair_Installment_Part_alternate_with_parameter_settled_ -->|unnamed| Set_MONEY_MONEY_settled_amount
    Payment_to_Pairing_collection -->|take the first| For_each_payment_to_be_recoupled_taken_from_the_oldest_one
    For_each_payment_to_be_recoupled_taken_from_the_oldest_one -->|unnamed| Get_all_unpaid_Installment_Parts_of_the_contract_and_sorts_t
    n_05_200_Perform_decoupling_not_chronologically_paired_payme -->|unnamed| Get_all_active_not_paired_or_partially_paired_payments_relat
    Are_the_payments_paired_chronologically -->|NO| n_05_200_Perform_decoupling_not_chronologically_paired_payme
    Are_the_payments_paired_chronologically -->|YES| Find_all_active_installment_parts
    Get_all_active_not_paired_or_partially_paired_payments_relat -->|unnamed| Sort_payments_to_be_recoupled_by_deposit_date_ascendantly
    Sort_payments_to_be_recoupled_by_deposit_date_ascendantly -->|unnamed| For_each_payment_to_be_recoupled_taken_from_the_oldest_one
    Find_all_active_payments_related_to_the_provided_contract -->|unnamed| Are_the_payments_paired_chronologically
    node_1854312 -->|unnamed| Is_MONEY_0_no_next_installment_parts_to_pair
    node_1854308 -->|unnamed| Sort_payments_to_be_recoupled_by_deposit_date_ascendantly
    Create_overpayment_by_03_080_Add_installment -->|unnamed| Call_Pair_Installment_Part_alternate_with_parameter_settled_
    Set_MONEY_the_incoming_payment_amount -->|unnamed| For_each_not_fully_paired_Installment_Part_in_the_Installmen
    node_1854300 -->|unnamed| Set_MONEY_the_incoming_payment_amount
    For_each_not_fully_paired_Installment_Part_in_the_Installmen -->|unnamed| Compute_settled_amount_of_Installment_Part_as_settled_amount
    Compute_settled_amount_of_Installment_Part_as_settled_amount -->|unnamed| Call_Pair_Installment_Part_alternate_with_parameter_settled_
    Set_MONEY_MONEY_settled_amount -->|unnamed| Is_MONEY_0_no_next_installment_parts_to_pair
    Is_MONEY_0_no_next_installment_parts_to_pair -->|NO| Does_an_unpaired_payment_exist
    Pairing_start -->|unnamed| Find_all_active_payments_related_to_the_provided_contract
    node_1854315 -->|unnamed| Find_all_active_payments_related_to_the_provided_contract
```

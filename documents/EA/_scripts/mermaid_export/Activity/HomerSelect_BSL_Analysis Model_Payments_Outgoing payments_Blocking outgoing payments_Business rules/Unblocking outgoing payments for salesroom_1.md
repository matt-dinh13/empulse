# Unblocking outgoing payments for salesroom

```mermaid
graph TD
    ActivityFinal["ActivityFinal"]
    Set_isBlocked_to_false_for_the_remaining_outgoing_payments["Set isBlocked to 'false' for the remaining outgoing payments. "]
    Exclude_outgoing_payments_which_were_generated_for_contracts["Exclude outgoing payments which were generated for contracts with blocked payments"]
    Exclude_outgoing_payments_related_to_contract_with_blocked_s["Exclude outgoing payments related to contract with blocked salesroom"]
    el_1676481["MergeNode"]
    Find_blocked_outgoing_payments_which_were_generated_for_foun["Find blocked outgoing payments which were generated for found conrtacts and supplements"]
    Find_all_contracts_and_supplements_which_were_originated_on_["Find all contracts and supplements which were originated on processed salesroom"]
    Find_blocked_outgoing_payments_related_to_the_salesroom_via_["Find blocked outgoing payments related to the salesroom via payment channel"]
    Does_salesroom_represent_insurance_company["Does salesroom represent insurance company?"]
    Load_salesroom["Load salesroom"]
    Activity_start["Activity start"]
    Unblocking_outgoing_payments_for_salesroom["Unblocking outgoing payments for salesroom"]
    Unblocking_outgoing_payments_for_salesroom["Unblocking outgoing payments for salesroom"]
    Unblocking_outgoing_payments_for_salesroom -->|unnamed| Unblocking_outgoing_payments_for_salesroom
    Activity_start -->|unnamed| Load_salesroom
    Load_salesroom -->|unnamed| Does_salesroom_represent_insurance_company
    Does_salesroom_represent_insurance_company -->|Yes| Find_blocked_outgoing_payments_related_to_the_salesroom_via_
    Does_salesroom_represent_insurance_company -->|No| Find_all_contracts_and_supplements_which_were_originated_on_
    Find_all_contracts_and_supplements_which_were_originated_on_ -->|unnamed| Find_blocked_outgoing_payments_which_were_generated_for_foun
    Exclude_outgoing_payments_related_to_contract_with_blocked_s -->|unnamed| el_1676481
    Find_blocked_outgoing_payments_which_were_generated_for_foun -->|unnamed| el_1676481
    Find_blocked_outgoing_payments_related_to_the_salesroom_via_ -->|unnamed| Exclude_outgoing_payments_related_to_contract_with_blocked_s
    el_1676481 -->|unnamed| Exclude_outgoing_payments_which_were_generated_for_contracts
    Exclude_outgoing_payments_which_were_generated_for_contracts -->|unnamed| Set_isBlocked_to_false_for_the_remaining_outgoing_payments
    Set_isBlocked_to_false_for_the_remaining_outgoing_payments -->|unnamed| ActivityFinal
```

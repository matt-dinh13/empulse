# Blocking outgoing payments for salesroom

- **Diagram Type**: Activity
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules
- **Diagram ID**: 143424
- **Elements**: 10
- **Connectors**: 9

```mermaid
flowchart TD
    ActivityFinal(( ))
    Set_isBlocked_to_true_for_the_found_outgoing_payments["Set isBlocked to 'true' for the found outgoing payments. "]
    node_1676479{"MergeNode"}
    Find_unpaid_outgoing_payments_which_were_generated_for_contr["Find unpaid outgoing payments which were generated for contracts or supplements originated on the processed salesroom"]
    Load_salesroom["Load salesroom"]
    Find_unpaid_outgoing_payments_related_to_the_salesroom_via_p["Find unpaid outgoing payments related to the salesroom via payment channel"]
    Does_salesroom_represent_insurance_company{"Does salesroom represent insurance company?"}
    Activity_start(( ))
    Blocking_outgoing_payments_for_salesroom["Blocking outgoing payments for salesroom"]
    Blocking_outgoing_payments_for_salesroom["Blocking outgoing payments for salesroom"]
    Blocking_outgoing_payments_for_salesroom -->|unnamed| Blocking_outgoing_payments_for_salesroom
    Load_salesroom -->|unnamed| Does_salesroom_represent_insurance_company
    Does_salesroom_represent_insurance_company -->|Yes| Find_unpaid_outgoing_payments_related_to_the_salesroom_via_p
    Activity_start -->|unnamed| Load_salesroom
    Does_salesroom_represent_insurance_company -->|No| Find_unpaid_outgoing_payments_which_were_generated_for_contr
    Find_unpaid_outgoing_payments_which_were_generated_for_contr -->|unnamed| node_1676479
    Find_unpaid_outgoing_payments_related_to_the_salesroom_via_p -->|unnamed| node_1676479
    node_1676479 -->|unnamed| Set_isBlocked_to_true_for_the_found_outgoing_payments
    Set_isBlocked_to_true_for_the_found_outgoing_payments -->|unnamed| ActivityFinal
```

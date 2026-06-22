# Business rules

```mermaid
graph TD
    Business_rules_Blocking_outgoing_payments_for_salesroom["Business rules :Blocking outgoing payments for salesroom"]
    Business_rules_Allow_outgoing_payments_for_salesroom["Business rules :Allow outgoing payments for salesroom"]
    Blocking_outgoing_payments_for_contract["Blocking outgoing payments for contract"]
    Unblocking_outgoing_payments_for_contract["Unblocking outgoing payments for contract"]
    Blocking_outgoing_payments_for_salesroom["Blocking outgoing payments for salesroom"]
    Unblocking_outgoing_payments_for_salesroom["Unblocking outgoing payments for salesroom"]
    Unblocking_outgoing_payments_for_salesroom -->|unnamed| Business_rules_Allow_outgoing_payments_for_salesroom
    Blocking_outgoing_payments_for_salesroom -->|unnamed| Business_rules_Blocking_outgoing_payments_for_salesroom
```

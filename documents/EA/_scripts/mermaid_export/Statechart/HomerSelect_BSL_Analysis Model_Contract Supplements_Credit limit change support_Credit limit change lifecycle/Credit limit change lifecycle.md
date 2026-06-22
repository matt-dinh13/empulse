# Credit limit change lifecycle

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Credit limit change lifecycle
- **Diagram ID**: 162641
- **Elements**: 14
- **Connectors**: 22

```mermaid
stateDiagram-v2
    state "13.070 Process credit limit change request" as n_13_070_Process_credit_limit_change_request
    state "13.450 Process supplement approval result" as n_13_450_Process_supplement_approval_result
    state "13.052 Process account notification for credit limit change" as n_13_052_Process_account_notification_for_credit_limit_chang
    state "unnamed" as s_1861694
    state "unnamed" as s_1861699
    state "unnamed" as s_1861697
    state "unnamed" as s_1861693
    state "REJECTED" as REJECTED
    state "ACCEPTED" as ACCEPTED
    state "Final" as Final
    state "CANCELED" as CANCELED
    state "APPROVED" as APPROVED
    state "IN PROCESS" as IN_PROCESS
    state "Initial" as Initial
    s_1861697 --> APPROVED : unnamed
    s_1861697 --> REJECTED : unnamed
    APPROVED --> REJECTED : unnamed
    s_1861699 --> ACCEPTED : unnamed
    APPROVED --> ACCEPTED : unnamed
    CANCELED --> Final : unnamed
    REJECTED --> Final : unnamed
    ACCEPTED --> Final : unnamed
    APPROVED --> CANCELED : unnamed
    IN_PROCESS --> REJECTED : unnamed
    IN_PROCESS --> APPROVED : unnamed
    IN_PROCESS --> n_13_070_Process_credit_limit_change_request : unnamed
    s_1861694 --> APPROVED : unnamed
    Initial --> IN_PROCESS : unnamed
    s_1861693 --> IN_PROCESS : unnamed
    REJECTED --> n_13_052_Process_account_notification_for_credit_limit_chang : unnamed
    ACCEPTED --> n_13_052_Process_account_notification_for_credit_limit_chang : unnamed
    CANCELED --> n_13_052_Process_account_notification_for_credit_limit_chang : unnamed
    REJECTED --> n_13_450_Process_supplement_approval_result : unnamed
    APPROVED --> n_13_450_Process_supplement_approval_result : unnamed
    CANCELED --> n_13_450_Process_supplement_approval_result : unnamed
    IN_PROCESS --> CANCELED : unnamed
```

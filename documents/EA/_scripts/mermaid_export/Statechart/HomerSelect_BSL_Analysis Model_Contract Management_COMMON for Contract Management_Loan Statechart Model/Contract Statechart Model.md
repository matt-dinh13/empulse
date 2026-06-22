# Contract Statechart Model

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model
- **Diagram ID**: 141200
- **Elements**: 13
- **Connectors**: 25

```mermaid
stateDiagram-v2
    state "Sold (Q)" as Sold_Q
    state "In Pre-process (P)" as In_Pre_process_P
    state "Final" as Final
    state "Finished (K)" as Finished_K
    state "Written off (H)" as Written_off_H
    state "Paid off (L)" as Paid_off_L
    state "Active (A)" as Active_A
    state "Signed (N)" as Signed_N
    state "Cancelled (T)" as Cancelled_T
    state "Rejected (D)" as Rejected_D
    state "Approved (S)" as Approved_S
    state "Initial" as Initial
    state "In Process (R)" as In_Process_R
    Approved_S --> Signed_N : unnamed
    Initial --> In_Pre_process_P : unnamed
    Finished_K --> Final : unnamed
    Written_off_H --> Final : unnamed
    Rejected_D --> Final : unnamed
    Cancelled_T --> Final : unnamed
    Sold_Q --> Final : unnamed
    Active_A --> Finished_K : unnamed
    Paid_off_L --> Finished_K : unnamed
    Paid_off_L --> Written_off_H : unnamed
    Signed_N --> Paid_off_L : unnamed
    Paid_off_L --> Sold_Q : unnamed
    Signed_N --> Active_A : unnamed
    In_Pre_process_P --> In_Process_R : unnamed
    In_Pre_process_P --> Cancelled_T : unnamed
    Paid_off_L --> Cancelled_T : unnamed
    Signed_N --> Cancelled_T : unnamed
    Approved_S --> Cancelled_T : unnamed
    In_Process_R --> Cancelled_T : unnamed
    Active_A --> Cancelled_T : unnamed
    In_Process_R --> Rejected_D : unnamed
    In_Pre_process_P --> Rejected_D : unnamed
    In_Process_R --> Approved_S : unnamed
    Initial --> In_Process_R : unnamed
    Active_A --> Paid_off_L : unnamed
```

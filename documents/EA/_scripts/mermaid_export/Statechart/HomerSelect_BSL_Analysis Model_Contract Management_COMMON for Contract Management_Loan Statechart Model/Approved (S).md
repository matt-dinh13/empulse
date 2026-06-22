# Approved (S)

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model
- **Diagram ID**: 141203
- **Elements**: 4
- **Connectors**: 3

```mermaid
stateDiagram-v2
    state "PS (Prepared for sign)" as PS_Prepared_for_sign
    state "NPS (Not prepared for sign)" as NPS_Not_prepared_for_sign
    state "Leave status 'Approved'" as Leave_status_Approved
    state "Enter status 'Approved'" as Enter_status_Approved
    PS_Prepared_for_sign --> Leave_status_Approved : unnamed
    Enter_status_Approved --> NPS_Not_prepared_for_sign : unnamed
    NPS_Not_prepared_for_sign --> PS_Prepared_for_sign : unnamed
```

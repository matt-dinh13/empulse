# In Process (R)

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model
- **Diagram ID**: 141202
- **Elements**: 9
- **Connectors**: 20

```mermaid
stateDiagram-v2
    state "RLWO - LAP waiting after offers" as RLWO_LAP_waiting_after_offers
    state "ROG - Offers generated" as ROG_Offers_generated
    state "RLF - LAP failed" as RLF_LAP_failed
    state "RLW - LAP waiting" as RLW_LAP_waiting
    state "RCI - CIF identified" as RCI_CIF_identified
    state "RCM - CIF manual" as RCM_CIF_manual
    state "RCW - CIF waiting" as RCW_CIF_waiting
    state "Leave status 'In process'" as Leave_status_In_process
    state "Enter status 'In process'" as Enter_status_In_process
    RLWO_LAP_waiting_after_offers --> Leave_status_In_process : unnamed
    RLW_LAP_waiting --> ROG_Offers_generated : unnamed
    RLWO_LAP_waiting_after_offers --> RLF_LAP_failed : unnamed
    RLW_LAP_waiting --> RLF_LAP_failed : unnamed
    Enter_status_In_process --> RLW_LAP_waiting : unnamed
    RCI_CIF_identified --> RLW_LAP_waiting : unnamed
    RCM_CIF_manual --> RCI_CIF_identified : unnamed
    RCW_CIF_waiting --> RCI_CIF_identified : unnamed
    ROG_Offers_generated --> RLWO_LAP_waiting_after_offers : unnamed
    Enter_status_In_process --> RCW_CIF_waiting : unnamed
    RCW_CIF_waiting --> Leave_status_In_process : unnamed
    RLWO_LAP_waiting_after_offers --> Leave_status_In_process : unnamed
    ROG_Offers_generated --> Leave_status_In_process : unnamed
    ROG_Offers_generated --> Leave_status_In_process : unnamed
    RLF_LAP_failed --> Leave_status_In_process : unnamed
    RLW_LAP_waiting --> Leave_status_In_process : unnamed
    RLW_LAP_waiting --> Leave_status_In_process : unnamed
    RCM_CIF_manual --> Leave_status_In_process : unnamed
    RCW_CIF_waiting --> Leave_status_In_process : unnamed
    RCW_CIF_waiting --> RCM_CIF_manual : unnamed
```

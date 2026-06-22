# In Pre-process (P)

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Loan Statechart Model
- **Diagram ID**: 141201
- **Elements**: 12
- **Connectors**: 27

```mermaid
stateDiagram-v2
    state "ACL Approved with Cross-sell limits" as ACL_Approved_with_Cross_sell_limits
    state "CF Client draft" as CF_Client_draft
    state "PDRAFT - Draft" as PDRAFT_Draft
    state "POG - Offers generated" as POG_Offers_generated
    state "PLF - LAP failed" as PLF_LAP_failed
    state "PLW - LAP waiting" as PLW_LAP_waiting
    state "PCI - CIF identified" as PCI_CIF_identified
    state "PCM - CIF manual" as PCM_CIF_manual
    state "PCW - CIF waiting" as PCW_CIF_waiting
    state "Leave status 'In pre-process'" as Leave_status_In_pre_process
    state "Enter status 'In pre-process'" as Enter_status_In_pre_process
    state "In Pre-process (P)" as In_Pre_process_P
    Enter_status_In_pre_process --> PCW_CIF_waiting : unnamed
    PLW_LAP_waiting --> ACL_Approved_with_Cross_sell_limits : unnamed
    PLW_LAP_waiting --> CF_Client_draft : unnamed
    ACL_Approved_with_Cross_sell_limits --> CF_Client_draft : If cross-sell limit expired and the choosen offer doesn't exist
    ACL_Approved_with_Cross_sell_limits --> PDRAFT_Draft : unnamed
    POG_Offers_generated --> PDRAFT_Draft : unnamed
    CF_Client_draft --> PDRAFT_Draft : unnamed
    PLW_LAP_waiting --> PDRAFT_Draft : unnamed
    PLW_LAP_waiting --> POG_Offers_generated : unnamed
    PLW_LAP_waiting --> PLF_LAP_failed : unnamed
    PCI_CIF_identified --> PLW_LAP_waiting : unnamed
    PCW_CIF_waiting --> PCI_CIF_identified : unnamed
    POG_Offers_generated --> ACL_Approved_with_Cross_sell_limits : unnamed
    PCW_CIF_waiting --> PCM_CIF_manual : unnamed
    PCW_CIF_waiting --> Leave_status_In_pre_process : unnamed
    PLW_LAP_waiting --> Leave_status_In_pre_process : unnamed
    CF_Client_draft --> Leave_status_In_pre_process : unnamed
    PDRAFT_Draft --> Leave_status_In_pre_process : unnamed
    POG_Offers_generated --> Leave_status_In_pre_process : unnamed
    POG_Offers_generated --> Leave_status_In_pre_process : unnamed
    PDRAFT_Draft --> Leave_status_In_pre_process : unnamed
    PLF_LAP_failed --> Leave_status_In_pre_process : unnamed
    ACL_Approved_with_Cross_sell_limits --> Leave_status_In_pre_process : unnamed
    PLW_LAP_waiting --> Leave_status_In_pre_process : unnamed
    PCI_CIF_identified --> Leave_status_In_pre_process : unnamed
    PCM_CIF_manual --> Leave_status_In_pre_process : unnamed
    PCM_CIF_manual --> PCI_CIF_identified : unnamed
```

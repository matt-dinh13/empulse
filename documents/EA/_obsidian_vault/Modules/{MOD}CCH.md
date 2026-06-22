---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/User Interface/List of communication"
domain: "Modules"
element_id: 1802147
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ {MOD}CCH

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/User Interface/List of communication

## 📝 Notes

{ADD CLM-2831 /}
Specify if the data from the CCH system is loaded and shown.

Control is visible only if  'All recent' is selected and {DEL CLM-4249}global parameter COMM_HIST_SELECTED_SYSTEMS{/DEL}{ADD CLM-4249}system property CommHistSelectedSystems{/ADD} is not empty{DEL CLM-4249} and CommunicationWS supporting CCH is used (it means BSLCommunicationHistoryService_v2 and higher).{/DEL}

Control is checked by default if 'CCH' value exists in the list defined in {DEL CLM-4249}global parameter COMM_HIST_SELECTED_SYSTEMS{/DEL}{ADD CLM-4249}system property CommHistSelectedSystems{/ADD}

Localization code:
COM_SYSTEM_CCH

## 📊 Appears In (1 diagrams)

- Custom: List of communication

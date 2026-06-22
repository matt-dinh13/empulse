---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11677/CLM-4249 - Client center - List of communication - Add filter"
domain: "Modules"
element_id: 1800123
diagrams: 2
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ {MOD}Loxon

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11677/CLM-4249 - Client center - List of communication - Add filter

## 📝 Notes

Specify if the data from the LCS system is loaded and shown.

Control is visible only if  'All recent' is selected and {DEL CLM-5002}global parameter COMM_HIST_SELECTED_SYSTEMS{/DEL}{ADD CLM-5002}system property CommHistSelectedSystems{/ADD} is not empty.

Control is checked by default if 'LCS' value exists in the list defined in the system property.

Localization code:
COM_SYSTEM_LCS

## 📊 Appears In (2 diagrams)

- Custom: CLM-4249 - Client center - List of communication - Add filter
- Logical: External Reference

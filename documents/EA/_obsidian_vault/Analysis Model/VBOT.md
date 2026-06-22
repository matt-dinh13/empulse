---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/List of communication"
domain: "Analysis Model"
element_id: 1714132
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ VBOT

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/List of communication

## 📝 Notes

{ADD CLM-2831 /}
Specify if the data from the VBOT system is loaded and shown.

Control is visible only if 'All recent' is selected and Global parameter COMM_HIST_SELECTED_SYSTEMS is not empty and if system property COMM_VBOT_USED is set.

Control is checked by default if 'VBOT' value exists in the list defined in global parameter COMM_HIST_SELECTED_SYSTEMS.

Localization code:
COM_SYSTEM_VBOT

## 📊 Appears In (1 diagrams)

- Custom: List of communication

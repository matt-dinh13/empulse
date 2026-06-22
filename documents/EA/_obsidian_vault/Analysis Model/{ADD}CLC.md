---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/List of communication"
domain: "Analysis Model"
element_id: 1714130
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}CLC

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/List of communication

## 📝 Notes

{ADD CLM-4941/}
Specify if the data from the CLC module is loaded and shown.

Control is visible only if  'All recent' is selected, CLM feature flags communicationFromClcModule = True and global parameter COMM_HIST_SELECTED_SYSTEMS is not empty.

Control is checked by default if 'CLC' value exists in the list defined in global parameter COMM_HIST_SELECTED_SYSTEMS.

Localization code:
COM_SYSTEM_CLC

## 📊 Appears In (1 diagrams)

- Custom: List of communication

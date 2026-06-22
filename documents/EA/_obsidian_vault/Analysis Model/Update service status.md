---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface"
domain: "Analysis Model"
element_id: 1779778
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Update service status

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface

## 📝 Notes

{ADD CLM-1160 /}
Used for confirmation of adding a new service on contract and closes the popup window.

Visibity: only visible if ACTIVE or CANCELLED value is selected in Choose service status combobox

Localization code: SER_UpdateStatus

## 🔗 Connections (1)

- → Association «navigable»: [[Bundle service status reason]]

## 📊 Appears In (1 diagrams)

- Custom: Show or update Bundle service status

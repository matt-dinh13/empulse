---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface"
domain: "Analysis Model"
element_id: 1779850
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Choose service status

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface

## 📝 Notes

{ADD CLM-1160 /}

LDM: The list contains two Contract Service statuses to be updated: Contract Service Status.ACTIVE or CANCELLED 

Visibity: only visible if Contract -> Contract Service.Status = NEW where Service.Type = BUNDLE1

Row will be in format: ACTIVE, CANCELLED

Localization code: SER_BundleServiceStatus_combo

## 📊 Appears In (1 diagrams)

- Custom: Show or update Bundle service status

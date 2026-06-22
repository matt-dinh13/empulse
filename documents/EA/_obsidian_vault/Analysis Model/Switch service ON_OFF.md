---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface"
domain: "Analysis Model"
element_id: 1779792
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Switch service ON|OFF

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface

## 📝 Notes

LDM destination: The last Loan Service Request.Service Operation Status with Current Status = CREATED or EXECUTED and EffectiveDate <= current_date

Localization code: SER_SwitchServiceOn, SER_SwitchServiceOff

Visibility:
Only if Service Type.Service Type Flag.SERVICE_SWITCH_ALLOWED

## 🔗 Connections (1)

- → Association «navigate»: [[Service operation status reason]]

## 📊 Appears In (1 diagrams)

- Custom: Show service operation status

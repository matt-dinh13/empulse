---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813819
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Status transition reason

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Reason of the transition to the actual application status.

Visible only if the application is in status Rejected or Canceled (i.e. Contract.Status in ('D', 'T')).

LDM source:
Contract->Contract_Status_Transition[last].Reason

Localization code:
CON_StatusTransitionReason

## 📊 Appears In (1 diagrams)

- Custom: Application detail header

---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information/Application status history detail (modal window)"
domain: "Analysis Model"
element_id: 1576302
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Requested by

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information/Application status history detail (modal window)

## 📝 Notes

Name of the user, who requested the application status change.

Visible only if the application is in status Canceled (i.e. Contract.Status = 'T').

LDM source:
Contract->Contract_Status_Transition.Requested_By->User.Full_Name

Localization code:
CON_RequestedBy

## 📊 Appears In (1 diagrams)

- Custom: Application status history detail

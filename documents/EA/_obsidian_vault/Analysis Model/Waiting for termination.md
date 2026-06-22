---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813816
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Waiting for termination

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Indication, that the application is actually waiting for its termination.

Visible only if not empty.

LDM source:
In case some unresolved request for the application termination (Contract->Contract_Status_Transition_Request_For_Termination[.Status='SENT']) exists, message GEN_Yes is displayed as the element's value (otherwise the whole element is hidden).

Localization code:
CON_WaitingForTermination

## 📊 Appears In (1 diagrams)

- Custom: Application detail header

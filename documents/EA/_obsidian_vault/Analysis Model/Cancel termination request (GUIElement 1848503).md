---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848503
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Cancel termination request

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

Invokes 01.172 Cancel REL contract termination request use case.

Visible only if all the following conditions are met:
- Contract.status in (Signed (N), Active (A), Paid-off (L))
- ProductType = REL
Localization code: CON_CANCEL_RELTERM_REQ

## 🔗 Connections (1)

- → Dependency: [[01.172 Cancel REL contract termination request manually (UseCase 1852812)]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons

---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848494
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Create termination request

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

Invokes 01.171 Create REL contract termination request use case.

Visible only if all the following conditions are met:
- Contract.status in (Signed (N), Active (A), Paid-off (L))
- ProductType = REL
- the rule  Contract Status Transition Request Check returns FALSE

Localization code: CON_CREATE_RELTERM_REQ

## 🔗 Connections (1)

- → Dependency: [[01.171 Create REL contract termination request (UseCase 1852809)]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons

---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848491
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Contract operation panel

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

Panel with contract operation buttons. Button visibility is controlled by current contract status (see Preconditions of referenced Use Cases to appropriate buttons) regardless of selected tab in the lower part of the screen.
See UC 01.210 Show contract detail. 
Every functional button is shown only if user has right to run associated use case (general rules).
Every functional button is shown only if preconditions of referenced use case are met (difference against general rule).

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons

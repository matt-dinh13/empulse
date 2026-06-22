---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848488
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Refresh evaluation

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

Button is visible for contracts in approval process, that is:
- contract status 'In Pre-process' and substatus 'CIF waiting', 'CIF manual', 'CIF identified' or 'LAP waiting' {ADD RFC-161825} or 'Draft'{/ADD}
- contract status 'In Process' and substatus 'CIF waiting', 'CIF manual', 'CIF identified', 'LAP waiting', 'LAP waiting after offers'

and for given contract, no 2BoD queue must be found by algorithm Algorithm: Check if contract is currently in 2BoD queue, otherwise the button is not visible.

Localization code: CON_RefreshEvaluation

Logic is described in UC 01.210 Show contract detail.

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons

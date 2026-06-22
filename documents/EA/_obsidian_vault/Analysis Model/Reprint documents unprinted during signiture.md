---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848509
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Reprint documents unprinted during signiture 

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

Invokes use case 01.183 Print documents for contract sign 

Enable:
Only if Contract.Status = SIGNED (N) and if exist unprinted documents generated during contract sign (see the algorithm Find documents unprinted during contract sign)

Localozation code:
CON_REPRINT_SIGN_DOCS

## 🔗 Connections (2)

- → Dependency: [[Find documents unprinted during contract sign]]
- → Dependency: [[{MOD}01.183 Print documents for contract sign]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons

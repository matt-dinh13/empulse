---
type: GUIElement
stereotype: "lcheck box"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface"
domain: "Analysis Model"
element_id: 1651357
diagrams: 3
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Charge fee for the card replacement

> **Type**: GUIElement · **Stereotype**: «lcheck box»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface

## 📝 Notes

User can select if the fee will be charged because of the card replacement.
Default value is TRUE, fee is charged.

If global database parameter USE_CONFIG_FOR_CARD_REP_FORM = True and the rule Get attributes for checkboxes on Card replacement form returns this checkbox in the list of checkboxes and their attributes, then system updates checkbox attributes according the list.

Localization Code: REL_ChargeFee

## 📊 Appears In (3 diagrams)

- Custom: Card replacement
- Custom: CBL-5285 (CLM-1834) Change Automatic Tick for Replace Card Menu in BSL
- Custom: CBL-8991 (CLM-2970) Setting card replacement screen options

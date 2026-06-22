---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface"
domain: "Analysis Model"
element_id: 1651291
diagrams: 3
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ PIN transfer from the original card

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface

## 📝 Notes

User can select if PIN should be transferred from the original card. Default value is FALSE.

If global database parameter USE_CONFIG_FOR_CARD_REP_FORM = True and the rule Get attributes for checkboxes on Card replacement form returns this checkbox in the list of checkboxes and their attributes, then system updates checkbox attributes according the list.
{ADD CSI-345}If inhouse = TRUE, the checkbox is disabled and unchecked{/ADD}

Localization Code: REL_PINtransfer

## 📊 Appears In (3 diagrams)

- Custom: Card replacement
- Custom: CBL-5285 (CLM-1834) Change Automatic Tick for Replace Card Menu in BSL
- Custom: CBL-8991 (CLM-2970) Setting card replacement screen options

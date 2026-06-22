---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface"
domain: "Analysis Model"
element_id: 1651277
diagrams: 3
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Cancel original card

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface

## 📝 Notes

Default value is TRUE, current card will be canceled along with the request.
If FALSE, current card remains in the original status until the new card is activated.

If card status is CANCELED, BLOCKED, LOST or STOLEN, this checkbox is disabled and has value=FALSE.

If global database parameter USE_CONFIG_FOR_CARD_REP_FORM = True and the rule Get attributes for checkboxes on Card replacement form returns this checkbox in the list of checkboxes and their attributes, then system updates checkbox attributes according the list.

Localization Code: REL_CancelOriginalCard

## 📊 Appears In (3 diagrams)

- Custom: Card replacement
- Custom: CBL-5285 (CLM-1834) Change Automatic Tick for Replace Card Menu in BSL
- Custom: CBL-8991 (CLM-2970) Setting card replacement screen options

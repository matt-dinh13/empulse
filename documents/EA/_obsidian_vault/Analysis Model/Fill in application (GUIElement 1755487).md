---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail"
domain: "Analysis Model"
element_id: 1755487
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Fill in application

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail

## 📝 Notes

Displayed only for Primary offer.
Runs application filling - invokes either use case 01.081 Fill in application - 1SP or 01.082 Fill in application - 1BoD based on the applicable 1SP/2SP sales process.
Visible only if contract doesn't exist.

Localization code: APP_FillInApplication

## 🔗 Connections (2)

- → Realisation: [[{MOD}01.081 Fill in application - 1SP]]
- → Realisation: [[{MOD}01.082 Fill in application - 1BoD]]

## 📊 Appears In (1 diagrams)

- Custom: Offer detail - Panel of buttons

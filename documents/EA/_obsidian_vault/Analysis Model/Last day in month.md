---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model"
domain: "Analysis Model"
element_id: 1686335
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Last day in month

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model

## 📝 Notes

Indicates that the last day in month has to be used as preferred due date.
Visible and enabled according the rule Allow change of Preferred Due day, only for offers based on REL product.
Default: If current value of OfferFinancialParameters.PreferredDueDay = 31 then the box is ticked up else ticked off.

After the box is ticked up by user then the field Preferred Due Day is cleared and disabled.
After the box is ticked off by user then the field Preferred Due Day is enabled.
When saving and the box is ticked up then the value = 31 is saved into OfferFinancialParameters.PreferredDueDay. Otherwise the value entered in Preferred Due Day is saved.

Localization code: PRD_PreferredDueDayLastDay

## 📊 Appears In (1 diagrams)

- Custom: Change product offer parameters

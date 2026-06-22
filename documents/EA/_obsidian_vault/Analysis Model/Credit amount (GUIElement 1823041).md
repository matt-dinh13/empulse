---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823041
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Credit amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

The field is displayed only if option Cash loan  or Revolving loans without initial transaction is checked.

If consolidation panel without disbursement amount is displayed, the field is prefilled by a sum of all consolidated contracts and it is non editable. If the list of consolidated contracts changes, this field is recalculated.

Localization code: PRD_CreditAmount

## 🔗 Connections (4)

- → Dependency: [[Financial amount _= 0 (Requirement 1789776)]]
- → Dependency: [[GUI elements behavior according to product type flag]]
- → Dependency: [[Additive validations for Product Offer Limit]]
- → Dependency: [[Mandatory when visible]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

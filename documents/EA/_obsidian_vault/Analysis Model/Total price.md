---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823023
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Total price

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Sum of prices of all selected commodities. Refreshed automatically when a commodity price is changed.
Not editable.
After the Total Price is modified the rule Maximal Cash Payment Entering and Cash payment calculation must be activated.

Hidden for option Standalone Insurance.

Localization code: GEN_PriceTotal

## 🔗 Connections (2)

- → Dependency: [[Cash payment calculation]]
- → Dependency: [[Maximal Cash Payment Entering]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

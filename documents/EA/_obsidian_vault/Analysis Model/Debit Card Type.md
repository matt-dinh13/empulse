---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823085
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Debit Card Type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Populated by distinct list of card types (External Card Type) available for debit productsThe values are retrieved from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode)
Visible only if option Debit card is checked.

Localization code: PRD_DebitCardType

## 🔗 Connections (2)

- → Dependency: [[Mandatory when visible]]
- → Dependency: [[External Card Type]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

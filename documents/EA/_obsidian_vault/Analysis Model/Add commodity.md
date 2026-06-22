---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823075
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Add commodity

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Adds new panel for entering of commodity.
This button is available only if number of commodities already entered is lower than maximum number of commodities. The number of allowed commodities is retrieved from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode)


Hidden for option Standalone Insurance.

Localization code: PRD_AddCommodity

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

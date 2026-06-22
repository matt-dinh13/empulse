---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823052
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Marketing action

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

The values are retrieved from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode). If the list is empty, the field is hidden.
Hidden if option Debit card or Standalone Insurance is checked.
If product offer has been already chosen the field "Marketing action" is disabled and pre-filled by empty value.

Localization code: PRD_MarketingAction

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

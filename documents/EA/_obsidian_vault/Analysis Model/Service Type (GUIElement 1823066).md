---
type: GUIElement
stereotype: "list"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823066
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Service Type

> **Type**: GUIElement · **Stereotype**: «list»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

The values are retrieved from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode). If only one record is found, the field is prefilled with this value and non-editable, otherwise empty and editable.

Localization: SER_Type

## 🔗 Connections (1)

- → Dependency: [[Mandatory when visible]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

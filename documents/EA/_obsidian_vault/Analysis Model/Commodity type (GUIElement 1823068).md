---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823068
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Commodity type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

The values are retrieved from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode)
When the field is filled/updated then execute algorithm Obtaining Commodity Data from Manufacturer and continue in form filling.

Localization code: GEN_CommodityType

## 🔗 Connections (1)

- → Dependency: [[Mandatory when visible]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

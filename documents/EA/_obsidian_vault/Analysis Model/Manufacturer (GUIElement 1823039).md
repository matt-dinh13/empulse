---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823039
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Manufacturer

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Only manufacturers that are related to Products that are related to current salesroom are displayed.
The values are retrieved from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode)

When the field is filled/updated then execute algorithm Obtaining Commodity Data from Manufacturer and continue with form filling.
Localization code: GEN_CommodityManufacturer

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823021
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Product set

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

List of Product Sets to be used as product calculator search criteria.

The values are retrieved from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode).
Displayed only if ProductCalculatorParameters.ProductSetSelection = true and at least one Product Set is to be displayed.
Always hidden if option Debit card is checked.

Sort Order: ProductSet.Name

Localization: PRD_ProductSetPreferences

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Selection | boolean |  |
| Product Set | string |  |

---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model"
domain: "Analysis Model"
element_id: 1511114
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Product Offer Request Commodity

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model

## 📝 Notes

Request for calculation of product offers raised via web service -  financed commodities.

## 🔗 Connections (4)

- → Dependency: [[Commodity Type (Class 1758904)]]
- → Dependency: [[Manufacturer (Class 1879136)]]
- → Aggregation: [[{MOD}Product Offer Calculation Request]]
- ← Association: [[Offer Service (Class 1878189)]]

## 📊 Appears In (2 diagrams)

- Logical: Offer Service
- Logical: Product Offers generated for External system

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | Commodity Type |  |
| Price | decimal |  |
| Manufacturer | Manufacturer |  |
| Model | string |  |
| SKU | string |  |

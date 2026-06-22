---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Logical Data Model"
domain: "Analysis Model"
element_id: 1511109
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Product Offer Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Logical Data Model

## 📝 Notes

Request for calculation of product offers raised via web service.

## 🔗 Connections (4)

- → Dependency: [[Product Offer Request Type]]
- ← Aggregation: [[Product Offer Response]]
- ← Generalization: [[{MOD}Product Offer Calculation Request]]
- ← Generalization: [[Product Offer Recalculation Request]]

## 📊 Appears In (1 diagrams)

- Logical: Product Offers generated for External system

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Type | Product Offer Request Type |  |

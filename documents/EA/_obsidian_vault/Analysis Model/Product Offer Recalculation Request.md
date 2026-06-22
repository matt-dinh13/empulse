---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Logical Data Model"
domain: "Analysis Model"
element_id: 1511112
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Product Offer Recalculation Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Logical Data Model

## 📝 Notes

Request for recalculation of product offer raised via web service.

## 🔗 Connections (3)

- → Dependency: [[Product Offer Response]]
- → Generalization: [[Product Offer Request]]
- ← Aggregation: [[Product Offer Request Service Choice]]

## 📊 Appears In (1 diagrams)

- Logical: Product Offers generated for External system

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Original Response Code | Code |  |
| Original Response RELIP Code | Code |  |
| Preferred Due Day | integer |  |
| Installment Schedule Method | Code |  |

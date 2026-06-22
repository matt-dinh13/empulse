---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Logical Data Model"
domain: "Analysis Model"
element_id: 1836331
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Penalty Over Limit Charging

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Logical Data Model

## 📝 Notes

In this entity is registered part of penalty over limit, which was charged after any of previously charged penalties had been canceled.

## 🔗 Connections (1)

- → Aggregation: [[Penalty Over Limit]]

## 📊 Appears In (1 diagrams)

- Logical: Penalty Over Limit

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Charge Date | date |  |
| Charged Amount | Financial amount |  |

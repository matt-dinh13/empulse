---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Logical Data Model"
domain: "Analysis Model"
element_id: 1836322
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Penalty Limit Parameters

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Logical Data Model

## 📝 Notes

Time dependent definition of parameters for calculation of penalty limit.

## 🔗 Connections (2)

- → Dependency: [[Penalty Limit Parameters - validation rules]]
- → Dependency: [[Penalty Limit Period Type]]

## 📊 Appears In (1 diagrams)

- Logical: Penalties Limit Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Valid From | Date |  |
| Valid To | Date |  |
| Percentage Rate | {MOD}Percentage |  |
| Period | Penalty Limit Period Type |  |

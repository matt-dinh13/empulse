---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1835852
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Penalty Over Limit

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

In this entity are registered penalties (or their parts), which are requested to be charged by external system, but cannot be charged due to exceeded limit for penalties.
They can be charged later if some of previously charged penalties was canceled.

## 🔗 Connections (4)

- ← Aggregation: [[Penalty Over Limit Charging]]
- → Association: [[Installment (Class 1857187)]]
- → Association: [[{MOD}Tariff Item]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Management
- Logical: Penalty Over Limit

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Charge ID | string |  |
| Original Charge Date | date |  |
| Amount | Financial amount |  |
| Uncharged Amount | Financial amount |  |

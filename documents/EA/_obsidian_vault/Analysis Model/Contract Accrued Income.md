---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model"
domain: "Analysis Model"
element_id: 1857177
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Contract Accrued Income

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model

## 📝 Notes

The entity keeps accrued incomes of the contract which are calculated at moment of the contract termination, possibly recalculated at change of credit balance (incoming payment pairing/unpairing, removing an installment on the contract).

## 🔗 Connections (2)

- → Dependency «use»: [[Installment Part Type (Class 1833460)]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract accrued income domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Active Flag | Boolean |  |
| Amount | Financial Amount |  |
| Calculation Date | DateTime |  |
| Installment Part Type | Installment Part Type |  |
| Termination Date | Date Time |  |

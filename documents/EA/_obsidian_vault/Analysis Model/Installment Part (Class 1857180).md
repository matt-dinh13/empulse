---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/COMMON for Fees and Penalties/Logical Data Model"
domain: "Analysis Model"
element_id: 1857180
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Installment Part

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/COMMON for Fees and Penalties/Logical Data Model

## 📝 Notes

Part of installment. Defines amounts of concrete interests, principals, fees and penalties.

## 🔗 Connections (5)

- → Dependency: [[Installment Part Type (Class 1833460)]]
- → Aggregation: [[Installment (Class 1857187)]]
- → Realisation: [[DB schéma pro evidenci splátkového kalendáre]]
- ← Association: [[{MOD}Tariff Item]]
- ← Association: [[Incoming Payment Pairing]]

## 📊 Appears In (4 diagrams)

- Logical: Fees and Penalties in context
- Logical: Incoming payments
- Logical: Installment Schedule
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | Financial amount |  |
| Amount Paid | Financial amount |  |
| Creation Date | DateTime |  |
| Fully Paid Date | Date |  |
| Part Type | Installment Part Type |  |
| Data exchange ID | ID |  |
| Penalization start date | Date |  |
| Penalization end date | Date |  |
| Update Date | DateTime |  |

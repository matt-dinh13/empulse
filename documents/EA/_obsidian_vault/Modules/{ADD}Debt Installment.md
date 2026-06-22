---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1875687
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}Debt Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Logical Data Model

## 📝 Notes

{ADD PBR-830 /}
Evidence of overdue or paid after due installments. Debt tolerance (system property PARAM_DEBT_TOLERANCE_AMOUNT, {ADD IS-2528} {IN only} for the last installment of the contract property DEBT_TOLERANCE_AMOUN_LAST_INST is used.{/ADD}) is taken into account.

For overdue installment the paidDate is null, for installment paid after due is paidDate greater than dueDate.

Collection works with installment number as an installment identifier.

## 🔗 Connections (1)

- → Association: [[Installment (Class 1857187)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract debt tracking

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Paid Date | DateTime |  |
| Installment Number | int |  |
| Installment Type | Installment Type |  |
| Installment Due Date | Date |  |
| {ADD}Unpaid Amount | Financial amount |  |

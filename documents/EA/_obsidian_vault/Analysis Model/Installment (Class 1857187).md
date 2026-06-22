---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1857187
diagrams: 9
connections: 14
tags:
  - class
  - analysis-model
---

# 🔷 Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Base of installment schedule. Installment consists of installment parts and defines amount which client has to pay till installment due date.

## 🔗 Connections (14)

- ← Association: [[Penalty Over Limit]]
- → Dependency «use»: [[Financial Parameters (Class 1879562)]]
- → Dependency: [[Recalculation Reason (Class 1833457)]]
- → Realisation: [[DB schéma pro evidenci splátkového kalendáre]]
- → Association: [[Installment (Class 1857187)]]
- ← Association: [[Installment (Class 1857187)]]
- → Dependency «use»: [[Installment Type (Class 1833458)]]
- ← Aggregation: [[Installment Part (Class 1857180)]]
- ← Aggregation: [[{ADD}Installment Change Log]]
- ← Aggregation: [[Installment Version Printout]]
- ← Association: [[GenerateInstallmentSchedule]]
- ← Association: [[RegeneratedInstallmentScheduleSE]]
- ← Association: [[{ADD}Debt Installment]]
- → Aggregation «time»: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (9 diagrams)

- Logical: Contract - Financial parameters
- Logical: Contract debt tracking
- Logical: Fees and Penalties in context
- Logical: Incoming payments
- Logical: Installment Schedule
- Logical: InstallmentScheduleSystemEvent schema
- Logical: Penalty Over Limit
- Logical: Printing an Installment schedule
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Installment Type | Installment Type |  |
| Active | Boolean |  |
| Creation Date | DateTime |  |
| Deactivated in Version | Number (4,0) |  |
| Due Date | Date |  |
| Due Date Customer | Date |  |
| Installment Number | Number (4,0) |  |
| Installment Version | Number (4,0) |  |
| Recalculation Reason | Recalculation Reason |  |
| Update Date | DateTime |  |
| Fully Paid With Tolerance | Date |  |
| Fully Paid Without Tolerance | Date |  |

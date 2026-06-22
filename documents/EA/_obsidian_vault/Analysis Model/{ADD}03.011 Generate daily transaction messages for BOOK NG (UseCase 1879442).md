---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Access Rights"
domain: "Analysis Model"
element_id: 1879442
diagrams: 2
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}03.011 Generate daily transaction messages for BOOK NG

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Access Rights

## 📝 Notes

{ADD PAYM-870 /}
This technical use case selects contracts due yesterday and generates InstallmentScheduleInfoRequest JMS for their next installment parts. It is run by automatic daily job {ADD}BOOK NG Transaction messages job only if global parameter generateDailyISIR = true.

## 🔗 Connections (4)

- → Realisation: [[{ADD}03.011 Generate daily transaction messages for BOOK NG]]
- → Dependency: [[{ADD}BOOK NG Transaction messages job]]
- → Dependency: [[{ADD}Generate data for transaction messages]]
- ← Association: [[Time (Actor 1880869)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Daily ISIR generating for BOOK NG

---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Access Rights"
domain: "Modules"
element_id: 1876066
diagrams: 5
connections: 1
tags:
  - usecase
  - modules
---

# 🎯 {MOD}01.475 Update overdue debt in job

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Access Rights

## 📝 Notes

This UC is used for calculation and update clients overdue debt on relevant contracts. This operation is fired as daily system job. Job must be fired in first minutes after midnight of due date for contract!

## 🔗 Connections (1)

- ← Association: [[Time (Actor 1880869)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
- Use Case: Contract debt tracking
- Use Case: Contract finishing after DC recalculation
- Use Case: OVERVIEW - Installment Schedule

---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Offer management/Access rights"
domain: "Analysis Model"
element_id: 1836231
diagrams: 5
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}01.143 Recalculate clients's x-sell offer [CLM]

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Offer management/Access rights

## 📝 Notes

{ADD CLM-5227/}

The purpose of this use case is to collect and send the client's data to LAP for x-sell online recalculation and to update recalculated x-sell offers.

It was derived from LOR's original {MOD}01.143 Recalculate client's x-sell offer to split the code base in support of future modularisation out of BSL into a new module.

## 🔗 Connections (6)

- → Realisation: [[01.143 Recalculate client's x-sell offer]]
- → UseCase «include»: [[{ADD}01.137 Recalculate party's marketing offer [CLM]]]
- → Realisation: [[01.138 Receive party's marketing offer recalculation result]]
- ← Dependency: [[Recalculate (GUIElement 1836232)]]
- ← Dependency: [[Update offer (GUIElement 1878708)]]
- ← Association: [[User (Actor 1879373)]]

## 📊 Appears In (5 diagrams)

- Custom: Access rights
- Custom: CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1
- Custom: Customer offers tab v2
- Use Case: Customer offers - UseCase Model
- Use Case: Offer management

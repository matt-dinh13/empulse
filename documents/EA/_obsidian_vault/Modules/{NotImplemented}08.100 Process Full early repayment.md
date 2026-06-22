---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1879641
diagrams: 1
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {NotImplemented}08.100 Process Full early repayment

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 🔗 Connections (7)

- → Dependency: [[Terminate Contract Service after its processing]]
- → Dependency: [[Create business event]]
- → Dependency: [[Check if Installment Schedule is Closed]]
- → UseCase «include»: [[{MOD}03.070 Calculate early repayment amount]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → Dependency: [[Terminate Contract Service if cannot be processed]]
- → UseCase «include»: [[{MOD} 03.110 Perform early repayment installment schedule]]

## 📊 Appears In (1 diagrams)

- Use Case: OVERVIEW - Installment Schedule

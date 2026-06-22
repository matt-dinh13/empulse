---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1630130
diagrams: 1
connections: 2
tags:
  - usecase
  - modules
---

# 🎯 ISG01 Generate installment schedule

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model

## 📝 Notes

{ADD MODULARIZATION /}
Originally UC 03.010 and 03.030

The use case describes generating of installment schedule (IS) for a particular contract based on its (offer) financial parameters.
The IS is a list of installments which contains the loan amount (principal) with yield part divided into installment parts. This IS is supposed to be paid by a client during the loan’s lifecycle until it is fully repaid.

Note: This use case does not solve a partial-regenerating of a installment schedule (e.g. due to Early repayment, Contract termination).

## 🔗 Connections (2)

- → Dependency: [[ISG_ Generate installment schedule algorithm]]
- → Dependency: [[ISG_ Installment schedule maximal version calculation]]

## 📊 Appears In (1 diagrams)

- Use Case: ISG - Generate installment schedule

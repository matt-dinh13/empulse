---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1765922
diagrams: 1
connections: 1
tags:
  - usecase
  - modules
---

# 🎯 ISGEN - Generate installment schedule

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

## 📝 Notes

The use case describes generating a standard installment schedule (IS) for particular contract on basis of the provided financial parameters.
The particular algorithm type for IS generating is provided as input parameter.

The IS is a list of installments which contain the loan amount with field part divided into installment parts. The IS is supposed to be paid by client during loan’s life-cycle until it is fully repaid.

Note: This use case does not solve a partial-regenerating of a installment schedule (e.g. due to Early repayment, Contract termination).
Full regenerating of the installment schedule is solved by 03.030 Regenerate installment schedule use case.

REST API:
https://is-gen.id00a1.cz.infra/openapi/v1.0/is-generator/generate

## 🔗 Connections (1)

- → Dependency: [[ISGEN - Generate installment schedule algorithm]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule

---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/Use Case"
domain: "Analysis Model"
element_id: 1851706
diagrams: 4
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Maximal Version of Installment Schedule

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/Use Case

## 📝 Notes

This rule determines maximal version of active and inactive installments as:
MV = (MAX(MAX( I.Installment Version), MAX(I.Deactivated In Version)))

(I = Installment in schedule of processed contract)

## 🔗 Connections (3)

- ← Dependency: [[{MOD}08.060 Change Due Date]]
- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]

## 📊 Appears In (4 diagrams)

- Use Case: Change Due Date processing
- Use Case: Gift payment processing
- Use Case: ISG - Generate installment schedule
- Use Case: OVERVIEW - Installment Schedule

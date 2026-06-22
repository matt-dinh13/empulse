---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Access Rights"
domain: "Analysis Model"
element_id: 1869016
diagrams: 5
connections: 12
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.222 Calculate Grace period amount

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Access Rights

## 📝 Notes

This use case calculates amount, which must be paid before the repayment date for grace period to be able process early repayment under Grace period conditions.

## 🔗 Connections (9)

- → Dependency: [[{MOD}Generate installment schedule algorithm]]
- → Dependency: [[{MOD}ALG_Early repayment calculation A2 - Unpaid principal only]]
- → Realisation: [[REQ7 - Check and process Grace period]]
- → Realisation: [[08.222 Calculate Grace period amount]]
- → Dependency: [[ALG_Get involved Installment part]]
- ← UseCase «include»: [[{MOD}08.220 Check and process Grace period]]
- → Dependency: [[{MOD}ALG_Early repayment calculation A1]]
- ← UseCase «include»: [[08.204 Evaluate status of Grace period (UseCase 1869022)]]
- → Dependency: [[Annuity calculation]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Use Case: Calculation of early repayment amount under Grace period
- Use Case: Grace period processing
- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
- Use Case: Status of Grace Period

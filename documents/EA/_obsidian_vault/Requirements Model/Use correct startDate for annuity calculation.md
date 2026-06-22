---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1218 (CBL-3514) New interest rate calculation for Gift payment"
domain: "Requirements Model"
element_id: 1374261
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Use correct startDate for annuity calculation

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1218 (CBL-3514) New interest rate calculation for Gift payment

## 📝 Notes

In order for the Annuity calculation algorithm to work correctly, we will pass a startDate parameter to it set to loan providing date of a contract.

Furthermore, if the regeneration of IS with the new financial parameters should lead to an overpayment on the contract, we will include this expected overpayment in last installment's interest part.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1218 (CBL-3514) New interest rate calculation for Gift payment (Requirement 1374262)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1218 (CBL-3514) New interest rate calculation for Gift payment

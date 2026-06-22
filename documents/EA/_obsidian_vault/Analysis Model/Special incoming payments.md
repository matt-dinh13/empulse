---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Business Rules"
domain: "Analysis Model"
element_id: 1225203
diagrams: 6
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Special incoming payments

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Business Rules

## 📝 Notes

Special incoming payments are payment types automatically generated as incoming payment in some special cases (e.g. correcting a small debt on the contract) to finalize contract installment schedule.
In some cases if a client's payment is paired with the contract, or a client's payment is canceled, the special payment has to be also cancelled.

 Folowing special payments have special rules for cancelation:

	
- Small underpayment (SU)  - In case of Canceled payment is also canceled SU. In case of Pairing payment - decision about pairing/unpairing of payment is done by GlobalParameter.CancelSmallUnderpayment(CSU) if CSU = 1 payment is canceled, if CSU = 0 nothing happen

## 🔗 Connections (2)

- ← Dependency: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- ← Dependency: [[05.030 Couple incoming payment manually]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Use Case: Cancellation incoming payment manually
- Use Case: Manual unpairing incoming payment from contract
- Use Case: Process batch of incoming payment processing requests
- Use Case: Reflection of change of balance
- Use Case: Reflection of change of balance

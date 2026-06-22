---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Access Rights"
domain: "Analysis Model"
element_id: 1879454
diagrams: 7
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}03.080 Add installment

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Access Rights

## 📝 Notes

This activity is used to insert an extraordinary installment into the installment schedule of a contract. The extraordinary installment is usually some kind of penalty or fee as well as special "overpayment" installment.
If a standard installment (which the fee/penalty is charged for) is provided, the relation between this standard installment and new created extraordinary installment is created.
In order to create an extraordinary installment, some conditions have to be fulfilled:

	
- The contract must be in statuses: active, signed, or payoff
	
- Due date must be the current date or later for Installment Part Types Fee and Penalty


This activity does not anyhow change already existing (past or future) installments, only adds a new one but does not care for additional tasks connected with addition (e.g. to inform user about new installment). It is needed to check coupling of payments to installments after every addition of installment.
At the end of the use case the system generates a system event RegeneratedInstallmentScheduleSE.

## 🔗 Connections (10)

- ← UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- ← UseCase «include»: [[{MOD}04.140 Charge fees]]
- ← UseCase «include»: [[04.110 Process charging requests]]
- ← Dependency: [[08.409 Evaluate Checking Terms of Loan Service]]
- → NoteLink: [[External Reference (Boundary 1879477)]]
- → UseCase «include»: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]
- → Realisation: [[03.080 Add installment]]
- → Realisation: [[REQ3 - Modification of the fee charging request]]
- → Dependency: [[REQ#1 Generating an system event after (re-) generating an installment schedule]]
- → Realisation: [[Requirement3 - TransWS - add reason of (un)charge fee]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Use Case: Charging request
- Use Case: Checking Terms of Loan Service
- Use Case: Fee services used by external system (Collection)
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pairing installment parts procedure
- Use Case: Pairing installment parts procedure

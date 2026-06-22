---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Use Case Model"
domain: "Analysis Model"
element_id: 1874494
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check eligibility of interest back period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Use Case Model

## 📝 Notes

{ADD IS-2617} {PH only}
This rule is recalculating and saving Interest back periods based on recalculated installment schedule.

Input:
- contract code
- installment number
- period due date
- minimal installment amount

Steps:

	
- System gets active standard Installment and related installment parts having installment number form input (contract -> installment -> installmentPart where Installment.Type = STANDARD and Installment.ActiveFlag = 1 and sum of all installment parts > 0).
If no installment is found, return FALSE
	
- System checks if  minimal installment amount was paid in DPD delay tolerance :

- if sum of paid installment parts (installment -> installmentPart.paid amount) >= minimal installment amount and transaction date of related payments (installemntPart -> incomingPaymentPairing -> incomingPayment. transactionDate where incomingPaymentPairing.archived = 0) <= period due date, than return TRUE.
If transaction date is null, system takes deposit date value.
- Else return FALSE

## 🔗 Connections (1)

- ← Dependency: [[08.612 Process bonus services (UseCase 1876353)]]

## 📊 Appears In (1 diagrams)

- Use Case: Interest Back

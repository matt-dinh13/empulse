---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825238
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Installment schedule exists

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Check if there is Installment Schedule generated for current contract.

Code: INSTALLMENT_SCHEDULE_EXISTS

Input parameters:

	
- ContractCode


Output:

	
- ValidationMessage
	
- CanBeOverruled = FALSE


Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)
Exists at least one Contract -> Installment where Installment Type = "STANDARD" and Active = true ; Validation Message = MSG_InstallmentScheduleNotExist ; OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository

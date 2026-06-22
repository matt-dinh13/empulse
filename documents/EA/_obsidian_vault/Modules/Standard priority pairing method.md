---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1741394
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Standard priority pairing method

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

Input:

	
- InstallmentPartsToPairing collection


	
- PaymentDepositDate – deposit date of the incoming payment for which is sorting performed
	
- Pairing Settings


Output:

	
- sorted collection of InstallmentPartsToPairing


This method sorts the Installment Parts by two levels: by Installment.Due Date and by Installment Part Priority setting with relation to the {DELL CBL-15541 IS-1558} Condition Change Flag{DELL} {ADD CBL-15541 IS-1558}Condition Flag{/ADD} parameter which divides installments to "before due date" and "overdue". Installment Priorities are selected based on input Pairing Settings. Order of these levels is determined by {ADD IS-1892} Suppress due date method {/ADD}  {DEL IS-1892}Installment Priority.Suppress Due Date Priority as follow:

	
- If an Installment Parts having Suppress Due Date Priority = 1 and Installment.Due Date <= PaymentDepositDate for defined Installment Part Type exists then the first level uses Installment Part Priority and second Due Date Priority
	
- If an Installment Part having Suppress Due Date Priority = 0 (or NULL) or Installment.Due Date > PaymentDepositDate then Due Date Priority is used for the first level and Installment Part Priority for the second level. {/DEL}


Due Date Priority

	
- Sort by Installment Due date. In case child installment is related to a parent Installment, Due date of the parent Installment is taken, else the child Installment Due date is used. E.g. If an extraordinary installment has reference to a standard installment, the standard installment due date is taken into account for this installment to sort them by due date.


Installment Part Priority
The Priority is chosen according to Condition Change Flag parameter which divides installments to "before due date" and "overdue". In case child installment is related to a parent Installment, Due date of the parent Installment is taken, else the child Installment Due date is used

	
- If Installment.Due Date >= PaymentDepositDate then is taken the Installment Priority.Priority where {DELL CBL-15541 IS-1558}Condition Change Flag = 0 {DELL}  {ADD CBL-15541 IS-1558}Condition Flag = 'OK' {/ADD} for Installment Parts ordering
	
- If Installment.Due Date < PaymentDepositDate, then is taken the Installment Priority.Priority where {DELL CBL-15541 IS-1558}Condition Change Flag = 1 {DELL} {ADD CBL-15541 IS-1558}Condition Flag = 'BROKEN' {/ADD} for Installment Parts ordering

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Supress due date method]]
- → Generalization: [[ALG_Get sorted installment parts]]

## 📊 Appears In (3 diagrams)

- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pairing installment parts procedure
- Use Case: Pairing installment parts procedure

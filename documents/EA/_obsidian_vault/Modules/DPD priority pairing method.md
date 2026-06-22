---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1741407
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 DPD priority pairing method

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

Input:

	
- InstallmentPartsToPairing collection
	
- PaymentDepositDate – deposit date of the incoming payment for which is sorting performed
	
- Pairing Settings


This method sorts the Installment Parts by two levels: by Installment.Due Date and next by Installment Part Priority setting with relation to the installment DPD number. Installment Priorities are selected based on input Pairing Settings. Order of these levels is determined by {ADD IS-1892} Suppress due date method {/ADD}  {DEL IS-1892}Installment Priority.Suppress Due Date Priority as follow:

	
- If an Installment Parts having Suppress Due Date Priority = 1 and Installment.Due Date <= PaymentDepositDate for defined Installment Part Type exists then the first level uses Installment Part Priority and second Due Date Priority
	
- If an Installment Parts having Suppress Due Date Priority = 0 (or NULL) or Installment.Due Date > PaymentDepositDate exists then Due Date Priority is used for the first level and Installment Part Priority for the second level. {/DEL}


Due Date Priority

	
- Sort by Installment Due date. In case child installment is related to a parent Installment, Due date of the parent Installment is taken, else the child Installment Due date is used. E.g. If an extraordinary installment has reference to a standard installment, the standard installment due date is taken into account for this installment to sort them by due date.


Installment Part Priority
Sort by Priority of Installment Part Type including Tariff Item Type which is chosen according to {DELL CBL-15541 IS-1558} Condition Change Flag {DELL} {ADD CBL-15541 IS-1558}Condition Flag{/ADD} parameter whose decision limit is defined by Pairing Settings.DPD Limit.

	
- If (PaymentDepositDate - Installment.Due Date) <= Installment Priority Setting.DPD Limit, then is taken the Installment Priority.Priority where DELL CBL-15541 IS-1558}Condition Change Flag = 0{DELL} {ADD CBL-15541 IS-1558}Condition Flag = 'OK'{/ADD}  for Installment Parts ordering
	
- If (PaymentDepositDate - Installment.Due Date) > Installment Priority Setting.DPD Limit, then is taken the Installment Priority.Priority where DELL CBL-15541 IS-1558}Condition Change Flag = 1{DELL} {ADD CBL-15541 IS-1558}Condition Flag = 'BROKEN'{/ADD}  for Installment Parts ordering

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Supress due date method]]
- → Generalization: [[ALG_Get sorted installment parts]]

## 📊 Appears In (3 diagrams)

- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pairing installment parts procedure
- Use Case: Pairing installment parts procedure

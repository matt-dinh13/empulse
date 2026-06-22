---
type: Requirement
stereotype: "BusinessRule"
package: ""
domain: "_Uncategorized"
element_id: 1879621
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Split and cancel unpaid overdue installment parts

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: N/A

## 📝 Notes

Input:

	
- Contract
	
- DecisionDate
	
- Recalculation reason
	
- Early repayment result


Installments identification, split and recreate
 

	
- For contract´s active and paired incoming payments having Payment.DepositDate >= date of ERRD and Payment.CreationDate > ER.creationDate system calls {MOD}05.200 Perform decoupling
	
- System iterates through all the contract´s not fully paid (paid partially or completely unpaid) active installments (both types - STANDARD and EXTRAORDINARY):

	- system iterates through all the installment parts related to the installment 
		- if installment part is completely unpaid (paid amount = 0, amount > 0)
			- system deactivates the installment by calling 03.095 Remove installment
		- if installment part is partially paid (0 < paid amount < amount)
			- if not already created by previous iterations, system creates new installment as a copy of selected installment
				- Installment Version = MaxInstallmentVersion
				- Recalculation Reason = ER
				- other attribute values of Installment stay the same as originals
			- system creates the installment part as copy of selected installment part
				- reference to new installment created as a copy of original installment
				- Installment Part.Amount = Installment Part.Paid Amount
				- Installment Part.Fully Paid Date = null
				- other attribute values of Installment part stay the same as originals
			- system deactivates the installment by calling 03.095 Remove installment
If no installment is found, system continues in superior use case.

---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Use Case Model"
domain: "Analysis Model"
element_id: 1874493
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Interest Back amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Use Case Model

## 📝 Notes

{ADD IS-2617} {PH only}
This rule is calculating amount for period of Interest Back service for the contract.

Input:
- Contract code

Output: 
- Interest Back Amount
- Zero last period (boolean)

Steps:

	
- System get Number of future installments which has amount  bigger than zero (contract -> installments -> installmentPart where installment.type = STANDARD and installment.activeFlag = 1 and installment.dueDate >= current dateand sum of installmentPatrs > 0).
	
- System finds all active interest installment parts (contract -> installment -> installment part where installment.type = STANDARD and installment.activeFalg = 1 and installmentPart.partType = I) and calculate Sum of actual interest
	
- System calculate Past interest back amount as sum of interestBackPeriod.interestBackAmount where interestBackPeriod.relatedInstallmentDueDate < current date
	
- System calculates Interest back amount = (Sum of actual interest -  Past interest back amount)/Number of future installments
	
- System set Zero last period = false.
	
- For each active standard future installment (installment.dueDate>= current date and installment.activeFlag = true and installment.type = STANDARD): 
-  System checks that Interest back amount <= sum of installment parts (installment -> installmentPart)
- If system found some installment where Interest back amount > sum of installment parts, than Interest back amount is recalculated as:
Interest back amount = (Sum of actual interest -  Past interest back amount)/(Number of future installments -1) and set Zero last period = true
- Else continue by next step
	
- Returns Interest back amount rounded for two decimal places and Zero last period.

## 🔗 Connections (2)

- ← Dependency: [[Create Interest back periods]]
- ← Dependency: [[Update Interest Back periods]]

## 📊 Appears In (1 diagrams)

- Use Case: Interest Back

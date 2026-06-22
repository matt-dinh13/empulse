---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Use Case Model"
domain: "Analysis Model"
element_id: 1874496
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Create Interest back periods

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Use Case Model

## 📝 Notes

{ADD IS-2617} {PH only}
This rule is calculating and saving new Interest back periods for loan with active loan service request type IBACK.

Input:
- contract code
- DPD Delay Tolerance 
- DPD Amount Tolerance

Steps:

	
- System checks in active loan service request exists for service type Interest back (contract -> loanServiceRequest where currentStatus = 'CREATED' and  requestType = 'IBACK') - if such loan service request does not exists, return error and use case ends. Else continue by next step.
	
- System finds all active standard installment for the contract and its parts (contract -> installment -> installment part). If no active standard installment is found, return error and use case ends. Else continue by next step.
	
- System call business rule Calculate Interest Back Amount. If the amount can not be calculated, return error and use case ends. Else continue by next step.
	
- For each installment one period is created into Interest Back Period:
- Related installment number = Installment.Number
- Related installment due date = Installment.DueDate
- Interest back amount = Interest back amount calculated in previous step
- Minimal installment amount = sum of all installment parts related to the installment - Interest back amount - DPD Amount Tolerance
- Period due date = Related installment due date + DPD Delay Tolerance
- Status = WAITING_FOR_EVALUATION 
- Status reason = empty 
- Evaluation date = empty
	
- If any error occurs during periods creation, return error and use case ends.
	
- System checks that sum of interest back (interestBackPeriod.interestBackAmount where interestBackPeriod.status not CANCELLED) is not bigger than sum of interest on the contract (installment -> installmentPart.amount where installment.type = STANDARD and installment.activeFlag = true and installmentPart.partType = I). 
If sum of interest back is bigger than sum of interest on the contract, difference is deducted from the interest back amount of the last period:
   - system calculate updated last period amount = interestBackPeriod.interestBackAmount  - (sum of interest back - sum of interest on the contract. If updated last period amount < 0, return error and use case ends.
   - system updates last period (interestBackPeriod in status WAITING_FOR_EVALUATION with the highest number of related installment) to has interestBackAmount = updated last period amount
Else continue by next step.
	
- Return OK.

## 🔗 Connections (2)

- → Dependency: [[Calculate Interest Back amount]]
- ← Dependency: [[08.612 Process bonus services (UseCase 1876353)]]

## 📊 Appears In (1 diagrams)

- Use Case: Interest Back

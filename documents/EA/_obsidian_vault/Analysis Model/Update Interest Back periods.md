---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Use Case Model"
domain: "Analysis Model"
element_id: 1874490
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Update Interest Back periods

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Use Case Model

## 📝 Notes

{ADD IS-2617} {PH only}
This rule is recalculating and saving Interest back periods based on recalculated installment schedule.

Input:
- contract code
- DPD Delay Tolerance 
- DPD Amount Tolerance
- checked date

Steps:

	
- System checks in active loan service request exists for service type Interest back (contract -> loanServiceRequest where currentStatus = 'CREATED' and  requestType = 'IBACK') - if such loan service request does not exists, return error and use case ends. Else continue by next step.
	
- System finds all affected standard installments and its parts (contract -> installment -> installment part where installment.type = STANDARD and installment.activeFlag = 1 and installment.creationDate >= bonusServiceRequest.checkedDate). If no installment is found, return error and use case ends. Else continue by next step.
	
- System finds all interest back periods which should be updated - for each installment found in previous step (interestBackPeriod.relatedInstallmentNumber = installment.number)
	
- For interest back period found in previous step which has status EVALUATED and status reason OK, system create request for cancellation of related interest back payment.
	
- For each zero installment, system cancel related interest back period:
- Status = CANCELLED
- Status reason =  OTHER_SERVICE_APPLIED
- Evaluation date = empty
	
- System cancel all periods which should be updated (periods found in step 3):
- Status = CANCELLED
- Status reason =  OTHER_SERVICE_APPLIED
- Evaluation date = empty
	
- System call business rule Calculate Interest Back Amount. If the amount can not be calculated, return error and use case ends. Else continue by next step.
	
- For each active affected installment (found in step 2), system creates period and saves it in Interest Back Period:
- Related installment number = Installment.Number
- Related installment due date = Installment.DueDate
- Interest back amount = Interest back amount calculated in previous step
- Minimal installment amount = sum of all installment parts related to the installment - Interest back amount - DPD Amount Tolerance
- Period due date = Related installment due date + DPD Delay Tolerance
- Status = WAITING_FOR_EVALUATION 
- Status reason = empty 
- Evaluation date = empty
	
- If any error occurs during periods creation, return error and use case ends.
	
- If Calculate Interest Back Amount returned Zero last period = true, system sets InterestBackPeriod.InterestBackAmount = 0 for the last period (Interest Back Period with the highest number of related installment).
	
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

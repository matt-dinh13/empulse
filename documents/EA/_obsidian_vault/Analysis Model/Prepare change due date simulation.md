---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Business Rules"
domain: "Analysis Model"
element_id: 1863327
diagrams: 4
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Prepare change due date simulation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Business Rules

## 📝 Notes

Input:

	
- Contract
	
- Required due date of month   ...day of month, not exact date
	
- CHDD_Fee   ...optional


Initialization:

	
- System finds:
- Contract->Contract Service where Service->Service Type = CHDDR
(Note: further as CHDDR Service)
	
- System gets first N installments where 
(Due Date >= current date + CHDDR Service.MinDaysBeforeNextDueDate
AND  where I.Installment Type = 'STANDARD' and Installment.Active = TRUE)
where 
N is a number from CHDDR Service.MaxNumberOfNextInstallments.
The very first and very last installments from installment schedule are excluded from the list, i.e. it is not possible to change due date of the very first or last standard installment.
If some Installment where sum (Installment->InstallmentParts.Amount) = 0 (i.e. zero installment) is in the list (e.g. after payment holiday application), the system gets only installment where Installment Number is higher than the zero installment in the list (e.g. change of due date can be performed only after payment holidays).
If it's true for the first installment that 
(Required due date of month + month and year from Due date of installment) 
is lower then 
(current date + Change of Due Date Service.MinDaysBeforeNextDueDate), then the installment is excluded from the list.
If no installment is found, it returns a message MSG_NoEligibleInstallmentFoundForCHDD (e.g. "No eligible installment has been found for entered data.") and the algorithm ends.


Processing of each installment from installments:

	
- System computes Changed Due Date 
--> it is a date where day of month = Required due date of month from the input, month and year is taken from Due date of the processed installment.
	
- If CHDDR Service.Min Days After Last Due Date is set then system runs Check changed due date is not too close to last due date rule with input parameters
- lastDueDate = installment.Installment Number - 1.Due Date (previous installment to the processed (being changed) installment)
- changedDueDate = Changed Due Date
- minDays = CHDDR Service.Min Days After Last Due Date
-- if not OK (rule returns "NOK") then system updates Changed Due Date.month = Changed Due Date.month + 1
	
- System creates a virtual Change Due Date Request (not stored in the DB !!!) where
- Changed Due Date = computed Changed Due Date  
- New annuity = null
- if CHDD_Fee is passed then creates Change Due Date Request -> Charged Fee To Request where
--- Amount = CHDD_Fee.Amount
--- Tariff Item = CHDD_Fee->Tariff Item
- prepares a virtual IS according to the rule Prepare IS to change due date, passed is Change Due Date Request, it returns:
--- processed Change Due Date Request with generated Service Offer Installments
--- virtual Financial Parameters
	
- From each result from the previous step the system prepares CHDD simulation with the following data:
- first Installment, i.e. Service Offer Installment with the lowest Number (where I.Installment Type = 'STANDARD' and Installment.Active = TRUE)
- a list of following values:
--- Number of installment = first Installment.Number
--- New due date = first Installment.Due Date
--- 1st Installment amount = Installment.Amount of first Service Offer Installment where Installment Type = 'STANDARD'
--- 2nd Installment amount = Installment.Amount of second Service Offer Installment where Installment Type = 'STANDARD'
--- Total amount = virtual Financial Parameters.Total Payment Per Credit
--- PIR = Change Due Date Request.Service Request Presented Interest Rate(PIR).Value where PIR.PresentedIRSetting.Case = STANDARD and PIR.PresentedIRSetting.Order = 1


Output:

	
- list of CHDD simulations, i.e. a list of values for each processed Installment / Change Due Date Request
[Number of installment, New due date, 1st Installment amount, 2nd Installment amount, Total amount, PIR]

## 🔗 Connections (7)

- ← Dependency: [[Set new fee for change due date]]
- ← Dependency: [[New due date]]
- ← Dependency: [[08.061 Show parameters for change due date (UseCase 1862209)]]
- → Dependency: [[Prepare virtual IS to change due date]]
- → Dependency: [[Check changed due date is not too close to last due date]]
- ← Dependency: [[01.794 Get ContractCHDDRequest preview service (UseCase 1869814)]]
- ← Dependency: [[01.795 Create ContractCHDDRequest service (UseCase 1869792)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: Create request for Change due date
- Use Case: CHDDR request creation - externally
- Use Case: CHDDR request creation - via GUI

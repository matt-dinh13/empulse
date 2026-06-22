---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1623485
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Calculate accrued interest till end of month

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

This algorithm calculates accrued interest to the end of month from installment found to the passed calculation date. Accrued interest to the end of mont is counted from an installment which has the closest due date (the nearest future) to the passed calculationDate (included this right). 

Input:

	
- calculationDate
	
- Contract


Output:

	
- accruedInterestTillEndOfMonth ...FinancialAmount


Algorithm:

	
- System sets accruedInterestTillEndOfMonth = 0.

	
- System finds Installment[firstFollowing] with minimal Installment.dueDate from 
Contract->Installment[active = true AND dueDate > calculationDate AND installmentType is in (STANDARD, EARLY_REPAID)]
(i.e. the first following standard Installment according to the dueDate).
If any of the following conditions is met:
- no record is found
- does not exist any Installment[firstFollowing]->InstallmentPart-interest[where partType is in (I, IT)].
the algorithm returns accruedInterestTillEndOfMonth and ends. 
Found InstallmentPart-interest[where partType is in (I, IT)] are used in following steps.

	
- System finds startPeriodDate as follows:
- startPeriodDate = Installment.dueDate from Installment with maximal Installment.dueDate from 
Contact->Installment[active = true AND dueDate =< calculationDate AND installmentType is in (STANDARD, EARLY_REPAID)]
(i.e. a standard installment which has the highest dueDate before the calculationDate; does not matter whether it has an installment part on interest).
If no record is found, startPeriodDate = Contract->ContractStatusTransation.creationDate[where Status = Signed and it is the first status transition to Signed] (i.e. date of contract signature).

	
- System calculates: 
- numPeriodDays = count of days in the interval <startPeriodDate and (Installment[firstFollowing].dueDate - 1 day)>, included start and end days
- accIntNumDays = count of days between <startPeriodDate and end of month from startPeriodDate>, included start and end days
- accIntAmount = sum (InstallmentPart-interest.amount * {accIntNumDays  / numPeriodDays} )
...e.g. numPeriodDays for dates 28.1.2015 and 27.2.2015 is 31, accIntNumDays for dates 28.1.2015 and 31.1.2015 (i.e. end of month) is 4 

	
- System rounds accruedInterestTillEndOfMonth according to the rule Rounding (method = value of GP BL_DEBT_TRACKING_ROUND_METHOD, scale = value of GP BL_DEBT_TRACKING_ROUND_SCALE ). 

	
- Algorithm returns accruedInterestTillEndOfMonth and ends.

## 🔗 Connections (1)

- ← Dependency: [[01.863 Perform contract securitization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Use Case: Contract securitization

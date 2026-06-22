---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1623486
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Calculate accrued interest from next installment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

This algorithm calculates accrued interest to the passed calculation date. Accrued interest is counted from an installment which has the closest due date (the nearest future) to the passed calculationDate (included this date). If the period of the installment is not fully covered (i.e. the due date is higher than calculationDate), the system calculates the return value pro-rata.

Input:

	
- calculationDate   ...end of the interval including the date
	
- Contract


Output:

	
- accruedInterestOnNextInstallment ...FinancialAmount


Algorithm:

	
- System sets accruedInterestOnNextInstallment = 0.
	
- System finds Installment[firstFollowing] with minimal Installment.dueDate from 
Contract->Installment[active = true AND dueDate > calculationDate AND installmentType is in (STANDARD, EARLY_REPAID) {ADD PAYM-1387 CBL-2652}AND (sum of its Installment->InstallementPart.amount > 0 AND feature flag NewSaleInterestCalculation = true){/ADD}]
(i.e. the first following standard {ADD PAYM-1387 CBL-2652}non-zero{/ADD} Installment according to the dueDate).
If any of the following conditions is met:
- no record is found
- does not exist any Installment[firstFollowing]->InstallmentPart-interest[where partType is in (I, IT)].
the algorithm returns accruedInterestOnNextInstallment and ends. 
Found InstallmentPart-interest[where partType is in (I, IT)] are used in following steps.
	
- System finds startPeriodDate as follows:
- startPeriodDate = Installment.dueDate from Installment with maximal Installment.dueDate from 
Contact->Installment[active = true AND dueDate =< calculationDate AND installmentType is in (STANDARD, EARLY_REPAID) {ADD TPH-5214 CBL-2652}AND (sum of its Installment->InstallementPart.amount > 0 AND feature flag NewSaleInterestCalculation = true){/ADD}]
(i.e. a standard {ADD TPH-5214 CBL-2652}non-zero{/ADD} installment which has the highest dueDate before the calculationDate; does not matter whether it has an installment part on interest).
If no record is found, startPeriodDate = Contract->ContractStatusTransaction.creationDate[where Status = Signed and it is the first status transition to Signed] (i.e. date of contract signature).
	
- System calculates: 
- numPeriodDays = count of days in the interval <startPeriodDate and (Installment[firstFollowing].dueDate - 1 day)>, included start and end days
- accIntNumDays = count of days between <startPeriodDate and calculationDate>, included start and end days
- accIntAmount = sum (InstallmentPart-interest.amount * {accIntNumDays  / numPeriodDays} )
...e.g. numPeriodDays for dates 1.1.2015 and 31.1.2015 is 31, accIntNumDays for dates 1.1.2015 and 15.1.2015 is 15
	
- System rounds accruedInterestOnNextInstallment according to the rule Rounding (method = value of GP BL_DEBT_TRACKING_ROUND_METHOD, scale = value of GP BL_DEBT_TRACKING_ROUND_SCALE ).
	
- Algorithm returns accruedInterestOnNextInstallment and ends.

## 🔗 Connections (2)

- → Dependency: [[Requirement2 - Securitization]]
- ← Dependency: [[01.863 Perform contract securitization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Use Case: Contract securitization

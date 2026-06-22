---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1623489
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Calculate accrued standard fees from next installment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

This algorithm describes how to calculate accrued fee amount by tariff item of fee type to the passed calculation date. Accrued fee is counted from an installment which has the closest due date (the nearest future) to the passed calculationDate (included this date). If the period of the installment is not fully covered (i.e. the due date is higher than calculationDate), the system calculates the return value proportionally. The calculation is done for fees in STANDARD Installment type.

Input:

	
- calculationDate   ...end of the interval including the date
	
- Contract


Output:

	
- AccruedFeeItems     ....Array of fee items
- tariffItemCode  ... string
{ADD CBL-6282 PAYM-2314 CLM-2048}- tariffItemTypeCode   ... string{/ADD}
- amountOnNextInstallment   ...FinancialAmount
- amountTillEndOfMonth   ...FinancialAmount


Algorithm:

	
- System finds the first following standard Installment.DueDate after calculationDate; i.e.  MIN(Installment.DueDate) as Installment[firstFollowing] from 
Installment having Installment.Active = 1 AND DueDate > calculationDate AND InstallmentType is in (STANDARD, EARLY_REPAID)
If no such Installment exists, scenario ends
	
- System finds all InstallmentParts having InstallmentType = STANDARD and Installment.Active = 1 and Installment Part.Part Type in (F, FT) and Installment.DueDate = Installment[firstFollowing].DueDate -- find fees for accrual calculation
The found records are grouped by Installment Part.Tariff Item -> TariffItem.Code
If no such Installment exists, scenario ends
	
- System finds startPeriodDate as follows:
- startPeriodDate = Installment.DueDate from Installment with maximal Installment.DueDate having Installment.Active = true AND DueDate =< calculationDate AND InstallmentType in (STANDARD, EARLY_REPAID)
(i.e. a standard Installment which has the highest DueDate before the calculationDate; does not matter whether it has an installment part on fee).
If no record is found, startPeriodDate = Contract.Loan Providing Date
	
- System calculates: 
- numPeriodDays = count of days in the interval <startPeriodDate and (Installment[firstFollowing].DueDate - 1 day)>, included start and end days
- accNumDaysToNextInstallment = count of days between <startPeriodDate and calculationDate>, included start and end days
- accIntNumDaysTillEndOfMonth = count of days between <startPeriodDate and end of month from startPeriodDate>, included start and end days
---e.g. numPeriodDays for dates 1.1.2015 and 31.1.2015 is 31, accNumDaysToNextInstallment for dates 1.1.2015 and 15.1.2015 is 15; accNumDaysTillEndOfMonth for dates 28.1.2015 and 31.1.2015 (i.e. end of month) is 4  
	
- For each grouped InstallmentPart item, system
- sets AccruedFeeOnNextInstallment.tariffItemCode = processed TariffItem.Code
{ADD CBL-6282 PAYM-2314 CLM-2048}- sets AccruedFeeOnNextInstallment.tariffItemTypeCode = processed Tariff Item.Tariff Item Type Code{/ADD}
- if numPeriodDays = 0, sets AccruedFeeOnNextInstallment.amountOnNextInstallment = 0; AccruedFeeOnNextInstallment.amountTillEndOfMonth = 0 and continues with next item
- calculates amountOnNextInstallment = sum (InstallmentPart.Amount * {accNumDaysToNextInstallment  / numPeriodDays} )
- calculates amountTillEndOfMonth = sum (InstallmentPart.Amount * {accIntNumDaysTillEndOfMonth  / numPeriodDays} )
- rounds amountOnNextInstallment and amountTillEndOfMonth according to the rule Rounding (method = value of GP BL_DEBT_TRACKING_ROUND_METHOD, scale = value of GP BL_DEBT_TRACKING_ROUND_SCALE ).
- sets AccruedFeeOnNextInstallment.amountOnNextInstallment = amountOnNextInstallment; AccruedFeeOnNextInstallment.amountTillEndOfMonth = amountTillEndOfMonth

## 🔗 Connections (1)

- ← Dependency: [[01.863 Perform contract securitization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Use Case: Contract securitization

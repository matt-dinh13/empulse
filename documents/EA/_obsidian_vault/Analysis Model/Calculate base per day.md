---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules"
domain: "Analysis Model"
element_id: 1878875
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate base per day

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules

## 📝 Notes

Input:

	
- contractId
	
- tariffItem
	
- debtCatalogue - debt catalogue record
	
- referenceDate
	
- futurePercentageBase (optional) - if no value is provided, it is set to 0 (used by Debt calculator)
	
- financialParameters.dayCountMethod


Output:

	
- percentageBase (amount)


Basic Path:

	
- System gets {DEL CBL-13809 IS-1388}GlobalParameters.PenaltyCalculationAlgorithm.{/DEL CBL-13809 IS-1388} {ADD CBL-13809 IS-1388}tariffItem.percentageBasedOnType{/ADD CBL-13809 IS-1388}
	
- if ({DEL CBL-13809 IS-1388}PenaltyCalculationAlgorithm.value = OPD{/DEL CBL-13809 IS-1388} {ADD CBL-13809 IS-1388}percentageBasedOnType = EDBP{/ADD CBL-13809 IS-1388} or tariffItem.TariffItemUsage = SAI) then system calculates percentageBase as defined in {DEL CBL-13809 IS-1388}AW - OPD calculation{/DEL CBL-13809 IS-1388} {ADD CBL-13809 IS-1388}AW - EDBP calculation{/ADD CBL-13809 IS-1388} below.  {ADD CBL-13809 IS-1388} Else if percentageBasedOnType = EDBI then system calculates percentageBase as defined in AW - EDBI calculation  below.{/ADD CBL-13809 IS-1388} Else if {DEL CBL-13809 IS-1388}PenaltyCalculationAlgorithm.value =  OSD{/DEL CBL-13809 IS-1388}  {ADD CBL-13809 IS-1388}percentageBasedOnType = EDB{/ADD} then system calculates percentageBase as defined in {DEL CBL-13809 IS-1388}AW - OSD calculation{/DEL CBL-13809 IS-1388} {ADD CBL-13809 IS-1388} AW - EDB calculation {/ADD CBL-13809 IS-1388}  below.
Else system sets percentageBase = 0.


	
- System returns percentageBase.


{ADD CBL-13809 IS-1388}
AW - EDBI calculation:
System gets financialParameters.dayCountMethod
If financialParameters.dayCountMethod = 30_360, system set countOfDays= 360 
else countOfDays = 365
System sets percentageBase = 0
System adds debtCatalogue.OverdueInterestDebt to percentageBase
System adds futurePercentageBase to percentageBase
System calculate percantageBase = percentageBase/countOfDays
{/ADD CBL-13809 IS-1388}

{DEL CBL-13809 IS-1388}AW - OSD calculation:{/DEL CBL-13809 IS-1388} {ADD CBL-13809 IS-1388}AW - EDB calculation{/ADD CBL-13809 IS-1388}

	
- System sets percentageBase = 0.
	
- System adds debtCatalogue.OverduePrincipalDebt to percentageBase.
	
- System adds debtCatalogue.OverdueInterestDebt to percentageBase.
	
- System adds (debtCatalogue.OverdueDebtOnFees - result of AW - Excluded fee amount defined below) to percentageBase.
	
- System adds futurePercentageBase to percentageBase.


AW - Excluded fee amount:

	
- System iterates through debtCatalogue.ExcludedFeeOverDueDebt list.
	
- If system finds excludedFee where excludedFee.CalculatedFeeCode = tariffItem.tariffItemTypeCode then system returns excludedFee.Amount

else system returns 0.

{DEL CBL-13809 IS-1388}AW - OPD calculation or SAI calculation: {/DEL CBL-13809 IS-1388} {ADD CBL-13809 IS-1388}AW - EDBP calculation{/ADD CBL-13809 IS-1388}

	
- System sets percentageBase = 0.
	
- System sets the isDailyRate flag: if TariffItem.Type has active flag CALCULATE_DAILY_RATE then True else False
	
- System adds debtCatalogue.OverduePrincipalDebt to percentageBase.
	
- If tariffItem.TariffItemUsage = SAI (Sanction Interest) and isDailyRate = False then
     percentageBase = percentageBase * result of AW - Calculate base for Sanction Interest below
else if isDailyRate = True and contract&#180;s IS algorithm use compounded interest rate (IS_BASIC)
      percentageBase = percentageBase * (result of Calculate CAPR to simple daily interest)
else percentageBase = percentageBase * result of AW - Calculate additional base below.
	
- System adds futurePercentageBase to percentageBase.



AW - Calculate additional base:

	
- System gets DayCountMethod as Contract.FinancialParameters.DayCountMethod
	
- If DayCountMethod = "30_360" then system returns result of AW - Calculate additional base for 30_360

else system returns result of AW - Calculate additional base for ACT

AW - Calculate additional base for 30_360:

	
- System gets PIR as first of displayed Contract.FinancialParameters.ContractPresentedInterestRates (by contractId).
	
- If (PIR = 0 or does not exist) then system returns GlobalParameters.PenaltyCalculationBasePercentage and AW ends

else system returns (PIR / GlobalParameters.PenaltyCalculationDayParameter) and AW ends.

AW - Calculate additional base for ACT:

	
- System gets AIR as Contract.FinancialParameters.InterestRate (by contractId).
	
- If (AIR = 0) then system returns GlobalParameters.PenaltyCalculationBasePercentage and AW ends

else system returns (AIR / 365) and AW ends.

AW - Calculate base for Sanction Interest:

	
- System gets AIR as as Contract.FinancialParameters.InterestRate (by contractId).
	
- {ADD CBL-15435} If Contract.FinancialParameters.InterestRate <= GlobalParameters.PenaltyCalcZeroIrThreshold, then system returns interest rate per day as (GlobalParameters.PenaltyCalcZeroIrBase  / number of days in year defined by referenceDate) and AW ends. Else continue with next step. {/ADD CBL-15435}
	
- System returns interest rate per day as (AIR / number of days in year defined by referenceDate) and AW ends.

## 🔗 Connections (1)

- ← Dependency: [[Calculate Tariff Item amount for period from debt]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Logical: GetDebtCataloguesInPeriodPerEndOfDay
- Use Case: Fee services used by external system (Collection)

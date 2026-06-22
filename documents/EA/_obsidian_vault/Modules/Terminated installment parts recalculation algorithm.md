---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1723830
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Terminated installment parts recalculation algorithm

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

Due to change original installment due date, accrued and future interests as well as fees have to be recalculated by following algorithm.
Input parameters and definitions entering the calculation
a. TI - original Termination Installment which can consists following Installment Part:

	
- S - Original Principal 
	
- ST - Original Principal Terminated 
	
- I - Original Interest 
	
- IT - Original Terminated Interest 
	
- F - Set of original Fees separated by their Tariff Item


	
- FT - Set of original Terminated Fees separated by their Tariff Item


	
- P - Set of original Penalties separated by their Tariff Item

b. NTDD - New Termination Due Date (due date for the new Termination Installment)
c. SDD - Start of accounting period date (due date of the installment before the Termination Installment)
d. Setting of involved future Installment Parts for contract termination from Installment Part Types and related Tariff Item Types by ALG_Get involved Installment part algorithm.
e. For number of days calculations between SDD and NTDD, Days360 function is used - see Calculate number of days for 30/360 day count convention for definition
f. For rounding of calculated amounts are obtained [rounding_scale] and [rounding_method] parameter values of particular business - see Rounding for more information.
g. days_in_month = 30 (number of days in month based on a 360-day year)

System involves all Installment parts of active original Termination Installment (TIo) into calculation. System returns result (RESULT) with calculated values:
1.  New accrued Principal (S) amount is recalculated for new interest period:

	
- RESULT.Principal.Amount = Round(Days360(SDD; NTDD) *  TI.Principal.Amount/days_in_month; [rounding_scale]; [rounding_method])

Future principal is always involved to calculation, so the new Terminated (future) Principal (ST) is recalculated as:

	
- RESULT.PrincipalTerminated.Amount = TI.Principal.Amount - RESULT.Principal.Amount + TI.PrincipalTerminated.Amount


2. New accrued Interest (I) amount is recalculated for new interest period:

	
- RESULT.Interest.Amount = Round(Days360(SDD; NTDD) * TI.Interest.Amount/days_in_month; [rounding_scale]; [rounding_method])

If the future interest is involved to calculation, the new Terminated (future) Interest (IT) is recalculated as:

	
- RESULT.InterestTerminated.Amount = TI.Interest.Amount - RESULT.Interest.Amount + TI.InterestTerminated.Amount

If the future interest is not involved to calculation, it is calculated remaining interest for cancellation:

	
- RESULT.InterestCanceled.Amount = TI.Interest.Amount - RESULT.Interest.Amount


3. For every Fee, separate calculation by Tariff Item Type (X) is done:
New Fee by Tariff Item

	
- RESULT.Fee.X.Amount = Round(Days360(SDD; NTDD) * TI.Fee.X.Amount/days_in_month; [rounding_scale]; [rounding_method])

If the future fee by Tariff Item is involved to calculation, the new Terminated (future) Fee (FT) is recalculated as:

	
- RESULT.FeeTerminated.X.Amount = TI.Fee.X.Amount - RESULT.Fee.X.Amount + TI.FeeTerminated.X.Amount

If the future fee by Tariff Item is not involved to calculation, it is calculated remaining fee for cancellation:

	
- RESULT.FeeCanceled.X.Amount = TI.Fee.X.Amount - RESULT.Fee.X.Amount


4. For every Penalty, separate calculation by Tariff Item Type is done:

	
- RESULT.Penalty.X.Amount = TI.Penalty.X.Amount

Notice: Future penalties are not charged so recalculation by accrued and future is not needed.

## 🔗 Connections (2)

- → Dependency: [[Calculate number of days for 30_360 day count convention]]
- ← Dependency: [[03.150 Regenerate terminated installment schedule (UseCase 1838778)]]

## 📊 Appears In (2 diagrams)

- Use Case: OVERVIEW - Installment Schedule
- Use Case: Write-off CEL contract

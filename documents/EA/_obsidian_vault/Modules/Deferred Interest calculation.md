---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814858
diagrams: 4
connections: 7
tags:
  - requirement
  - modules
---

# 📋 Deferred Interest calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

Inputs:

	
- DLP (date of loan providing) - if not defined then it is set to current date
	
- FirstDueDate


	
- DayCountMethod


	
- LoanAmount (optional; not necessary when CalculateInterest = False)
	
- InterestRate


Outputs:

	
- DeferredInterestAmount
	
- EndOfDeferredPeriod - end date of deferred period


Calculate EndOfDeferredPeriod period by algorithm End of Deferred Period calculation with parameters:
- DLP = StartDate
- FirstDueDate

If EndOfDeferredPeriod <= DLP then --no deferred period exists

	
- DeferredInterestAmount = 0
	
- EndOfDeferredPeriod = DLP 

and return

Calculation of deferred interest
If CalculateInterest = false then  DeferredInterestAmount = 0
else
DeferredInterestAmount = Receivable * (InterestCoefficient - 1) 
where

	
- Receivable = LoanAmount


	
- InterestCoefficient is calculated according to Interest factor ACT with parameters:
- DayCountMethod
- DLP
- EndOfDeferredPeriod
- InterestRate


DeferredInterestAmount is rounded according to rule Rounding with parameters:
- DeferredInterestAmount 
- GlobalParameter.AnnuityRoundingScale 
- GlobalParameter.AnnuityRoundingMethod

Return

## 🔗 Connections (7)

- → Dependency: [[Interest factor ACT]]
- → Dependency: [[End of Deferred Period calculation]]
- ← Dependency: [[{MOD}Generate installment schedule - Equal principal]]
- ← Dependency: [[{ADD}Generate installment schedule - Equal Annuity algorithm]]
- ← Dependency: [[Generate installment schedule - Annuity principal]]
- ← Dependency: [[Deferred Interest]]
- ← Dependency: [[First Installment Amount]]

## 📊 Appears In (4 diagrams)

- Custom: Annuity calculations
- Custom: Financial calculations
- Use Case: Generate installment schedule
- Use Case: ISG - Generate installment schedule

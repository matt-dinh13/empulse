---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1878917
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 ISGEN - Deferred interest calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

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

## 🔗 Connections (4)

- ← Dependency: [[ISGEN - Generate installment schedule - Equal principal]]
- ← Dependency: [[ISGEN - Generate installment schedule - Annuity principal]]
- → Dependency: [[ISGEN - Interest factor ACT]]
- ← Dependency: [[ISGEN - Generate installment schedule - Equal annuity]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule

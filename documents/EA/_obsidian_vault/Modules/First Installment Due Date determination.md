---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Installment Schedule Dates/CEL/Business rules"
domain: "Modules"
element_id: 1533901
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 First Installment Due Date determination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Installment Schedule Dates/CEL/Business rules

## 📝 Notes

// This algorithm is used for evaluation of the First Due Date, Loan Providing Date and Shifted Last Due Date 

Input:

	
- PreferredAlgorithmMethodInitial


	
- PreferredDayInitial


	
- PreviousContractDay
	
- ProductProfile
	
- PaymentChannelType


	
- LoanProvidingDate


	
- DeferredPeriodLength


Output: 

	
- FirstDueDate


	
- LoanProvidingDate


// Adjust PreferredAlgorithmMethod and PreferredDueDay
If PreferredAlgorithmMethodInitial is not defined 
-- If PreferredDayInitial is defined on input then 
---- PreferredAlgorithmMethod = S (Salary day)
-- else 
---- PreferredAlgorithmMethod = C (Contract day)
else PreferredAlgorithmMethod = PreferredAlgorithmMethodInitial
If PreferredAlgorithmMethod = S (Salary day) then
-- If PreferredDayInitial is not defined on input then 
----PreferredAlgorithmMethod = C (Contract day)
-- else PreferredDay = PreferredDayInitial
If PreferredAlgorithmMethod = R (Previous contract day) then
-- If PreviousContractDay is not defined on input then 
---- PreferredAlgorithmMethod = C (Contract day)
-- else PreferredDay = PreviousContractDay
If PreferredAlgorithmMethod = C (Contract day) then
-- PreferredDay = NULL

:LOOP

System executes algorithm Get configuration for First Installment Due Date calculation with parameters

	
- PreferredAlgorithmMethod
	
- ProductProfile
	
- PaymentChannelType

which returns

	
- DayShift


	
- FastDueDate


	
- DueDaysMap


	
- EOMSpread


	
- MinDaysAfterLoanProvidingDate


	
- MaxDaysAfterLoanProvidingDate


	
- MinDaysAfterPreferredDay


	
- AddDeferredPeriodToResult


System calculates FirstDueDate according to algorithm Calculate First Installment Due Date with parameters

	
- LoanProvidingDate


	
- DayShift


	
- PreferredDay


	
- FastDueDate


	
- DueDaysMap


	
- EOMSpread


	
- MinDaysAfterLoanProvidingDate


	
- MaxDaysAfterLoanProvidingDate


	
- MinDaysAfterPreferredDay


	
- DeferredPeriodLength


	
- AddDeferredPeriodToResult

which returns

	
- FirstDueDate


	
- LoanProvidingDate


If returned FirstDueDate = NULL and PreferredAlgorithmMethod <> C (Contract day) then
-- PreferredAlgorithmMethod = C (Contract day)
-- Continue in step :LOOP

If FirstDueDate = NULL then raise an exception.

Return

	
- FirstDueDate


	
- LoanProvidingDate

## 🔗 Connections (3)

- → Dependency: [[Get configuration for First Installment Due Date calculation]]
- → Dependency: [[Calculate First Installment Due Date]]
- ← Dependency: [[{MOD}Evaluate First Installment Due Date]]

## 📊 Appears In (2 diagrams)

- Custom: CEL Installment Schedule Dates determination
- Custom: First Installment Due Date for Application/Contract

---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1878455
diagrams: 6
connections: 6
tags:
  - requirement
  - modules
---

# 📋 {MOD}Evaluate First Installment Due Date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

// Finds due day of the last client's contract

Input:

	
- LoanProvidingDate


	
- Product


	
- PaymentChannelType


	
- PreferredDay


	
- PreviousContractDay


	
- GetParameters - boolean, default = True; if True then activate algorithm for evaluation of PaymentChannelType, PreferredDay,PreviousContractDay with following parameters:
	
- CUID
	
- Contract
	
- TemporaryApplication
	
- OfferFinancialParameters 
	
- {ADD PCG-5620}PH only: FirstDueDate{/ADD}

Output: 

	
- FirstDueDate


	
- LoanProvidingDate


{ADD PCG-5620}
PH only: If FirstDueDate is provided then FirstDueDate = FirstDueDate
  If LoanProvidingDate is not provided then LoanProvidingDate = FirstDueDate - 1 month
return FirstDueDate and LoanProvidingDate
else{/ADD}

If Product is defined on input then 
-- PreferredAlgorithmMethodInitial = Product.ProductProfile.PreferredFirstDueDateAlgorithm
else PreferredAlgorithmMethodInitial = NULL

IF GetParameters = True then 
--  If PreferredAlgorithmMethodInitial = R (Previous contract day) then CUIDPar = CUID from input else CUIDPar = NULL
-- System executes algorithm Evaluate parameters for First Installment Due Date determination with parameters (filled in only if defined):
--- CUIDPar
--- Contract from input
--- TemporaryApplication from input
--- OfferFinancialParameters from input
-- which returns
--- PaymentChannelType
--- PreferredDay
--- PreviousContractDay
ELSE PaymentChannelType, PreferredDay, PreviousContractDay are taken from input.

If Service of type DEFP (Deferred payment) is assigned to Product and is chosen for calculated/recalculated offer then 
-- DeferredPeriodLength = Service.DeferredPaymentService.Length
else
-- DeferredPeriodLength is not defined

Execute algorithm First Installment Due Date determination with parameters

	
- PreferredAlgorithmMethodInitial
	
- PreferredDayInitial = PreferredDay from input
	
- PreviousContractDay from input


	
- ProductProfile = Product.ProductProfile
	
- PaymentChannelType from input


	
- LoanProvidingDate from input


	
- DeferredPeriodLength

which returns

	
- FirstDueDate


	
- LoanProvidingDate

## 🔗 Connections (6)

- ← Dependency: [[{MOD}Calculate product offer]]
- → Dependency: [[First Installment Due Date determination]]
- → Dependency: [[Evaluate parameters for First Installment Due Date determination]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}Offer recalculation]]
- ← Dependency: [[{MOD}01.191 Process installment schedule generation after disbursement]]

## 📊 Appears In (6 diagrams)

- Custom: Calculate product offer
- Custom: First Installment Due Date for Application/Contract
- Custom: PCG-5620 BRPH-2423 - Debt Purchase Support in HOSEL - POC
- Use Case: Determine installment schedule processing
- Use Case: Determine installment schedule processing
- Use Case: Prepare documentation to sign

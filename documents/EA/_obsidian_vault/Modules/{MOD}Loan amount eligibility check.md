---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Product and Service selection"
domain: "Modules"
element_id: 1835629
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Loan amount eligibility check

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Product and Service selection

## 📝 Notes

The algorithm checks if service is eligible for loan amount

Input:

	
- Service
	
- Application form (TA) or Product  for which the eligible service is checked


	
- Loan preferences (LP), i.e. parameters for offer calculation


Outputs:

	
- Loan amount eligibility (true/false)


Steps:
System calculates LoanCreditAmount 
for Producttype = CEL and InitialTransactionType = POS as Goods price - cash payment
{ADD BRPH-510}for ProductType.SAI as Origination fees amount definition with tariff of the service and chargedToPrincipal = true{/ADD}

System checks following criteria:

	
- If Service.LimitMinimalCreditAmount is filled then LoanCreditAmount >= Service.LimitMinimalCreditAmount
	
- If Service.LimitMaximalCreditAmount is filled then LoanCreditAmount =< Service.LimitMaximalCreditAmount
	
- If Service.Category = Insurance and Service.InsuranceService.MaxLoanAmount is filled then LaonCreditAmount =<  Service.InsuranceService.MaxLoanAmount


If a criterion is not met, the remaining ones do not have to be evaluated.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}NEW Service determination]]

## 📊 Appears In (1 diagrams)

- Custom: Product and Service selection

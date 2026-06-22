---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1878847
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Whole principal calculation

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

If calculated for a contract the value is taken from Contract.FinancialParameters.CreditAmount

If calculated for an application the value is taken from Contract.OfferFinancialParameters.CreditAmount

In product calculator is used following algorithm: 
WP = (GP – CP + Suma(OF_FIX) + Suma(OF_PERC_GP)*GP) / (1 – Suma(OF_PERC_WP))
where
WP – whole principle 
GP – total goods price from product calculator
CP – initial cash payment, calculated according to the rule Initial Cash Payment definition
OF_FIX – origination fee paid in advance defined by fixed amount
OF_PERC_GP – percentage rate of origination fee paid in advance based on GP 
OF_PERC_WP – percentage rate of origination fee paid in advance based on WP
For definition of Origination fee paid in advance see rule Origination fees amount definition.

Pre-conditions (if not satisfied then WP is not calculated):

	
- All origination fees are defined by fix amount or by percentage with base WP or GP
	
- No limit is defined on origination fees

## 📊 Appears In (1 diagrams)

- Custom: Financial calculations

---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1878864
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}Subsidized Principal calculation

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

If calculated for a contract the value is taken from Contract.FinancialParameters.CreditAmount

If calculated for an application the value is taken from Contract.OfferFinancialParameters.CreditAmount

In product calculator is used following algorithm: 
SUBP = ((GP – CP - Discount) + Suma(OF_FIX) + Suma(OF_PERC_GP)*GP + Suma(OF_PERC_SGP)*SGP) / (1 – Suma(OF_PERC_SUBP))
where
SUBP – subsidized principle 
GP – total goods price from product calculator
CP – initial cash payment, calculated according to the rule Initial Cash Payment definition
OF_FIX – origination fee defined by fixed amount (ChargingPeriodicity = ONE_TIME)
OF_PERC_GP – percentage rate of origination fee based on GP  (ChargingPeriodicity = ONE_TIME)
OF_PERC_SUBP – percentage rate of origination fee paid in advance based on SUBP
Discount - calculated according to rule Subvention Discount definition 
{ADD PCG-5669}
PH only: Discount = SubventionDiscount + Discount amount
{/ADD}


For definition of Origination fee paid in advance see rule Origination fees amount definition.

Pre-conditions (if not satisfied then SUBP is not calculated):

	
- All origination fees are defined by fix amount or by percentage with base SUBP or GP or SGP
	
- No limit is defined on origination fees

## 🔗 Connections (3)

- → Dependency: [[Subvention Discount definition]]
- → Dependency: [[Initial Cash Payment definition]]
- → Association: [[REQ#2 A new output attribute remaining cash payment from product calculator]]

## 📊 Appears In (2 diagrams)

- Custom: Financial calculations
- Custom: PCG-5669 BRPH-2800 - Discount Voucher: Apply Discounts in POS Loan Application

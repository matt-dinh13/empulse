---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1878863
diagrams: 5
connections: 13
tags:
  - requirement
  - modules
---

# 📋 Origination fees amount definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

Origination fees are tariff items charged once at the moment of contract origination. 
Inputs:

	
- Tariff 


	
- chargedToPrinciple


Output:

	
- set of origination fees (from the input tariff)


Steps:


	
- System finds all TariffItem using Algorithm: Find tariff items by usage with:
- UsageType = 'Standard (A)' or UsageType = 'Service(S)')
- ChargingPeriodicity = ONE_TIME
- Tariff from input (active version)
- chargedToPrinciple from input
as parameters.

	
- For each TariffItem found in the previous step system calculates amount using Algorithm: Calculate tariff item amount with the following inputs:
- TariffItem
- financial parameters in the form of Offer Financial Parameters that could be calculated at the given time


Note that if a sum of origination fees should be calculated, every found fee is calculated (and rounded - if required) separately.

## 🔗 Connections (13)

- ← Dependency: [[{MOD}Annuity base amount definition]]
- ← Dependency: [[{DEL}Fixed flat rate and fixed number of advance payments (FFR_AI)]]
- ← Dependency: [[{DEL}Calculated flat rate (CFR)]]
- ← Dependency: [[Calculation of XIRR (XIRR)]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]
- ← Dependency: [[{ADD}Provided Credit Amount Without Insurance]]
- ← Dependency: [[Net Cash Payment amount definition]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- ← Dependency: [[Down payment]]
- ← Dependency: [[Cash payment definition]]
- ← Dependency: [[Provided Credit Limit definition]]
- ← Dependency: [[Provided Credit Amount definition]]
- ← Dependency: [[{MOD}Fees calculation]]

## 📊 Appears In (5 diagrams)

- Custom: Annuity calculations
- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Financial calculations
- Custom: Financial calculations without insurance
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI

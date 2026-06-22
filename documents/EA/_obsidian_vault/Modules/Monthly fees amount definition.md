---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations"
domain: "Modules"
element_id: 1878860
diagrams: 3
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Monthly fees amount definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations

## 📝 Notes

Monthly fees are tariff items charged regularly in the installments.

Inputs:

	
- Tariff 


	
- chargedToPrinciple


Output:

	
- set of monthly fees (from the input tariff)


Steps:


	
- System finds all TariffItem using Algorithm: Find tariff items by usage with:
- UsageType = 'Standard (A)' or UsageType = 'Service(S)')
- ChargingPeriodicity = IN_INSTALLMENT
- Tariff from input (active version)
- chargedToPrinciple = False
as parameters.

	
- For each TariffItem found in the previous step system calculates amount using Algorithm: Calculate tariff item amount with the following inputs:
- TariffItem
- financial parameters in the form of Offer Financial Parameters that could be calculated at the given time


Note that if a sum of origination fees should be calculated, every found fee is calculated (and rounded - if required) separately.

## 🔗 Connections (6)

- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]
- ← Dependency: [[Total Monthly Payment definition]]
- ← Dependency: [[{ADD}Monthly Payment Without Insurance]]
- ← Dependency: [[First Installment Amount]]
- ← Dependency: [[{MOD}Fees calculation]]

## 📊 Appears In (3 diagrams)

- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Financial calculations
- Custom: Financial calculations without insurance

---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations"
domain: "Modules"
element_id: 1878854
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 In first installment fees amount definition

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations

## 📝 Notes

In first installment fees are tariff items charged once only to first installment.

Inputs:

	
- Tariff


	
- chargedToPrinciple


Output:

	
- set of fees charged to first installment (from the input tariff)


Steps:
 

	
- System finds all TariffItem using Algorithm: Find tariff items by usage with:
- UsageType = 'Standard (A)' or UsageType = 'Service(S)')
- ChargingPeriodicity = IN_FIRST_INSTALLMENT
- Tariff from input (active version)
- chargedToPrinciple = False
as parameters.
	
- For each TariffItem found in the previous step system calculates amount using Algorithm: Calculate tariff item amount with the following inputs:
- TariffItem
- financial parameters in the form of Offer Financial Parameters that could be calculated at the given time


Note that if a sum of origination fees should be calculated, every found fee is calculated (and rounded - if required) separately.

## 🔗 Connections (3)

- ← Dependency: [[First Installment Amount]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- ← Dependency: [[{MOD}Fees calculation]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Financial calculations

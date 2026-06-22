---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1879053
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {ADD}Additional fees calculation

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

{ADD PCG-5310/}
For country: PH
Calculation of additional fees for offer. Fees that will not impact other financial parameters and with specific base type for calculation.

Inputs:

	
- Tariff - mandatory


Output:

	
- set of fees (related to the input tariff)


Steps:

	
- System finds all fees where:
- Tariff = input Tariff (active version)
- TariffItem.PercentageBasedOn = IPINS
	
- System calculates values for each fee identified in the previous step using Algorithm: Calculate tariff item amount with the following inputs:
- particular TariffItem
- financial parameters in the form of Offer Financial Parameters that could be calculated at the given time
- Service (if presents at input)
- price of the related commodity if Service->ServiceType = 'Goods insurance'
- Insurance period start (if present at input)
- Insurance period end (if present at input)

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Offer recalculation]]
- ← Dependency: [[{MOD}Calculate product offer]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]

## 📊 Appears In (3 diagrams)

- Custom: Calculate product offer
- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Offer recalculation

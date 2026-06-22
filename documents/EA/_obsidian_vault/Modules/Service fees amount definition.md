---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1878845
diagrams: 4
connections: 15
tags:
  - requirement
  - modules
---

# 📋 Service fees amount definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

Inputs:

	
- Tariff - mandatory
	
- Service - optional
	
- Insurance period start - optional
	
- Insurance period end - optional


Output:

	
- set of service fees (related to the input tariff)

Each fee can be paid
- in advance (i.e. included in cash payment): TariffItemType.ChargingPeriodicity = 'One_Time' AND TariffItemType.To_Principal = 'FALSE'
- in the installment as not part of annuity: TariffItemType.ChargingPeriodicity = 'In_Installment' AND TariffItemType.To_Principal = 'FALSE'
- in annuities (as part of principal): TariffItemType.ChargingPeriodicity = 'One_Time' AND TariffItemType.To_Principal = 'TRUE'

Steps:

	
- System finds all service fees using Algorithm: Find tariff items by usage with:
- Tariff = input Tariff (active version)
- Usage = 'Service'
as input attributes.
	
- System calculates values for each fee identified in the previous step using Algorithm: Calculate tariff item amount with the following inputs:
- particular TariffItem
- financial parameters in the form of Offer Financial Parameters that could be calculated at the given time
- Service (if presents at input)
- price of the related commodity if Service->ServiceType = 'Goods insurance'
- Insurance period start (if present at input)
- Insurance period end (if present at input)

## 🔗 Connections (15)

- ← Dependency: [[{DEL}Insurance determination]]
- ← Dependency: [[{MOD}Annuity base amount definition]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]
- ← Dependency: [[{ADD}Provided Credit Amount Without Insurance]]
- ← Dependency: [[First Installment Amount]]
- ← Dependency: [[Total Monthly Payment definition]]
- ← Dependency: [[Net Cash Payment amount definition]]
- ← Dependency: [[{ADD}Monthly Payment Without Insurance]]
- ← Dependency: [[Cash payment definition]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- ← Dependency: [[Down payment]]
- ← Dependency: [[Provided Credit Limit definition]]
- ← Dependency: [[{ADD}Insurance service fees]]
- ← Dependency: [[Provided Credit Amount definition]]
- ← Dependency: [[{MOD}Fees calculation]]

## 📊 Appears In (4 diagrams)

- Custom: Annuity calculations
- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Financial calculations
- Custom: Financial calculations without insurance

---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1878850
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Cash Principal calculation

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

In product calculator is used following algorithm: 
CP = (GP + Suma(OF_FIX) + Suma(OF_PERC_GP)*GP) / (1 – Suma(OF_PERC_CP))
where
CP – cash principal 
GP – total goods price (preferred loan amount) from product calculator
OF_PERC_CP – percentage rate of origination fee paid based on CP
OF_FIX – origination fee defined by fixed amount (ChargingPeriodicity = ONE_TIME and flag = TO_PRINCIPAL)
OF_PERC_GP – percentage rate of origination fee based on GP  ChargingPeriodicity = ONE_TIME and flag = TO_PRINCIPAL)

Pre-conditions (if not satisfied then CP is not calculated):

	
- All origination fees are defined by fix amount or by percentage with base CP or GP
	
- No limit is defined on origination fees

## 📊 Appears In (1 diagrams)

- Custom: Financial calculations

---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877826
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Calculation of Flat Rate per month (CFR_M)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type CFR_M

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

Steps: 
System 

	
- Calculates PresentedIRValue per year according to rule Calculation of Flat Rate per year (CFR_Y) with PIRP as parameter.


	
- Recalculates PresentedIRValue = PresentedIRValue/12 (per month).

## 🔗 Connections (2)

- → Dependency: [[Calculation of Flat Rate per year (CFR_Y)]]
- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates

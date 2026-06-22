---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877825
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Calculation customer effective interest rate recalculated for simple interest (APR_Y)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

{ADD PCG-2052/}
// Calculation of PIR - type APR_Y

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

Steps: 

	
- Calculate PresentedIRValue for EIR_M according to the rule Calculation of Effective interest rate per Month (EIR_M) with PIRP as parameter.


	
- PresentedIRValue  = EIR_M * 12

## 🔗 Connections (1)

- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates

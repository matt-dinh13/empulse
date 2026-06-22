---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877832
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Calculation of Effective interest rate per Year (EIR_Y)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type EIR_Y

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

Steps: 

	
- Calculate PresentedIRValue for EIR_M according to the rule Calculation of Effective interest rate per Month (EIR_M) with PIRP as parameter.
	
- If PresentedIRValue <> 0 then calculate PresentedIRValue for EIR_Y = (1 + EIR_M)12 - 1 
where EIR_M = PresentedIRValue for EIR_M.

## 🔗 Connections (2)

- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]
- → Dependency: [[Calculation of Effective interest rate per Month (EIR_M)]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates

---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877821
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Calculation of Effective interest rate per Month (EIR_M)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type EIR_M

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

Steps: 
Calculate EIR_M according to the rule EIR calculation with parameters:

	
- Periods = PIRP.Terms
	
- Payment = - PIRP.TotalMonthlyRepaymentAmount


	
- Principal = PIRP.WithdrawalAmout

## 🔗 Connections (3)

- → Dependency: [[EIR calculation]]
- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]
- ← Dependency: [[Calculation of Effective interest rate per Year (EIR_Y)]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates

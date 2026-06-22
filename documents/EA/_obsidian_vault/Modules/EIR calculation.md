---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877784
diagrams: 5
connections: 3
tags:
  - requirement
  - modules
---

# 📋 EIR calculation

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

This algorithm calculates EIR.

Inputs:

	
- periods
	
- payment
	
- principal


Outputs:

	
- effective interest rate


Algorithm:
Const precession = 0.00000001
Dim ir, x, fx, fdx, n
If payment < 0 Then exit with error
If principal >= 0 Then exit with error
ir = 1
n = 0
Do
  n = n + 1
  x = (1 + ir) ^ (-periods)
  fx = -principal * ir / (1 - x) - payment
  fdx = -principal * (1 - x - ir * periods * x / (1 + ir)) / ((1 - x) ^ 2)
  ir = ir - fx / fdx
  If ir <= -2 + precession Then exit with error
Loop While n < 10 And Abs(fx) > precession
Return ir

## 🔗 Connections (3)

- ← Dependency: [[{ADD}Annuity check]]
- ← Dependency: [[Calculation of Effective interest rate per Month (EIR_M)]]
- ← Dependency: [[Generate installment schedule - Basic algorithm]]

## 📊 Appears In (5 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates
- Custom: Evaluation of Basic Financial Parameters of Product Offer
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI
- Use Case: Generate installment schedule
- Use Case: ISG - Generate installment schedule

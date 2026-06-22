---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1878915
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ISGEN - EIR calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

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

## 🔗 Connections (1)

- ← Dependency: [[ISGEN - Generate installment schedule - Basic]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule

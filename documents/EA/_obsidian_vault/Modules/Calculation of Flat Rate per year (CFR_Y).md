---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877831
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Calculation of Flat Rate per year (CFR_Y)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type CFR_Y
Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

Steps: 
Calculate PresentedIRValue as follows:
PresentedIRValue = (A - C/T) * 12/C
A = PIRP.TotalMonthlyRepaymentAmount
C = PIRP.WithdrawalAmount
T = PIRP.Terms

## 🔗 Connections (2)

- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]
- ← Dependency: [[Calculation of Flat Rate per month (CFR_M)]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates

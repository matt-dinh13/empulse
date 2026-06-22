---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877829
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Calculation of Nominal XIRR (XIRR_N)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

{ADD PCG-5753/}
For country: IN

// Calculation of PIR - type XIRR_N (Nominal XIRR)

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

Steps: 
PresentedIRValue = n * ((1 + XIRR)^(1/n) - 1)
where XIRR is calculated according Calculation of XIRR (XIRR)   
and n= 12

## 🔗 Connections (2)

- → Dependency: [[Calculation of XIRR (XIRR)]]
- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]

## 📊 Appears In (2 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates
- Custom: PCG-5753 BRIN-1220 - APR Computation Logic change

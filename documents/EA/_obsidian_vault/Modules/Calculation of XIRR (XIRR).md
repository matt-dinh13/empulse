---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877833
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Calculation of XIRR (XIRR) 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type XIRR

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

Steps: 
PresentedIRValue is calculated according to XIRR algorithm with parameters
- PIRP.PresentedIRCashFlow
- PIRP.Presented IR Parameters.NominalInterestRate

## 🔗 Connections (4)

- → Dependency: [[XIRR algorithm]]
- → Dependency: [[Origination fees amount definition]]
- ← Dependency: [[{ADD}Calculation of Nominal XIRR (XIRR_N)]]
- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]

## 📊 Appears In (2 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates
- Custom: PCG-5753 BRIN-1220 - APR Computation Logic change

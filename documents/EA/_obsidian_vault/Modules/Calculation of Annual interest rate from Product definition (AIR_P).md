---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877822
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Calculation of Annual interest rate from Product definition (AIR_P) 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type AIR_P

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

Steps: 
PresentedIRValue = PIRP.NominalInterestRate

## 🔗 Connections (1)

- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates

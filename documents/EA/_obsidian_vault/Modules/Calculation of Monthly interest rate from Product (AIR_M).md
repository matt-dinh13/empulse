---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877824
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Calculation of Monthly interest rate from Product (AIR_M)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type AIR_M

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

Steps: 
PresentedIRValue = PIRP.NominalInterestRate / 12

## 🔗 Connections (1)

- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates

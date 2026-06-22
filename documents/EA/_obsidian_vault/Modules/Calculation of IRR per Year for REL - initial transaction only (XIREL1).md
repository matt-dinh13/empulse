---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877835
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Calculation of IRR per Year for REL - initial transaction only (XIREL1)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

Calculation of PIR - type XIREL1

Input: 
- financial parameters of offer/contract (FP)
Only for revolving loans (calculation for debit cards not supported).

Output: 
- Presented IR value (percentage)

Steps: 
Calculate PresentedIR according to the rule XIREL Calculation with FP and XIREL1 as parameters.

## 🔗 Connections (2)

- → Dependency: [[XIREL Calculation]]
- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]

## 📊 Appears In (2 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates
- Custom: XIREL calculation

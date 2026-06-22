---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877834
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Calculation of Presented IRR per month (IRR_M) 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type IRR_M
// Calculated from equal Annuity and Terms without reflection of real repayment date, without reflection of different length of the first period in installment schedule, for CEL

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

PIRCF = PIRP.Presented IR Cash Flow (local copy of cash flow from input)

Steps: 
Calculate PresentedIRValue according to rule Internal Rate of Return calculation where parameter CashFlow is defined as follows:

	
- CashFlow is array of values PIRCF(i).Order, PIRCF(i).Amount, i = [1..N], where N is number of records in PIRCF

## 🔗 Connections (2)

- → Dependency: [[Internal Rate of Return calculation]]
- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates

---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814846
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 End of Deferred Period calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

Inputs:
- DLP (date of loan providing) - if not defined then it is set to current date
- FirstDueDate

Outputs:
- EndOfDeferredPeriod

FirstDueDateMinusOneMonth = date one month before FirstDueDate
EndOfDeferredPeriod = MAX(FirstDueDateMinusOneMonth, DLP) 
If EndOfDeferredPeriod <= DLP then EndOfDeferredPeriod = DLP

## 🔗 Connections (3)

- ← Dependency: [[Deferred Interest calculation]]
- ← Dependency: [[Annuity calculation]]
- ← Dependency: [[{ADD}Annuity without Insurance calculation]]

## 📊 Appears In (4 diagrams)

- Custom: Annuity calculations
- Custom: Financial calculations
- Custom: Financial calculations without insurance
- Logical: Various things

---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms/XIREL calculation"
domain: "Modules"
element_id: 1121360
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Calculation of Billing date for PIR

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms/XIREL calculation

## 📝 Notes

This algorithm is used only for calculation of presented interest rate.
Input: 
- StartDate

Output: 
- BillingDate

Note: Only day 5, 15, 25 are defined as allowed to be Billing day
D = Day(StartDate)
M = Month(StartDate)
Y = Year(StartDate)

If D < 5 and M = 1 then BillingDate = Date(25, 12, Y - 1)
If D < 5 and M > 1 then BillingDate = Date(25, M - 1, Y)
If D >= 5 and  D < 15 then BillingDate = Date(5, M, Y)
If D >= 15 and  D < 25 then BillingDate = Date(15, M, Y)
If D >= 25 then BillingDate = Date(25, M, Y)

## 🔗 Connections (1)

- ← Dependency: [[Collection of initial parameters for XIREL calculation]]

## 📊 Appears In (1 diagrams)

- Custom: XIREL calculation

---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Presented Interest Rate"
domain: "Analysis Model"
element_id: 1584584
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Presented interest rate in Grids

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Presented Interest Rate

## 📝 Notes

Way of displaying Presented Interest Rates (PIRs) in a column of any grid (e.g. Product offer search grid).

Input:
- target (Offer/Contract)

PIRs are evaluated according to the rule List of Presented IR for defined target, only values for case = STANDARD are displayed.
In column of grid is displayed value from the 1st returned record.
If there are more than one records returned then a bubble (tooltip) is attached to the value in grid with list of records (name and value, separated by space, each record in separate row, ordered by order).

## 🔗 Connections (4)

- → Dependency: [[List of Presented IR]]
- ← Dependency: [[Current offer]]
- ← Dependency: [[Available optional offers]]
- ← Dependency: [[Product offer search result]]

## 📊 Appears In (2 diagrams)

- Custom: Presented Interest Rate
- Custom: Product Offers in Contract detail

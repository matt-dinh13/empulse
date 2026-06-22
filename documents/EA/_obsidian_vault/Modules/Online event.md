---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Accounting Events"
domain: "Modules"
element_id: 1742120
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Online event

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Accounting Events

## 📝 Notes

Event criteria are checked during contract debt recalculation
If the criteria are fulfilled, new account event request is created 

1. TRESHOLD (DPD_30, DPD_90, DPD_1PLUS)
- new DPD > treshold and old DPD < treshold 
2. CURE (DPD_0)
- new DPD = 0 and old DPD > 0

## 🔗 Connections (2)

- → Dependency: [[Accounting Event]]
- → Dependency: [[Accounting Even Type]]

## 📊 Appears In (1 diagrams)

- Custom: Accounting Events

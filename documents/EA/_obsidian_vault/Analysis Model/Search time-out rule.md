---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules"
domain: "Analysis Model"
element_id: 1623726
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Search time-out rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules

## 📝 Notes

Search time-out is defined as a system parameter (not changeable by user). If the search is not completed in the defined interval, the search is canceled and the user is informed via MSG_XXX.

## 🔗 Connections (2)

- → Aggregation: [[Search with unlimited number of results]]
- → Aggregation: [[Search with limited number of results]]

## 📊 Appears In (1 diagrams)

- Custom: Search results

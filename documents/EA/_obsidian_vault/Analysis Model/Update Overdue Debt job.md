---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855615
diagrams: 4
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Update Overdue Debt job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: UPDATE_OVERDUE_DEBT
Description: Updating overdue debt on contracts
Used for: UC01_475

Number of starts min: 1 per day
Time of start: 00:01
Max number of starts: 1
Business impact: CRITICAL

## 🔗 Connections (1)

- → Dependency: [[Current day at 00_01]]

## 📊 Appears In (4 diagrams)

- Custom: Automatic jobs
- Use Case: Contract debt tracking
- Use Case: Contract finishing after DC recalculation
- Use Case: OVERVIEW - Installment Schedule

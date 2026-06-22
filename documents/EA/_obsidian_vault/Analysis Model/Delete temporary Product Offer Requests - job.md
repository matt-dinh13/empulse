---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855600
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Delete temporary Product Offer Requests - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: PROD_CALC_REQUEST_DELETE
Description: Automatically deletes expired temporary requests for product offer calculation
Used for: UC02_825

Number of starts min: 1 per day
Time of start: SCHED_ONCE_A_DAY
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (2)

- ← Dependency: [[02.825 Delete temporary Product Offer Requests (UseCase 1820905)]]
- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Product Calculator for External system - Internal

---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855617
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Contract cancellation

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: CONTRACT_AUTO_CANCEL
Description: Automatically cancel inactive contracts
Used for: UC01_670

Number of starts min: 1 per day
Time of start: SCHED_ONCE_A_DAY
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (2)

- ← Dependency: [[01.670 Cancel contract automatically (UseCase 1850513)]]
- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs

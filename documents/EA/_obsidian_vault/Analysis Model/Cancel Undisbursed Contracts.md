---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855599
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Cancel Undisbursed Contracts

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: CONTRACT_CANCEL_UNDISBURSED
Description: Automatically cancel undisbursed contracts
Used for: UC01_445

Number of starts min: 1 per day
Time of start: SCHED_ONCE_A_DAY (20:00)
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (2)

- ← Dependency: [[01.445 Cancel undisbursed contract (UseCase 1850500)]]
- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs

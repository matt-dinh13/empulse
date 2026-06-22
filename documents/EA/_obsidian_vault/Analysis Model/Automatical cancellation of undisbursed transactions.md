---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855609
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Automatical cancellation of undisbursed transactions

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: TRANSACTION_CANCEL_UNDISBURSED
Description: Automatically cancel undisbursed transaction
Used for: UC13_406

Number of starts min: 1 per day
Time of start: SCHED_ONCE_A_DAY
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (1)

- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs

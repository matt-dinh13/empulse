---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855606
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Contract reactivation job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: REACTIVATE_FINISHED_CONTRACTS
Description: It checks "finished" contract for an outstanding debt to reactivate them
Used for: UC 01.720

Number of starts min: 1 per day
Time of start: SCHED_ONCE_A_DAY(22:00)
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.720 Reactivate finished contracts]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Contract reactivation

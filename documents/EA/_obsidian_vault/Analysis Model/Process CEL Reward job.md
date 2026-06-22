---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855625
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Process CEL Reward job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

{ADD CBL-109 /}
Automatic job code: PROCESS_CEL_Reward
Description: Evaluation of CEL Rewards service and estimation of the new evaluated period
Used for: UC 08.502

Number of starts min: 1 per day
Time of start: optimally just after midnight
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (2)

- ← Dependency: [[08.602 Select CEL Rewards contracts (UseCase 1850691)]]
- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: CEL Rewards 

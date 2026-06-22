---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855630
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 DDM Statements Export

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: DDM_STAT_EXPORT 
Description: Automatically exports DDM statements for banks (encashment)
Used for: UC05_130

Number of starts min: 1 per day
Time of start: ?
Max number of starts: not limited
Business impact: CRITICAL

## 🔗 Connections (2)

- → Dependency: [[Once a day (Activity 1855638)]]
- ← Dependency: [[05.130 Generate DD statements (UseCase 1863204)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Direct Debit statements

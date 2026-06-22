---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855614
diagrams: 4
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}DPD statistics recalculation job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

{DEL CLM-2841 /}

Automatic job code: DEBT_STATISTICS_RECALCULATION
Description: Recalculate all debt statistics for external systems
Used for: UC01_482

Number of starts min: 1 per day
Time of start: when UPDATE_OVERDUE_DEBT is finished
Max number of starts: not limited
Business impact: LOW

## 📊 Appears In (4 diagrams)

- Custom: Automatic jobs
- Use Case: Contract debt tracking
- Use Case: Contract finishing after DC recalculation
- Use Case: OVERVIEW - Installment Schedule

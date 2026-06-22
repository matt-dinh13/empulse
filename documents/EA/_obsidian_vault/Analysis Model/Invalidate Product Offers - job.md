---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855588
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Invalidate Product Offers - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: INVALIDATE_OFFERS
Description: Automatically deletes expired product offers
Used for: UC01_681

Number of starts min: 1 per day
Time of start: SCHED_ONCE_A_DAY
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.681 Invalidate offers]]
- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Invalidate offers

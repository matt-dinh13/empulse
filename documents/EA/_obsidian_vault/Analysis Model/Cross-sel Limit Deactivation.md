---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855629
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Cross-sel Limit Deactivation

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: CROSS-SEL_LIMIT_DEACTIVATE
Description: Automatically change sub-status of contract due to expire x-sell limit
Used for: UC01_089

Number of starts min: 1 per day
Time of start: Outside business hours
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.089 Invalidate cross-sell limits]]
- → Dependency: [[After business hours]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Invalidate cross-sell limit

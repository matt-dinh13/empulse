---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Use Case Model"
domain: "Analysis Model"
element_id: 1855595
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Cancel signed contract with invalid commodity

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Use Case Model

## 📝 Notes

{ADD CLM-1233 /}
Code: CONTRACT_CANCEL_INVALID_COMMODITY
Description: Automatically cancel contracts with non-validated commodity
Used for: UC01_331

Number of starts min: 1 per day
Time of start: SCHED_ONCE_A_DAY (outside business hours; e.g. 22:00)
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (1)

- ← Dependency: [[01.331 Cancel signed contract with invalid commodity (UseCase 1850492)]]

## 📊 Appears In (1 diagrams)

- Use Case: Cancel contract automatically

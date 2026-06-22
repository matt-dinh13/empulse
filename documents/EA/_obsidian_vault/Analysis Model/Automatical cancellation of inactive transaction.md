---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855627
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Automatical cancellation of inactive transaction

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: TRANSACTION_AUTO_CANCEL
Description: Automatically cancel inactive transaction
Used for: UC13_405

Number of starts min: 2 times per hour
Time of start: Every 25 minutes
Max number of starts: not limited
Business impact: MEDIUM

## 🔗 Connections (1)

- → Dependency: [[Every 25 minutes]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs

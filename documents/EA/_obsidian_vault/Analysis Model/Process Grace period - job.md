---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855607
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Process Grace period - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: GRACE_PERIOD_PROCESSING
Description: Checking conditions for granting of Grace period benefit and processing if granted
Used for: UC 08.240

Number of starts min: 1 per day
Time of start: after processing of incoming payments
Max number of starts: not limited
Business impact: MEDIUM

## 🔗 Connections (2)

- → Dependency: [[After processing of incoming payments]]
- ← Dependency: [[08.240 Process Grace period automatically (UseCase 1869019)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Grace period processing

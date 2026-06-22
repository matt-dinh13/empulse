---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855619
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Process CET early repayment job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: CET_PROCESSING
Description: It chooses contracts for CET service evaluation and processes them if selected
Used for: UC 08.285

Number of starts min: 1 per day
Time of start: after processing of incoming payments
Max number of starts: not limited
Business impact: MEDIUM

## 🔗 Connections (2)

- → Dependency: [[After processing of incoming payments]]
- ← Dependency: [[08.285 Select contracts for CET evaluation (UseCase 1862249)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Contract Early Termination processing

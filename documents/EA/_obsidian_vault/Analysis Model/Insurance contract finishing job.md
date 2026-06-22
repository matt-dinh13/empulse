---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855591
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Insurance contract finishing job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: INS_CONTRACT_FINISHING
Description: Terminating of finished insurance contracts
Used for: UC 11.130

Number of starts min: 1 per day
Time of start: Before business hours
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (2)

- → Dependency: [[Before business hours]]
- ← Dependency: [[11.130 Terminate finished insurance contracts (UseCase 1878975)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Termination of Insurance contract options

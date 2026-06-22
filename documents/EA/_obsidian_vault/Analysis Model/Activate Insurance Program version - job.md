---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855596
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Activate Insurance Program version - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: INSURANCE_PROGRAM_VERSION_ACTIVATION
Description: Activation of insurance program versions with planned activation date
Used for: UC 08.590

Number of starts min: 1 per day
Time of start: optimally five minutes before midnight
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (2)

- ← Dependency: [[08.590 Activate Insurance Program version automatically (UseCase 1517633)]]
- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Manage Insurance Program

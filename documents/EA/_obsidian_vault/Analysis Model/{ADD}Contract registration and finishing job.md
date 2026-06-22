---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855610
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Contract registration and finishing job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

{ADD CLM-2022 /}
Automatic job code: CONTRACT_REGISTR_FINISH
Description: Choosing and gathering repaid contracts suitable to registration and finish
Used for: UC 01.279

Number of starts min: 1 per day
Time of start: Outside business hours
Max number of starts: not limited
Business impact: LOW

Used only for KZ.

## 🔗 Connections (1)

- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Contract registration

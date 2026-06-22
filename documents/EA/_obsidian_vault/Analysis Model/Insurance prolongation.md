---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855611
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Insurance prolongation

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: INSURANCE_PROLONGATION
Description: Prolong insurance (create new insurance period when the old period finishes).
Used for: UC 11.081

Number of starts min: 1 per day
Time of start: Before business hours
Max number of starts: not limited
Business impact: MEDIUM

## 🔗 Connections (2)

- → Dependency: [[Before business hours]]
- ← Dependency: [[11.081 Prolong insurance contracts]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Insurance prolongation

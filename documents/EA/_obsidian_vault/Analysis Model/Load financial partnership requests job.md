---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855608
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Load financial partnership requests job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: FINANCIAL_PARTNERSHIP
Description: Loading of financial partnership requests
Used for: UC01_872

Number of starts min: 1 per day
Time of start: after business hours is preferred
Max number of starts: not limited
Business impact: MEDIUM

Batch up to 200 000 records in one file

## 🔗 Connections (2)

- ← Dependency: [[{DEL}01.872 Load financial partnership requests (UseCase 1713673)]]
- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs

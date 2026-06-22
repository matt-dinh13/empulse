---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855590
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get prepared data from external storage job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: CREDIT_LIMIT_CHANGE
Description: It runs download of data file from an external file server directory
Used for: UC01.522 Get prepared data from external system

Number of starts min: 1 per day
Time of start: after business hours is preferred
Max number of starts: not limited
Business impact: MEDIUM

## 🔗 Connections (2)

- ← Dependency: [[01.522 Get prepared data from external system (UseCase 1853931)]]
- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Data prepared notification - UC model

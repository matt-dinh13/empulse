---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855626
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Push Debt Catalogue Data job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: PUSH_DEBT_CATALOGUE
Description: Regularly sends changed debt catalogue data to external collections system.
Used for: UC 01.472

Number of starts min: 1 per day
Time of start: Every 5 minutes
Max number of starts: Not limited
Business impact: MEDIUM

## 🔗 Connections (1)

- → Dependency: [[Every 5 minutes]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs

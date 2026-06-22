---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855601
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Process debt catalogue requests job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: DEBT_CATALOGUE_REQUESTS
Description: Recalculate debt catalogues based on requests in DB table BSL_DEBT_CATALOGUE_REQ
Used for: UC01_477

Number of starts min: 1 per day
Time of start: every first minute of every 2nd hour (00:01, 02:01, 04:01...)
Max number of starts: 12
Business impact: CRITICAL

## 🔗 Connections (2)

- → Dependency: [[Every 2 hours]]
- → Dependency: [[01.477 Process debt catalogue requests job (UseCase 1876062)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Contract debt tracking

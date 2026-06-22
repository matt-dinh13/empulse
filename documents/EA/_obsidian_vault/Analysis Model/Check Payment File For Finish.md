---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855602
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check Payment File For Finish

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: CHECK_PAYMENT_FILE_FINISH
Description: Checking of unprocessed incoming payment files whether can be finished.
Used for: 05.298 Check incoming payment file for finish

Number of starts min: 1 per day
Time of start: regularly every 5 minutes
Max number of starts: not limited
Business impact: CRITICAL

## 🔗 Connections (1)

- → Dependency: [[Every 5 minutes]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Pairing incoming payments from file

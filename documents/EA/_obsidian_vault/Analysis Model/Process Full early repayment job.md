---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855592
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Process Full early repayment job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: FER_PROCESSING
Description: It chooses contracts for Full early repayment service evaluation and processes them if granted
Used for: UC 08.040

Number of starts min: 1 per day
Time of start: after processing of all incoming payments in the current business day
Max number of starts: not limited
Business impact: MEDIUM

## 🔗 Connections (2)

- → Dependency: [[After processing of incoming payments]]
- ← Dependency: [[08.040 Select contracts for FER evaluation (UseCase 1879639)]]

## 📊 Appears In (3 diagrams)

- Custom: Automatic jobs
- Custom: PAYM-1484 (CBL-4071) Full Early Repayment/Cooling Off Services Automation
- Use Case: Full early repayment processing

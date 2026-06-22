---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855620
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Activate Disbursed Contracts

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: CONTRACT_ACTIVATE_DISBURSED
Description: Automatically activate disbursed contracts
Used for: UC01_274

Number of starts min: 1 per day
Time of start: SCHED_ONCE_A_DAY
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (2)

- → Dependency: [[Once a day (Activity 1855638)]]
- ← Dependency: [[{MOD}01.274 Activate disbursed contracts]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Activation of contract on a repayment

---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855624
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Process INS outgoing payments

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

{ADD CBL-3618 PAYM-3347}
Automatic job code: AUTO_PAYABLE_INS_OP
Description: Checking of INS outgoing payment for automatic disbursement when conditions are met
Used for: 05.111

Number of starts min: 1 per day
Time of start: 01:00
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (1)

- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs

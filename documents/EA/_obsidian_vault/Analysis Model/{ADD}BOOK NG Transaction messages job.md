---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855628
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}BOOK NG Transaction messages job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: BOOK_NG_TRANSACTION_MSG
Description: Generating ISIR messages for next installment of contracts due yesterday
Used for: UC03_011

Number of starts min: 1 per day
Time of start: 00:01
Max number of starts: 1
Business impact: MEDIUM

## 🔗 Connections (2)

- → Dependency: [[Current day at 00_01]]
- ← Dependency: [[{ADD}03.011 Generate daily transaction messages for BOOK NG (UseCase 1879442)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Daily ISIR generating for BOOK NG

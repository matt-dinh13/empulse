---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/Partner and Salesroom Statechart Model"
domain: "Analysis Model"
element_id: 1166511
diagrams: 1
connections: 3
tags:
  - state
  - analysis-model
---

# 🔄 Blocked (B)

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/Partner and Salesroom Statechart Model

## 📝 Notes

Partner / salesroom can be blocked because of different reasons (e.g. fraud suspicion). Blocked partner / salesroom can’t offer HC products and in some cases payments will not be sent to blocked partner.

## 🔗 Connections (3)

- → StateFlow: [[Closed (C)]]
- → StateFlow: [[Active (A)]]
- ← StateFlow: [[Active (A)]]

## 📊 Appears In (1 diagrams)

- Statechart: Partner and Salesroom statechart

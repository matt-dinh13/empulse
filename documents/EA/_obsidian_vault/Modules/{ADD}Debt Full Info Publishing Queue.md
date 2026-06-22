---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1875688
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}Debt Full Info Publishing Queue

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Logical Data Model

## 📝 Notes

{ADD PBR-830 /}
Queue tracking contracts for which debt full info needs to be calculated and published. 

Currently used for publishing CEL contract debt full info via DebtFullInfoMessage notification.

DebtFullInfoMessage and AccountBalanceChangeRequest ->AccountBalanceChangeDto can replace Debt Statistics in the future - Debt Statistics.Maximum Overdue Debt In History can be deduced from AccountBalanceChangeDto history, and Debt Statistics.Maximal DPD in history can be calculated from DebtFullInfoMessage -> DebtInstallmentDto by the consuming system. If the Debt Statistics has to be kept for some reason, still the calculation queue can be used as an optimized way for changed contract selection.

## 🔗 Connections (1)

- → Association: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract debt tracking

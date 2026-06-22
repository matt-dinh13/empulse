---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/User Interface"
domain: "Analysis Model"
element_id: 1747007
diagrams: 1
connections: 2
tags:
  - screen
  - analysis-model
---

# 📱 Set new fee for change due date

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/User Interface

## 📝 Notes

{ADD PBR-162 /}
Enables change amount of fee.

Enable:
Only if all the following conditions are fulfilled:
- CHDD_Fee was determined (i.e. appropriate Tariff -> Tariff Item [where related Tariff Item Type.Usage = DD] has been found in the controlling use case)
- the user has an access right 08.062 Create request for change due date - change fee.

After confirmation the form the system prepares a set of change due date simulations according to the rule Preapre change due date simulation and refresh the grid with due date simulations.

Localization code:
SER_SetNewFeeCHDDScreen

## 🔗 Connections (2)

- → Dependency: [[Prepare change due date simulation]]
- ← Association «navigate»: [[Set new fee]]

## 📊 Appears In (1 diagrams)

- Custom: Create request for Change due date

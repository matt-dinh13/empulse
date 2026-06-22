---
type: GUIElement
stereotype: "list"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822389
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Salesroom

> **Type**: GUIElement · **Stereotype**: «list»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

## 📝 Notes

Contains all salesrooms where current user is DSM or any of current user's subordinates is DSM. Values are displayed as Salesroom.Code in brackets and Salesroom.Name.

All displayed items are preselected by default.

Source: Salesroom.DistrictSalesManager and User2Supervisor.Supervisor

Localization code: PAR_Salesrooms

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Search for contract

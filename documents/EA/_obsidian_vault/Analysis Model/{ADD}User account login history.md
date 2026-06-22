---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail"
domain: "Analysis Model"
element_id: 1686969
diagrams: 1
connections: 1
tags:
  - screen
  - analysis-model
---

# 📱 {ADD}User account login history

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail

## 📝 Notes

Displays a list of login attempts for a selected user account

Source: response of https://api.homecredit.net/credstore/v1/users/{userId}/logins?sort=-started&limit=25 where userId = *.id

## 🔗 Connections (1)

- ← Dependency: [[Show login history]]

## 📊 Appears In (1 diagrams)

- Custom: Tab User accounts

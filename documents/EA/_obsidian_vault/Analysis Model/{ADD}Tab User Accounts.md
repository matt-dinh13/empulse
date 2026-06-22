---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail"
domain: "Analysis Model"
element_id: 1686955
diagrams: 1
connections: 1
tags:
  - screen
  - analysis-model
---

# 📱 {ADD}Tab User Accounts

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail

## 📝 Notes

Displays a list of local application user accounts of a client based on CUID

Source: response of https://api.homecredit.net/credstore/v1/users?filter=cuid|contains|cuid:{cuid}&limit=1000 where cuid = CUID of a client whom detail is currently displayed

## 📊 Appears In (1 diagrams)

- Custom: Tab User accounts

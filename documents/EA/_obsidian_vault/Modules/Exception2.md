---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model"
domain: "Modules"
element_id: 1875399
diagrams: 1
connections: 3
tags:
  - decision
  - modules
---

# 🔀 Exception2

> **Type**: Decision
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model

## 🔗 Connections (3)

- → ControlFlow: [[System performs validations that the file name is of a correct format and that the same file has not]]
- ← ControlFlow: [[System checks that selected file really exists in importing directory and that its file size is equa]]
- → ControlFlow: [[System displays message that the file is too large (MSG_0190 with file size as parameter).]]

## 📊 Appears In (1 diagrams)

- Activity: 05.010 Import incoming payment file_ActivityGraph

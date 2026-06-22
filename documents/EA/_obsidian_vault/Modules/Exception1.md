---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model"
domain: "Modules"
element_id: 1875400
diagrams: 1
connections: 3
tags:
  - decision
  - modules
---

# 🔀 Exception1

> **Type**: Decision
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model

## 🔗 Connections (3)

- → ControlFlow: [[User selects one file to upload.]]
- ← ControlFlow: [[System reads importing directory on external storage (global parameter ImportingPaymentsDirectory) a]]
- → ControlFlow: [[System displays infomrs that the importing directory is unreachable (MSG_0098).]]

## 📊 Appears In (1 diagrams)

- Activity: 05.010 Import incoming payment file_ActivityGraph

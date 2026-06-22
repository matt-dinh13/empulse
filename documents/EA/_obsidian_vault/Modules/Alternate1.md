---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model"
domain: "Modules"
element_id: 1875389
diagrams: 1
connections: 3
tags:
  - decision
  - modules
---

# 🔀 Alternate1

> **Type**: Decision
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model

## 🔗 Connections (3)

- → ControlFlow: [[System goes back to choosing file upload.]]
- → ControlFlow: [[User confirms that he wants to import the selected file (MSG_0187).]]
- ← ControlFlow: [[Exception3]]

## 📊 Appears In (1 diagrams)

- Activity: 05.010 Import incoming payment file_ActivityGraph

---
type: Activity
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model"
domain: "Modules"
element_id: 1875395
diagrams: 1
connections: 2
tags:
  - activity
  - modules
---

# ⚡ System checks that selected file really exists in importing directory and that its file size is equal to or lower than defined maximum (global parameter maxFileSize).

> **Type**: Activity
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model

## 🔗 Connections (2)

- → ControlFlow: [[Exception2]]
- ← ControlFlow: [[User selects one file to upload.]]

## 📊 Appears In (1 diagrams)

- Activity: 05.010 Import incoming payment file_ActivityGraph

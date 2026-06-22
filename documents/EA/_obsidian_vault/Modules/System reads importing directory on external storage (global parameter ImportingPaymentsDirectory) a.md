---
type: Activity
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model"
domain: "Modules"
element_id: 1875387
diagrams: 1
connections: 5
tags:
  - activity
  - modules
---

# ⚡ System reads importing directory on external storage (global parameter ImportingPaymentsDirectory) and displays list of contained files (see 2.11.1 Import files grid). If no files for import are found, system informs the user about the incident (MSG_0025)

> **Type**: Activity
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model

## 🔗 Connections (5)

- ← ControlFlow: [[System continues from reading importing directory.]]
- ← ControlFlow: [[System continues from reading directory. (Activity 1875394)]]
- ← ControlFlow: [[System continues from reading importing directory. (Activity 1875402)]]
- → ControlFlow: [[Exception1]]
- ← ControlFlow: [[User requests import of incoming payments.]]

## 📊 Appears In (1 diagrams)

- Activity: 05.010 Import incoming payment file_ActivityGraph

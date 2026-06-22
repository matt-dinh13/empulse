---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Statechart model"
domain: "Analysis Model"
element_id: 1018600
diagrams: 1
connections: 8
tags:
  - state
  - analysis-model
---

# 🔄 NEW (New)

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Statechart model

## 🔗 Connections (8)

- → StateFlow: [[NEW (New)]]
- ← StateFlow: [[NEW (New)]]
- → StateFlow: [[CNC (Canceled)]]
- ← StateFlow: [[01.420 DDM created at back office]]
- → StateFlow: [[AVAIL (Available)]]
- → StateFlow: [[AVAIL (Available)]]
- ← StateFlow: [[01.080 DDM created in application form]]
- → Dependency «trace»: [[U (Unknown)]]

## 📊 Appears In (1 diagrams)

- Statechart: DDM Statechart model

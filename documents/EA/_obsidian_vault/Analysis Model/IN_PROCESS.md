---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tool service lifecycle"
domain: "Analysis Model"
element_id: 965138
diagrams: 1
connections: 7
tags:
  - state
  - analysis-model
---

# 🔄 IN_PROCESS

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tool service lifecycle

## 🔗 Connections (5)

- → StateFlow: [[Synch (StateNode 965139)]]
- → StateFlow: [[Synch]]
- → StateFlow: [[APPROVED]]
- ← StateFlow: [[DRAFT]]
- ← Dependency: [[Contract Supplement]]

## 📊 Appears In (1 diagrams)

- Statechart: Collection tool service request lifecycle

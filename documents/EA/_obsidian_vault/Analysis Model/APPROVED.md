---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tool service lifecycle"
domain: "Analysis Model"
element_id: 965133
diagrams: 1
connections: 6
tags:
  - state
  - analysis-model
---

# 🔄 APPROVED

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tool service lifecycle

## 🔗 Connections (5)

- ← StateFlow: [[IN_PROCESS]]
- → StateFlow: [[Synch (StateNode 965139)]]
- → StateFlow: [[SIGNED]]
- ← Dependency: [[Not Ready for Registration]]
- ← Dependency: [[Ready for Registration]]

## 📊 Appears In (1 diagrams)

- Statechart: Collection tool service request lifecycle

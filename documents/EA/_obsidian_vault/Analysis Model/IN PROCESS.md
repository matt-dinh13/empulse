---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Credit limit change lifecycle"
domain: "Analysis Model"
element_id: 1861705
diagrams: 1
connections: 6
tags:
  - state
  - analysis-model
---

# 🔄 IN PROCESS

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Credit limit change lifecycle

## 🔗 Connections (5)

- → StateFlow: [[APPROVED (State 1861708)]]
- → StateFlow: [[REJECTED (State 1861706)]]
- → StateFlow: [[CANCELED (State 1861704)]]
- ← StateFlow: [[Initial (StateNode 1861703)]]
- → Dependency: [[13.070 Process credit limit change request]]

## 📊 Appears In (1 diagrams)

- Statechart: Credit limit change lifecycle

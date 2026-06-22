---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Credit limit change lifecycle"
domain: "Analysis Model"
element_id: 1861708
diagrams: 1
connections: 8
tags:
  - state
  - analysis-model
---

# 🔄 APPROVED

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Credit limit change lifecycle

## 🔗 Connections (6)

- → StateFlow: [[REJECTED (State 1861706)]]
- ← StateFlow: [[IN PROCESS]]
- → StateFlow: [[CANCELED (State 1861704)]]
- → StateFlow: [[SIGNED (State 1861701)]]
- → StateFlow: [[ACCEPTED (State 1861700)]]
- → Dependency: [[13.450 Process supplement approval result]]

## 📊 Appears In (1 diagrams)

- Statechart: Credit limit change lifecycle

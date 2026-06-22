---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Credit limit change lifecycle"
domain: "Analysis Model"
element_id: 1861704
diagrams: 1
connections: 6
tags:
  - state
  - analysis-model
---

# 🔄 CANCELED

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Credit limit change lifecycle

## 🔗 Connections (6)

- ← StateFlow: [[APPROVED (State 1861708)]]
- ← StateFlow: [[IN PROCESS]]
- → StateFlow: [[Final (StateNode 1861707)]]
- ← StateFlow: [[SIGNED (State 1861701)]]
- → Dependency: [[13.450 Process supplement approval result]]
- → Dependency: [[13.052 Process account notification for credit limit change]]

## 📊 Appears In (1 diagrams)

- Statechart: Credit limit change lifecycle

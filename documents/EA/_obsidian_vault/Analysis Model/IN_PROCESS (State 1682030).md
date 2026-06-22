---
type: State
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model/Transaction Supplement lifecycle"
domain: "Analysis Model"
element_id: 1682030
diagrams: 1
connections: 5
tags:
  - state
  - analysis-model
---

# 🔄 IN_PROCESS

> **Type**: State
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model/Transaction Supplement lifecycle

## 🔗 Connections (4)

- ← StateFlow: [[Create Transaction Supplement request]]
- → StateFlow: [[CANCELED]]
- → StateFlow: [[REJECTED (State 1682024)]]
- → StateFlow: [[APPROVED (State 1682023)]]

## 📊 Appears In (1 diagrams)

- Statechart: Transaction Supplement lifecycle

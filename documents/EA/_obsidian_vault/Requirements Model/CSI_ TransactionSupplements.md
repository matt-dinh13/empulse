---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination/Transaction with VAS refunding"
domain: "Requirements Model"
element_id: 1762621
diagrams: 1
connections: 8
tags:
  - sequence
  - requirements-model
---

# 📄 CSI:
TransactionSupplements

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination/Transaction with VAS refunding

## 🔗 Connections (8)

- → Sequence: [[CSI_ TransactionSupplements]]
- ← Sequence: [[CSI_ TransactionSupplements]]
- → Sequence: [[CSI_ TransactionSupplements]]
- ← Sequence: [[CSI_ TransactionSupplements]]
- ← Sequence: [[External System (Actor 1762612)]]
- ← Sequence: [[Message Bus am.direct.incoming.transaction am.topic.transaction.cancellation.reply]]
- → Sequence: [[Message Bus am.direct.incoming.transaction am.topic.transaction.cancellation.reply]]
- → Sequence: [[Message Bus bsl.contract-supplement]]

## 📊 Appears In (1 diagrams)

- Sequence: Transaction with VAS refunding

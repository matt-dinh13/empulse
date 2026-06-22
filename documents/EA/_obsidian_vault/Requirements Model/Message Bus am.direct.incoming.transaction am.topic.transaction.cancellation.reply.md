---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination/Transaction with VAS refunding"
domain: "Requirements Model"
element_id: 1762617
diagrams: 1
connections: 4
tags:
  - sequence
  - requirements-model
---

# 📄 Message Bus
am.direct.incoming.transaction
am.topic.transaction.cancellation.reply

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination/Transaction with VAS refunding

## 🔗 Connections (4)

- → Sequence: [[CSI_ TransactionSupplements]]
- → Sequence: [[AM (Sequence 1762618)]]
- ← Sequence: [[AM (Sequence 1762618)]]
- ← Sequence: [[CSI_ TransactionSupplements]]

## 📊 Appears In (1 diagrams)

- Sequence: Transaction with VAS refunding

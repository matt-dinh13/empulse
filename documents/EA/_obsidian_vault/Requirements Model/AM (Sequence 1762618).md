---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination/Transaction with VAS refunding"
domain: "Requirements Model"
element_id: 1762618
diagrams: 1
connections: 14
tags:
  - sequence
  - requirements-model
---

# 📄 AM

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21184 (CSI-2626) EMI VAS Cancellation & Termination/Transaction with VAS refunding

## 🔗 Connections (14)

- → Sequence: [[AM (Sequence 1762618)]]
- ← Sequence: [[AM (Sequence 1762618)]]
- → Sequence: [[AM (Sequence 1762618)]]
- ← Sequence: [[AM (Sequence 1762618)]]
- → Sequence: [[AM (Sequence 1762618)]]
- ← Sequence: [[AM (Sequence 1762618)]]
- → Sequence: [[SIR (Sequence 1762622)]]
- → Sequence: [[AM (Sequence 1762618)]]
- ← Sequence: [[AM (Sequence 1762618)]]
- ← Sequence: [[Message Bus csi.contractservice]]
- ← Sequence: [[External System (Actor 1762612)]]
- ← Sequence: [[External System (Actor 1762612)]]
- ← Sequence: [[Message Bus am.direct.incoming.transaction am.topic.transaction.cancellation.reply]]
- → Sequence: [[Message Bus am.direct.incoming.transaction am.topic.transaction.cancellation.reply]]

## 📊 Appears In (1 diagrams)

- Sequence: Transaction with VAS refunding

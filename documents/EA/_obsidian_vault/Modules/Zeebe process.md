---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-30268 (CSI-4570) Debt Purchase support"
domain: "Modules"
element_id: 1881308
diagrams: 1
connections: 22
tags:
  - sequence
  - modules
---

# 📄 Zeebe process

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-30268 (CSI-4570) Debt Purchase support

## 🔗 Connections (22)

- → Sequence: [[Zeebe process]]
- ← Sequence: [[Zeebe process]]
- → Sequence «Rabbit MQ»: [[BSL (Sequence 1881312)]]
- ← Sequence «Rabbit MQ»: [[BSL (Sequence 1881312)]]
- → Sequence «REST API»: [[PIF (Sequence 1881310)]]
- ← Sequence «Rabbit MQ»: [[BSL (Sequence 1881312)]]
- ← Sequence «Rabbit MQ»: [[BSA (Sequence 1881311)]]
- ← Sequence: [[BSL (Sequence 1881312)]]
- → Sequence «REST API»: [[BSL (Sequence 1881312)]]
- ← Sequence: [[BSL (Sequence 1881312)]]
- ← Sequence «Rabbit MQ»: [[BSL (Sequence 1881312)]]
- → Sequence «Rabbit MQ»: [[BSA (Sequence 1881311)]]
- → Sequence «Rabbit MQ»: [[BSA (Sequence 1881311)]]
- → Sequence «Rabbit MQ»: [[BSL (Sequence 1881312)]]
- ← Sequence «Rabbit MQ»: [[BSL (Sequence 1881312)]]
- ← Sequence: [[PIF (Sequence 1881310)]]
- → Sequence «Rabbit MQ»: [[BSA (Sequence 1881311)]]
- → Sequence «REST API»: [[BSL (Sequence 1881312)]]
- → Sequence «Rabbit MQ»: [[BSA (Sequence 1881311)]]
- → Sequence «REST API»: [[BSL (Sequence 1881312)]]
- ← Sequence: [[PAYM (Sequence 1881307)]]
- → Sequence «REST API»: [[PAYM (Sequence 1881307)]]

## 📊 Appears In (1 diagrams)

- Sequence: Debt Purchase support - Interaction dia

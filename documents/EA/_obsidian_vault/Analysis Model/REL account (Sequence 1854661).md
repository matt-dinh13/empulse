---
type: Sequence
stereotype: "boundary"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Insurance based on EOM message (new)"
domain: "Analysis Model"
element_id: 1854661
diagrams: 1
connections: 7
tags:
  - sequence
  - analysis-model
---

# 📄 REL account

> **Type**: Sequence · **Stereotype**: «boundary»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Insurance based on EOM message (new)

## 🔗 Connections (7)

- → Sequence: [[11.770 Process account transaction notification]]
- → Sequence: [[REL account (Sequence 1854661)]]
- ← Sequence: [[REL account (Sequence 1854661)]]
- ← Sequence: [[11.770 Process account transaction notification]]
- → Sequence: [[11.773 Process account EOM billing finished message]]
- ← Sequence: [[11.770 Process account transaction notification]]
- ← Sequence: [[11.120 Terminate insurance contract (Sequence 1854669)]]

## 📊 Appears In (1 diagrams)

- Sequence: Insurance based on EOM message

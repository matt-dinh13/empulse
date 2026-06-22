---
type: Sequence
stereotype: "boundary"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model/Credit Limit Change with Doc interaction"
domain: "Analysis Model"
element_id: 1861040
diagrams: 1
connections: 6
tags:
  - sequence
  - analysis-model
---

# 📄 Message bus (RMQ)

> **Type**: Sequence · **Stereotype**: «boundary»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model/Credit Limit Change with Doc interaction

## 🔗 Connections (6)

- → Sequence: [[CSI queue]]
- ← Sequence: [[CreditLimitChange processor]]
- → Sequence: [[LAP (Sequence 1861042)]]
- ← Sequence: [[LAP (Sequence 1861042)]]
- → Sequence: [[CSI queue]]
- ← Sequence: [[AM (Sequence 1861039)]]

## 📊 Appears In (1 diagrams)

- Sequence: Credit Limit Change with Doc interaction

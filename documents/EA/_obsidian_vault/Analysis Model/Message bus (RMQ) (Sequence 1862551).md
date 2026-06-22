---
type: Sequence
stereotype: "boundary"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model/Credit limit change interaction"
domain: "Analysis Model"
element_id: 1862551
diagrams: 1
connections: 6
tags:
  - sequence
  - analysis-model
---

# 📄 Message bus (RMQ)

> **Type**: Sequence · **Stereotype**: «boundary»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model/Credit limit change interaction

## 🔗 Connections (6)

- ← Sequence: [[LAP (Sequence 1862553)]]
- ← Sequence: [[CreditLimitChange processor (Sequence 1862554)]]
- → Sequence: [[LAP (Sequence 1862553)]]
- → Sequence: [[CreditLimitChange processor (Sequence 1862554)]]
- → Sequence: [[CreditLimitChange processor (Sequence 1862554)]]
- ← Sequence: [[AM (Sequence 1862559)]]

## 📊 Appears In (1 diagrams)

- Sequence: Credit Limit Change request - messaging

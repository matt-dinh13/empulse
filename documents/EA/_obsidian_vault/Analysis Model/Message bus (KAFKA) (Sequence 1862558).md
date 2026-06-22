---
type: Sequence
stereotype: "boundary"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model/Credit limit change interaction"
domain: "Analysis Model"
element_id: 1862558
diagrams: 1
connections: 10
tags:
  - sequence
  - analysis-model
---

# 📄 Message bus (KAFKA)

> **Type**: Sequence · **Stereotype**: «boundary»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model/Credit limit change interaction

## 🔗 Connections (10)

- → Sequence: [[PST (Sequence 1862556)]]
- → Sequence: [[PST (Sequence 1862556)]]
- → Sequence: [[CreditLimitChange processor (Sequence 1862554)]]
- ← Sequence: [[CreditLimitChange processor (Sequence 1862554)]]
- ← Sequence: [[CreditLimitChange processor (Sequence 1862554)]]
- ← Sequence: [[CreditLimitChange processor (Sequence 1862554)]]
- → Sequence: [[OfferStore (Sequence 1862552)]]
- → Sequence: [[OfferStore (Sequence 1862552)]]
- ← Sequence: [[OfferStore (Sequence 1862552)]]
- → Sequence: [[OfferStore (Sequence 1862552)]]

## 📊 Appears In (1 diagrams)

- Sequence: Credit Limit Change request - messaging

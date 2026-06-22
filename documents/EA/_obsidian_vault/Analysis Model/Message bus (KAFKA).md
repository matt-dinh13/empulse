---
type: Sequence
stereotype: "boundary"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model/Credit Limit Change with Doc interaction"
domain: "Analysis Model"
element_id: 1861046
diagrams: 1
connections: 15
tags:
  - sequence
  - analysis-model
---

# 📄 Message bus (KAFKA)

> **Type**: Sequence · **Stereotype**: «boundary»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model/Credit Limit Change with Doc interaction

## 🔗 Connections (15)

- → Sequence: [[External system (Sequence 1861047)]]
- → Sequence: [[CSI queue]]
- ← Sequence: [[External system (Sequence 1861047)]]
- → Sequence: [[PST (Sequence 1861044)]]
- → Sequence: [[PST (Sequence 1861044)]]
- → Sequence: [[OfferStore]]
- → Sequence: [[OfferStore]]
- ← Sequence: [[OfferStore]]
- → Sequence: [[OfferStore]]
- ← Sequence: [[CreditLimitChange processor]]
- ← Sequence: [[CreditLimitChange processor]]
- → Sequence: [[CreditLimitChange processor]]
- ← Sequence: [[CreditLimitChange processor]]
- ← Sequence: [[CreditLimitChange processor]]
- ← Sequence: [[CreditLimitChange processor]]

## 📊 Appears In (1 diagrams)

- Sequence: Credit Limit Change with Doc interaction

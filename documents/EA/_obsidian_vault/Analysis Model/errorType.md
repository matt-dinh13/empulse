---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Evidence System/CardEvidenceWS"
domain: "Analysis Model"
element_id: 1506226
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ErrorType

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Evidence System/CardEvidenceWS

## 🔗 Connections (5)

- ← Dependency: [[DeleteCardResponse]]
- ← Dependency: [[SaveCardResponse]]
- ← Dependency: [[GetCardInfoResponse]]
- ← Dependency: [[VerifyCardDataResponse]]
- → Dependency: [[ErrorCodeType]]

## 📊 Appears In (4 diagrams)

- Logical: CardEvidenceWS - DeleteCard
- Logical: CardEvidenceWS - GetCardInfo
- Logical: CardEvidenceWS - SaveCard
- Logical: CardEvidenceWS - VerifyCardData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | ErrorCodeType |  |
| description | string |  |

---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1"
domain: "Analysis Model"
element_id: 1598975
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 HardCheckDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1

## 🔗 Connections (5)

- → Dependency: [[External Reference (Boundary 1598973)]]
- ← Dependency: [[ReplaceCardResponse (Class 1598981)]]
- ← Dependency «use»: [[ActivateCardResponse (Class 1598977)]]
- → Dependency: [[HardCheckResultDto (Class 1598972)]]
- → Usage: [[HardCheckTypeDto (Class 1598974)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS.ActivateCard
- Logical: CardOriginationWS.ReplaceCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | HardCheckTypeDto |  |
| result | HardCheckResultDto |  |

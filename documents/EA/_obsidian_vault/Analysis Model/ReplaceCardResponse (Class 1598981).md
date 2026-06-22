---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1"
domain: "Analysis Model"
element_id: 1598981
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 ReplaceCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1

## 🔗 Connections (6)

- ← Dependency: [[CardOriginationWS (Interface 1598938)]]
- → Dependency: [[HardCheckDto (Class 1598975)]]
- → Dependency «use»: [[HardCheckDto (Boundary 1599151)]]
- → Dependency «use»: [[TruncatedPan (Class 1598980)]]
- → Dependency «use»: [[External Reference (Boundary 1599152)]]
- → Dependency: [[ReplaceCardResultCodeDto (Class 1598979)]]

## 📊 Appears In (1 diagrams)

- Logical: CardOriginationWS.ReplaceCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ReplaceCardResultCodeDto |  |
| hardChecks | HardCheckDto |  |
| newPcid | long |  |
| truncatedPan | TruncatedPan |  |

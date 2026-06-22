---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2"
domain: "Analysis Model"
element_id: 1598999
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ReplaceCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2

## 🔗 Connections (3)

- → Dependency «use»: [[HardCheckDto (Class 1599012)]]
- → Dependency «use»: [[TruncatedPan (Class 1599032)]]
- ← Dependency «use»: [[CardOriginationWS (Interface 1598985)]]

## 📊 Appears In (1 diagrams)

- Logical: CardOriginationWS.ReplaceCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ReplaceCardResultCodeDto |  |
| hardChecks | HardCheckDto |  |
| newPcid | long |  |
| truncatedPan | TruncatedPan |  |

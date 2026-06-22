---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Messages"
domain: "Analysis Model"
element_id: 1598970
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ReserveInstantCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Messages

## 📝 Notes

Reserve card response.

## 🔗 Connections (3)

- ← Dependency: [[CardOriginationWS (Interface 1598938)]]
- → Dependency: [[TruncatedPan (Class 1598968)]]
- → Dependency: [[ReserveCardResultCodeDto (Enumeration 1598969)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ReserveInstantCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ReserveCardResultCodeDto |  |
| truncatedPan | TruncatedPan |  |

---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages"
domain: "Analysis Model"
element_id: 1599064
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ReserveInstantCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages

## 📝 Notes

Reserve card response.

## 🔗 Connections (3)

- → Dependency: [[ReserveCardResultCodeDto (Enumeration 1599069)]]
- → Dependency: [[TruncatedPan (Class 1599080)]]
- ← Dependency: [[CardOriginationWS]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ReserveInstantCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ReserveCardResultCodeDto |  |
| truncatedPan | TruncatedPan |  |

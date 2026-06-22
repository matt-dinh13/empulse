---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Messages"
domain: "Analysis Model"
element_id: 1598990
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ReserveInstantCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Messages

## 📝 Notes

Reserve card response.

## 🔗 Connections (3)

- → Dependency: [[ReserveCardResultCodeDto (Enumeration 1599026)]]
- → Dependency: [[TruncatedPan (Class 1599002)]]
- ← Dependency: [[CardOriginationWS (Interface 1598985)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ReserveInstantCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| truncatedPan | TruncatedPan |  |
| resultCode | ReserveCardResultCodeDto |  |

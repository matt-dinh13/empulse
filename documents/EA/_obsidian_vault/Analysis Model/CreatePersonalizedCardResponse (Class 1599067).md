---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages"
domain: "Analysis Model"
element_id: 1599067
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreatePersonalizedCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages

## 📝 Notes

Response for personal card creation.

## 🔗 Connections (3)

- → Dependency: [[TruncatedPan (Class 1599080)]]
- → Dependency: [[CreatePersonalizedCardResultCodeDto (Enumeration 1599081)]]
- ← Dependency: [[CardOriginationWS]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | CreatePersonalizedCardResultCodeDto |  |
| truncatedPan | TruncatedPan |  |
| pcid | long |  |

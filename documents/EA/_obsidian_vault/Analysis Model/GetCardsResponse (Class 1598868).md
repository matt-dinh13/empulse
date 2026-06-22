---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2"
domain: "Analysis Model"
element_id: 1598868
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 GetCardsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2

## 📝 Notes

Response to GetCardsRequest.

## 🔗 Connections (5)

- → Dependency: [[PageDto (Class 1598896)]]
- → Dependency: [[GetCardsResponseResultCodeDto]]
- → Dependency: [[CardDto (Class 1598883)]]
- ← Dependency: [[CardInfoWS (Interface 1598863)]]
- → Dependency: [[GetCardsResponseResultCodeDto (Enumeration 1598862)]]

## 📊 Appears In (1 diagrams)

- Logical: CardInfoWS.GetCards

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | GetCardsResponseResultCodeDto |  |
| pageInfo | PageDto |  |
| cards | CardDto |  |

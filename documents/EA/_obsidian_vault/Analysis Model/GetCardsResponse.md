---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163777
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetCardsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

Response to GetCardsRequest.

## 🔗 Connections (2)

- → Dependency: [[GetCardsResponseResultCodeDto]]
- ← Usage: [[CardManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cards | CardDto |  |
| resultCode | GetCardsResponseResultCodeDto |  |

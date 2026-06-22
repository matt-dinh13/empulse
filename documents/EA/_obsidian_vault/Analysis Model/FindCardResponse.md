---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163761
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 FindCardResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 🔗 Connections (5)

- → Dependency: [[FindCardResultCodeDto]]
- ← Usage: [[CardManagementWS]]
- ← Dependency: [[CardInfoWS (Interface 1598819)]]
- → Dependency: [[CardDetailDto (Class 1598845)]]
- ← Dependency: [[CardInfoWS (Interface 1598863)]]

## 📊 Appears In (4 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram
- Logical: CardInfoWS.FindCard
- Logical: CardInfoWS.FindCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| card | CardDetailDto |  |
| resultCode | FindCardResultCodeDto |  |

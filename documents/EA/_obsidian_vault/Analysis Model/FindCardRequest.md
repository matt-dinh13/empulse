---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163817
diagrams: 4
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 FindCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

Get all information for a card by given cuid, validity and last 4 pan numbers

## 🔗 Connections (3)

- ← Usage: [[CardManagementWS]]
- ← Dependency: [[CardInfoWS (Interface 1598819)]]
- ← Dependency: [[CardInfoWS (Interface 1598863)]]

## 📊 Appears In (4 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram
- Logical: CardInfoWS.FindCard
- Logical: CardInfoWS.FindCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| holderCuid | Cuid |  |
| plasticValidTo | date |  |
| panLast4Digits | Digits4 |  |

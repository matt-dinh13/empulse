---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS"
domain: "Analysis Model"
element_id: 1376948
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 UnblockCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS

## 📝 Notes

Unblock card request specifies blocks to be cleared. The Card may still stay blocked for different reason(s).

## 🔗 Connections (1)

- ← Dependency «use»: [[CardBlockWS (Interface 1243619)]]

## 📊 Appears In (1 diagrams)

- Logical: CardBlockWS.UnblockCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pcid | long |  |
| cardBlockTypeId | string |  |
| suppressFee | boolean |  |
| message | string |  |

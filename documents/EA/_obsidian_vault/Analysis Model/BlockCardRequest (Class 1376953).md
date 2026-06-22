---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS"
domain: "Analysis Model"
element_id: 1376953
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BlockCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS

## 📝 Notes

Block card request specifies blocks.

## 🔗 Connections (2)

- ← Dependency «use»: [[CardBlockWS (Interface 1243619)]]
- → Dependency «use»: [[CardBlockDto]]

## 📊 Appears In (1 diagrams)

- Logical: CardBlockWS.BlockCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pcid | long |  |
| block | CardBlockDto |  |
| suppressFee | boolean |  |

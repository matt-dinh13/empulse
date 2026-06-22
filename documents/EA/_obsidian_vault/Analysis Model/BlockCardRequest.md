---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163788
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BlockCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

Block card request specifies blocking reasons.

## 🔗 Connections (2)

- → Usage: [[NewCardBlockDto]]
- ← Dependency «use»: [[CardManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pcid | PaymentCardId |  |
| block | NewCardBlockDto |  |
| suppressFee | boolean |  |

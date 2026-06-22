---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Messages"
domain: "Analysis Model"
element_id: 1598971
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ReserveInstantCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Messages

## 📝 Notes

Request for reserve (instant) card operation.

## 🔗 Connections (2)

- ← Dependency: [[CardOriginationWS (Interface 1598938)]]
- → Dependency: [[CardHolderName (Class 1598967)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ReserveInstantCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| reservationCode | long |  |
| renewalCardTypeId | string |  |
| embossedName | string |  |
| pcid | long |  |
| cardHolderName | CardHolderName |  |
| reservationCardType | string |  |

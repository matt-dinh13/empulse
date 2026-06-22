---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Messages"
domain: "Analysis Model"
element_id: 1598997
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}ReserveInstantCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Messages

## 📝 Notes

Request for reserve (instant) card operation.

## 🔗 Connections (3)

- → Realisation: [[LOR-2664 Validation instant card type]]
- → Dependency: [[CardHolderName (Class 1599029)]]
- ← Dependency: [[CardOriginationWS (Interface 1598985)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ReserveInstantCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| embossedName | string |  |
| pcid | long |  |
| renewalCardTypeId | string |  |
| reservationCode | long |  |
| cardHolderName | CardHolderName |  |

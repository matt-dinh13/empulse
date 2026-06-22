---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages"
domain: "Analysis Model"
element_id: 1599059
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ReserveInstantCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages

## 📝 Notes

Request for reserve (instant) card operation.

## 🔗 Connections (3)

- → Dependency: [[CardHolderName (Class 1599091)]]
- → Realisation: [[LOR-2664 Validation instant card type]]
- ← Dependency: [[CardOriginationWS]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ReserveInstantCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| reservationCode | long |  |
| cardHolderName | CardHolderName |  |
| embossedName | string |  |
| pcid | long |  |
| renewalCardTypeId | string |  |
| reservationCardType | string |  |
| reservationValidTo | date |  |

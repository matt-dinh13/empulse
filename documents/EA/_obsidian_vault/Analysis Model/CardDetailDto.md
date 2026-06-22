---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Types"
domain: "Analysis Model"
element_id: 1481447
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 CardDetailDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Types

## 📝 Notes

Card detail

## 🔗 Connections (8)

- ← Dependency «use»: [[GetCardResponse]]
- → Dependency: [[LimitDto]]
- → Dependency: [[CardBlockDto (Class 1481440)]]
- → Dependency: [[PosDeliveryAddressDto]]
- → Generalization «XSDextension»: [[CardDto]]
- → Dependency: [[PlasticDto]]
- → Dependency: [[CardOperationDto]]
- → Dependency: [[CardDeliveryType]]

## 📊 Appears In (1 diagrams)

- Logical: Card management - Card structures - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| reservationCode | long |  |
| allowedOperations | CardOperationDto |  |
| limits | LimitDto |  |
| plastics | PlasticDto |  |
| lastPinChangeRequestDate | date |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |
| activeBlocks | CardBlockDto |  |
| cardDeliveryType | CardDeliveryType |  |

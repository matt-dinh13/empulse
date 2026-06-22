---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types"
domain: "Analysis Model"
element_id: 1598845
diagrams: 3
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 CardDetailDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types

## 📝 Notes

Card detail

## 🔗 Connections (10)

- ← Dependency: [[FindCardResponse]]
- ← Dependency: [[GetCardResponse (Class 1598822)]]
- → Dependency: [[CardOperationDto (Enumeration 1598828)]]
- → Dependency: [[PosDeliveryAddressDto (Class 1598837)]]
- → Dependency: [[CardBlockDetailDto]]
- → Dependency: [[CardDeliveryType (Enumeration 1598824)]]
- → Dependency: [[PermanentLimitDto]]
- → Dependency: [[PlasticDto (Class 1598830)]]
- → Dependency: [[TemporaryLimitDto]]
- → Generalization «XSDextension»: [[CardDto (Class 1598844)]]

## 📊 Appears In (3 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.FindCard
- Logical: CardInfoWS.GetCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| reservationCode | long |  |
| permanentLimits | PermanentLimitDto |  |
| allowedOperations | CardOperationDto |  |
| temporaryLimits | temporaryLimitDto |  |
| plastics | PlasticDto |  |
| lastPinChangeRequestDate | date |  |
| activeBlocks | CardBlockDetailDto |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |
| cardDeliveryType | CardDeliveryType |  |

---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types"
domain: "Analysis Model"
element_id: 1598891
diagrams: 3
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 CardDetailDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types

## 📝 Notes

Card detail

## 🔗 Connections (9)

- → Dependency: [[CardOperationDto (Enumeration 1598893)]]
- → Dependency: [[PlasticDto (Class 1598890)]]
- → Dependency: [[TemporaryLimitDto (Class 1598889)]]
- → Dependency: [[PermanentLimitDto (Class 1598885)]]
- → Dependency: [[CardDeliveryType (Enumeration 1598884)]]
- → Generalization «XSDextension»: [[CardDto (Class 1598883)]]
- → Dependency: [[PosDeliveryAddressDto (Class 1598881)]]
- → Dependency: [[CardBlockDetailDto (Class 1598873)]]
- ← Dependency: [[GetCardResponse (Class 1598870)]]

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

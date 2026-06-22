---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Messages"
domain: "Analysis Model"
element_id: 1598963
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 CreatePersonalizedCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Messages

## 📝 Notes

Request for personal card creation.

## 🔗 Connections (5)

- ← Dependency: [[CardOriginationWS (Interface 1598938)]]
- → Dependency: [[CardDeliveryType (Enumeration 1598948)]]
- → Dependency: [[ServiceCode (Class 1598959)]]
- → Dependency: [[AccountDto (Class 1598947)]]
- → Dependency: [[PosDeliveryAddressDto (Class 1598954)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CardDeliveryType | cardDeliveryType |  |
| cardHolderName | CardHolderName |  |
| CardTypeId | string |  |
| embossedName | string |  |
| holderCUID | long |  |
| serviceCode | serviceCode |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |
| ApprovedCreditLimit | decimal |  |
| account | AccountDto |  |

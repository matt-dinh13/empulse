---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Messages"
domain: "Analysis Model"
element_id: 1598996
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 CreatePersonalizedCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Messages

## 📝 Notes

Request for personal card creation.

## 🔗 Connections (5)

- → Dependency: [[AccountDto (Class 1599016)]]
- → Dependency: [[PosDeliveryAddressDto (Class 1599027)]]
- → Dependency: [[ServiceCode (Class 1599021)]]
- → Dependency: [[CardDeliveryType (Enumeration 1599028)]]
- ← Dependency: [[CardOriginationWS (Interface 1598985)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CardDeliveryType | cardDeliveryType |  |
| ApprovedCreditLimit | decimal |  |
| cardHolderName | CardHolderName |  |
| CardTypeId | string |  |
| serviceCode | serviceCode |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |
| holderCUID | long |  |
| embossedName | string |  |
| account | AccountDto |  |

---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages"
domain: "Analysis Model"
element_id: 1599065
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 CreatePersonalizedCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages

## 📝 Notes

Request for personal card creation.

## 🔗 Connections (5)

- → Dependency: [[CardDeliveryType (Enumeration 1599073)]]
- → Dependency: [[PosDeliveryAddressDto (Class 1599086)]]
- → Dependency: [[ServiceCode (Class 1599088)]]
- → Dependency: [[AccountDto (Class 1599085)]]
- ← Dependency: [[CardOriginationWS]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| account | AccountDto |  |
| CardDeliveryType | cardDeliveryType |  |
| ApprovedCreditLimit | decimal |  |
| serviceCode | serviceCode |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |
| holderCUID | long |  |
| embossedName | string |  |
| CardTypeId | string |  |
| cardHolderName | CardHolderName |  |

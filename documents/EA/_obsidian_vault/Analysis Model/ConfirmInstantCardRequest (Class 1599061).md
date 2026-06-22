---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages"
domain: "Analysis Model"
element_id: 1599061
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ConfirmInstantCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages

## 🔗 Connections (5)

- → Dependency: [[AccountDto (Class 1599085)]]
- → Dependency: [[ServiceCode (Class 1599088)]]
- → Dependency: [[PosDeliveryAddressDto (Class 1599086)]]
- → Dependency: [[CardDeliveryType (Enumeration 1599073)]]
- ← Dependency: [[CardOriginationWS]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ConfirmInstantCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ApprovedCreditLimit | decimal |  |
| serviceCode | serviceCode |  |
| renewalCardTypeId | string |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |
| pcid | long |  |
| cardDeliveryType | CardDeliveryType |  |
| account | AccountDto |  |
| holderCuid | long |  |

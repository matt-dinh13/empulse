---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Messages"
domain: "Analysis Model"
element_id: 1598960
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ConfirmInstantCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Messages

## 🔗 Connections (5)

- ← Dependency: [[CardOriginationWS (Interface 1598938)]]
- → Dependency: [[PosDeliveryAddressDto (Class 1598954)]]
- → Dependency: [[AccountDto (Class 1598947)]]
- → Dependency: [[ServiceCode (Class 1598959)]]
- → Dependency: [[CardDeliveryType (Enumeration 1598948)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ConfirmInstantCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| account | AccountDto |  |
| ApprovedCreditLimit | decimal |  |
| cardDeliveryType | CardDeliveryType |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |
| renewalCardTypeId | string |  |
| holderCuid | long |  |
| serviceCode | serviceCode |  |
| pcid | long |  |

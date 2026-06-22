---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Messages"
domain: "Analysis Model"
element_id: 1598989
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ConfirmInstantCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Messages

## 🔗 Connections (5)

- → Dependency: [[CardDeliveryType (Enumeration 1599028)]]
- → Dependency: [[AccountDto (Class 1599016)]]
- → Dependency: [[ServiceCode (Class 1599021)]]
- → Dependency: [[PosDeliveryAddressDto (Class 1599027)]]
- ← Dependency: [[CardOriginationWS (Interface 1598985)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ConfirmInstantCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ApprovedCreditLimit | decimal |  |
| holderCuid | long |  |
| pcid | long |  |
| account | AccountDto |  |
| renewalCardTypeId | string |  |
| cardDeliveryType | CardDeliveryType |  |
| serviceCode | serviceCode |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |

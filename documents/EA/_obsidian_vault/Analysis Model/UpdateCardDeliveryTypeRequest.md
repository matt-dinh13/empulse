---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Messages"
domain: "Analysis Model"
element_id: 1163786
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 UpdateCardDeliveryTypeRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Messages

## 🔗 Connections (5)

- → Dependency: [[PosDeliveryAddressDto]]
- → Dependency: [[CardDeliveryType]]
- ← Dependency: [[CardManagementWS]]
- ← Dependency: [[CardModificationWS (Interface 1598798)]]
- ← Dependency: [[CardModificationWS (Interface 1598915)]]

## 📊 Appears In (4 diagrams)

- Logical: Card management - Messages - Interface diagram
- Logical: Card Management - Update card delivery address
- Logical: CardModificationWS.UpdateCardDeliveryType
- Logical: CardModificationWS.UpdateCardDeliveryType

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pcid | PaymentCardId |  |
| cardDeliveryType | CardDeliveryType |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |

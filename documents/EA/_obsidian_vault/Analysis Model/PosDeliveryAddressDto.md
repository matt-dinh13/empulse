---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Types"
domain: "Analysis Model"
element_id: 1481413
diagrams: 4
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 PosDeliveryAddressDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Types

## 🔗 Connections (11)

- ← Dependency: [[UpdateCardDeliveryTypeRequest]]
- → Dependency: [[FlatNumber]]
- → Dependency: [[Town (Class 1481428)]]
- → Dependency: [[BlockNumber]]
- → Dependency: [[District (Class 1481425)]]
- ← Dependency: [[CardDetailDto]]
- → Dependency: [[Street (Class 1481429)]]
- → Dependency: [[HouseNumber]]
- → Dependency: [[Region (Class 1481411)]]
- → Dependency: [[Zip]]
- → Dependency: [[SellerPlaceCode]]

## 📊 Appears In (4 diagrams)

- Logical: Card management - Card structures - Interface diagram
- Logical: Card Management - Update card delivery address
- Logical: CardModificationWS.UpdateCardDeliveryType
- Logical: CardModificationWS.UpdateCardDeliveryType

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sellerPlaceCode | SellerPlaceCode |  |
| zip | Zip |  |
| region | Region |  |
| district | District |  |
| town | Town |  |
| street | Street |  |
| houseNumber | HouseNumber |  |
| blockNumber | BlockNumber |  |
| flatNumber | FlatNumber |  |

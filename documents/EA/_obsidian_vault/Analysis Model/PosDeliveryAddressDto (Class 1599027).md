---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Types"
domain: "Analysis Model"
element_id: 1599027
diagrams: 3
connections: 12
tags:
  - class
  - analysis-model
---

# 🔷 PosDeliveryAddressDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Types

## 🔗 Connections (12)

- → Dependency: [[FlatNumber (Class 1599005)]]
- → Dependency: [[HouseNumber (Class 1599003)]]
- → Dependency: [[District (Class 1599001)]]
- ← Dependency: [[CreatePersonalizedCardRequest (Class 1598996)]]
- ← Dependency: [[ConfirmInstantCardRequest (Class 1598989)]]
- → Dependency: [[Region (Class 1599025)]]
- → Dependency: [[Subdistrict (Class 1599019)]]
- → Dependency: [[Street (Class 1599018)]]
- → Dependency: [[Town (Class 1599014)]]
- → Dependency: [[SellerPlaceCode (Class 1599013)]]
- → Dependency: [[BlockNumber (Class 1599011)]]
- → Dependency: [[Zip (Class 1599008)]]

## 📊 Appears In (3 diagrams)

- Logical: CardOriginationWS - types
- Logical: CardOriginationWS.ConfirmInstantCard
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| town | Town |  |
| zip | Zip |  |
| street | Street |  |
| sellerPlaceCode | SellerPlaceCode |  |
| houseNumber | HouseNumber |  |
| flatNumber | FlatNumber |  |
| district | District |  |
| blockNumber | BlockNumber |  |
| region | Region |  |
| subdistrict | Subdistrict |  |
